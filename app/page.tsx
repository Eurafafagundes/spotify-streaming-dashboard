'use client';

import { useEffect, useMemo, useState } from 'react';

type Row = Record<string, string>;
const fields = [
  ['País', 'País de Origem'], ['Gênero', 'Gênero Musical Principal'],
  ['Idioma', 'Idioma Principal'], ['Sexo', 'Sexo'],
  ['Tipo de Artista', 'Tipo de Artista'], ['Ano de Estreia', 'Ano de Estreia'],
];
const num = (row: Row, key: string) => Number(row[key] || 0);
const compact = (n: number) => new Intl.NumberFormat('pt-BR', { notation:'compact', maximumFractionDigits:1 }).format(n);

export default function Home() {
  const [rows, setRows] = useState<Row[]>([]);
  const [filters, setFilters] = useState<Record<string,string>>({});
  useEffect(() => { fetch('/spotify_streaming.csv').then(r=>r.text()).then(text => {
    const [header, ...lines] = text.trim().split(/\r?\n/); const keys = header.split(',');
    setRows(lines.map(line => Object.fromEntries(line.split(',').map((v,i)=>[keys[i],v]))));
  }); }, []);
  const filtered = useMemo(() => rows.filter(row => Object.entries(filters).every(([k,v])=>!v || row[k]===v)), [rows,filters]);
  const options = (key:string) => [...new Set(rows.map(r=>r[key]))].filter(Boolean).sort((a,b)=>a.localeCompare(b));
  const total = filtered.reduce((s,r)=>s+num(r,'Total de Streams (milhões)'),0);
  const avg = filtered.length ? total/filtered.length : 0;
  const group = (key:string) => Object.entries(filtered.reduce<Record<string,number>>((a,r)=>{const k=r[key]||'Outros';a[k]=(a[k]||0)+num(r,'Total de Streams (milhões)');return a},{})).sort((a,b)=>b[1]-a[1]);
  const genres = group('Gênero Musical Principal'); const countries=group('País de Origem').slice(0,5);
  const top = [...filtered].sort((a,b)=>num(b,'Total de Streams (milhões)')-num(a,'Total de Streams (milhões)')).slice(0,10);
  const maxTop = Math.max(...top.map(r=>num(r,'Total de Streams (milhões)')),1);
  const leaderShare = total ? ((genres[0]?.[1]||0)/total)*100 : 0;
  return <main className="dashboard-shell">
    <header className="hero"><div><p className="eyebrow">PORTFÓLIO • ANÁLISE DE DADOS</p><h1>Spotify Streaming Performance</h1><p>Panorama global de artistas, gêneros e desempenho de streaming</p></div><span className="live-pill"><i/> {rows.length ? `${filtered.length} registros` : 'Carregando dados'}</span></header>
    <section className="dashboard-grid">
      <aside className="filters panel"><div className="section-title"><span>Filtros</span><button onClick={()=>setFilters({})}>Limpar</button></div>{fields.map(([label,key])=><label key={key}><span>{label}</span><select aria-label={label} value={filters[key]||''} onChange={e=>setFilters({...filters,[key]:e.target.value})}><option value="">Todos</option>{options(key).map(v=><option key={v}>{v}</option>)}</select></label>)}</aside>
      <div className="content">
        <section className="kpis"><article className="kpi"><span>Total de Streams</span><strong>{compact(total)} mi</strong><small>milhões acumulados</small></article><article className="kpi"><span>Total de Artistas</span><strong>{filtered.length}</strong><small>na seleção atual</small></article><article className="kpi"><span>Média de Streams</span><strong>{compact(avg)} mi</strong><small>por artista</small></article><article className="kpi"><span>Gênero Líder</span><strong>{genres[0]?.[0]||'—'}</strong><small>{leaderShare.toFixed(1).replace('.',',')}% dos streams</small></article></section>
        <section className="visual-grid">
          <article className="panel chart-card chart-wide"><div className="section-title"><span>Top 10 artistas por streams</span><b>RANKING</b></div><div className="bars">{top.map(r=><div className="bar-row" key={r['Nome do Artista']}><span title={r['Nome do Artista']}>{r['Nome do Artista']}</span><div><i style={{width:`${num(r,'Total de Streams (milhões)')/maxTop*100}%`}}/><em>{compact(num(r,'Total de Streams (milhões)'))}</em></div></div>)}</div></article>
          <article className="panel chart-card"><div className="section-title"><span>Participação por gênero</span></div><div className="donut" style={{background:`conic-gradient(var(--green) 0 ${leaderShare}%,#44705a ${leaderShare}% ${Math.min(leaderShare+25,100)}%,#1b292d ${Math.min(leaderShare+25,100)}%)`}}><div><strong>{leaderShare.toFixed(0)}%</strong><span>{genres[0]?.[0]}</span></div></div><div className="legend"><span><i className="green"/>{genres[0]?.[0]}</span><span><i/>{genres[1]?.[0]}</span><span><i/>Outros</span></div></article>
          <article className="panel chart-card country-card"><div className="section-title"><span>Países em destaque</span></div>{countries.map(([name,value])=><div className="country" key={name}><span>{name}</span><strong>{compact(value)}</strong></div>)}</article>
          <article className="panel chart-card insight"><div className="section-title"><span>Insight automático</span></div><strong>{top[0]?.['Nome do Artista']||'—'} lidera a seleção atual.</strong><p>O gênero {genres[0]?.[0]||'—'} representa {leaderShare.toFixed(1).replace('.',',')}% do volume analisado. Use os filtros para explorar novos recortes.</p></article>
        </section>
      </div>
    </section>
  </main>;
}
