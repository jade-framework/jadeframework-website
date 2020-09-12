import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --color-jade: #00a86b;
    --color-persian-green: #00ac98;
    --color-puerto-rico: #4ac1b4;
    --color-buttercup: #f4a41d;
    --color-pomegranate: #ee4523;
    --color-flamingo: #f16132;
    --color-claret: #7c1541;
    --font-family-content: Avenir, sans-serif;
    --font-family-header: Avenir, sans-serif;
    --font-family-code: "Fira Code", source-code-pro, Menlo, Monaco, Consolas,
      "Courier New", monospace;
    --color-primary: var(--color-buttercup);
    --color-success: var(--color-persian-green);
    --color-danger: var(--color-pomegranate);
    --color-link: var(--color-jade);
    --color-link-hover: var(--color-flamingo);

  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 18px;
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    font-family: var(--font-family-content);
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
  code {
    background: #f5f2f0;
    font-size: 0.9rem;
    font-family: var(--font-family-code);
    word-wrap: break-word;
  }
  p {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  a {
    color: var(--color-link);
    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    color: var(--color-link-hover);
    cursor: pointer;    
  }

  a.active-link {
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-family-header);
    font-weight: 900;
    color: var(--color-jade);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.17rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.12rem;
    margin-bottom: 1rem;
  }

  .emphasize {
    font-style: italic;
    font-weight: bold;
  }

  .strong {
    font-weight: bold;
  }

  .slick-slide {
    margin-bottom: 2rem;
  }
  
  .slick-dots {
    bottom: 1rem;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #00a86b;
  }

  p.slide-caption {
    width: 100%;
    line-height: 10vw;
    color: var(--color-claret);
    font-family: Arial, sans-serif;
    text-align: center;
    font-size: 0.8em;

  }

  .slick-track {
    display: flex;
  }

  .slick-track .slick-slide {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
  }

  .slick-dots a {
    padding: 4px;
  }

  .superscript { 
    position: relative; 
    top: -0.5em; 
    font-size: 80%; 
    color: blue;
  }

  .citation-table {
    font-size: 0.8em;
    font-family: "Times New Roman", Times, serif 
  }

  .citation-table td:first-child {
    font-weight: bold;
  }

  .citation-attr td {
    padding: 5px;
    text-align: left;
  }

  .citation-table tr th {
    margin-bottom: 5px;
  }

  table {
    margin: 0 auto;
    table-layout: fixed;
    width: 95%;
  }

  table tr {
    border-bottom: 1px solid #bbb;
    line-height: 1.5rem;
  }

  table th {
    font-weight: bold;
    padding: 4px;
    text-align: left;
  }

  table th.doc-command {
    width: 35%;
  }

  table th.doc-desc {
    width: 65%;
  }

  table td {
    padding: 4px;
    text-align: left;
  }

  #ssg-table th, #ssg-table td, #jam-table td {
    text-align: center;
  }

  #jam-table {
    width: 60%;
  }

  #jam-table td {
    border: 1px solid #ffffff;
    border-radius: 10px;
  }

  #jam-table tr:last-child {
    background-color: grey;
    color: white;
    font-weight: bold;
  }

  #jam-table tr:first-child {
    background-color: var(--color-jade);
    color: black;
  }

  #ssg-table {
    width: 80%;
  }

  #ssg-table th {
    font-weight: bold;
  }

  .span-wrapper {
    margin-left: 0.1rem;
    margin-right: 0.3rem;
  }

  .slick-slider { width: 1px; min-width: 100%; *width: 100%; }
  
  pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #35495e;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
}

@media only screen and (max-width: 600px) {
  #jam-table {
    font-size: 0.8em;
  }
}
`

export default GlobalStyles
