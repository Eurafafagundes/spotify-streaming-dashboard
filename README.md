# 🎧 Spotify Streaming Performance

Dashboard interativo desenvolvido para explorar e analisar o desempenho de **500 artistas no Spotify**, transformando dados brutos em KPIs, rankings e visualizações interativas.

O projeto foi desenvolvido como case de portfólio, combinando **Análise de Dados, Business Intelligence e Desenvolvimento Front-end**.

---

## 📊 Dashboard

> Adicione aqui a imagem principal do dashboard.

### 🌐 [Acessar Dashboard Online](COLE_AQUI_URL_DA_VERCEL)

---

## 🎯 Objetivo

Transformar uma base de dados sobre artistas e desempenho no Spotify em uma experiência analítica capaz de responder perguntas como:

- Quais artistas possuem maior volume de streams?
- Quais países concentram os artistas da base?
- Como os resultados se distribuem entre os gêneros musicais?
- Como diferentes segmentos alteram os principais indicadores?
- Quais artistas se destacam dentro de cada combinação de filtros?

O dashboard permite explorar essas informações dinamicamente sem precisar analisar diretamente o arquivo CSV.

---

## 📈 Principais análises

O dashboard apresenta indicadores e visualizações calculados a partir de uma base contendo **500 artistas**.

Entre as análises disponíveis estão:

- KPIs gerais de desempenho;
- ranking dos artistas com maior número de streams;
- participação por gênero musical;
- distribuição dos artistas por país;
- comparação entre diferentes segmentos da base;
- insights atualizados dinamicamente.

Todos os indicadores são recalculados conforme os filtros selecionados pelo usuário.

---

## 🔎 Filtros interativos

A aplicação permite segmentar os dados por:

- 🌎 País
- 🎵 Gênero musical
- 🗣️ Idioma
- 👤 Sexo
- 🏷️ Tipo
- 📅 Ano de estreia

Os filtros trabalham em conjunto, permitindo análises mais específicas sobre diferentes grupos de artistas.

---

## 🧠 Fluxo dos dados

```text
Google Sheets
      ↓
Fonte de dados
      ↓
Carregamento e tratamento
      ↓
React + TypeScript
      ↓
Filtros e cálculos
      ↓
KPIs + Rankings + Visualizações
      ↓
Dashboard interativo
