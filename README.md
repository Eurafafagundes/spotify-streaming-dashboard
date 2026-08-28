# 🎧 Spotify Streaming Performance

Dashboard interativo desenvolvido para explorar e analisar dados de desempenho de artistas no Spotify.

O projeto transforma dados de streaming em **KPIs, rankings e visualizações interativas**, permitindo identificar padrões de desempenho por artista, gênero, país e outras características.

🔗 **Dashboard online:**  
https://spotify-streaming-dashboard.vercel.app/

---

## 📊 Sobre o projeto

O objetivo deste projeto foi desenvolver uma solução que unisse **Análise de Dados, Business Intelligence e Desenvolvimento Web**, transformando uma base de dados de artistas em informações visuais e fáceis de explorar.

O dashboard permite acompanhar indicadores gerais de streaming e realizar análises segmentadas através de filtros dinâmicos.

---

## 📈 Principais análises

O dashboard apresenta indicadores e visualizações como:

- Total de streams;
- Média de streams por artista;
- Quantidade de artistas analisados;
- Ranking dos artistas com maior número de streams;
- Distribuição de streams por gênero musical;
- Países com maior participação;
- Comparações entre diferentes perfis de artistas;
- Insights atualizados conforme os filtros selecionados.

A base utilizada contém dados de **500 artistas**.

---

## 🔎 Filtros interativos

As análises podem ser segmentadas por:

- País;
- Gênero musical;
- Idioma;
- Sexo;
- Tipo;
- Ano de estreia.

Os KPIs, rankings e visualizações são recalculados conforme os filtros aplicados.

---

## 🗂️ Fonte e fluxo dos dados

Os dados utilizados no projeto são organizados no **Google Sheets** e disponibilizados para a aplicação em formato CSV.

Fluxo simplificado:

```text
Google Sheets
      ↓
     CSV
      ↓
Tratamento dos dados
      ↓
Aplicação React
      ↓
KPIs + Rankings + Visualizações
```

Essa estrutura permite trabalhar conceitos de análise e transformação de dados juntamente com o desenvolvimento da interface responsável por apresentar os resultados.

---

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| React 19 | Construção da interface |
| TypeScript | Desenvolvimento e tipagem |
| Google Sheets | Organização da fonte de dados |
| CSV | Disponibilização dos dados para a aplicação |
| Vinext / Vite | Build e desenvolvimento |
| CSS | Interface e responsividade |
| Vercel | Deploy da aplicação |

---

## 💡 Competências aplicadas

Durante o desenvolvimento foram aplicados conceitos de:

- Data Analytics;
- Business Intelligence;
- definição e construção de KPIs;
- tratamento e transformação de dados;
- visualização de dados;
- análise exploratória;
- desenvolvimento de dashboards;
- desenvolvimento Front-end;
- interfaces responsivas;
- integração entre dados e aplicação.

---

## 📱 Responsividade

O dashboard foi desenvolvido para funcionar em diferentes tamanhos de tela, permitindo a visualização tanto em desktop quanto em dispositivos móveis.

---

## 🚀 Executar localmente

Clone o repositório:

```bash
git clone https://github.com/Eurafafagundes/spotify-streaming-dashboard.git
```

Entre na pasta:

```bash
cd spotify-streaming-dashboard
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## 🌐 Deploy

A aplicação está publicada na Vercel:

👉 https://spotify-streaming-dashboard.vercel.app/

---

## 👨‍💻 Autor

**Rafael Fagundes**

Análise de Dados | Business Intelligence | Python | SQL | Power BI

[LinkedIn](https://www.linkedin.com/in/rafael-fagundes-29868b39a/)  
[GitHub](https://github.com/Eurafafagundes)
