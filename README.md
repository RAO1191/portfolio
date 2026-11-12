# Portfólio – Rodrigo Alves de Oliveira

Coordenador de TI e fundador da Artech, em Belo Horizonte (MG). Este repositório guarda o meu portfólio pessoal.

**🌐 Site:** https://rao1191.github.io/portfolio/

Site estático em HTML, CSS e JavaScript puro, **sem build e sem dependências**, disponível em português, inglês e francês. O idioma inicial segue o navegador e a escolha do visitante fica salva.

## Estrutura

```
.
├── index.html          # Página única: layout e template (seções, SVGs, links de contato)
├── css/
│   └── style.css       # Classes utilitárias, animações e suporte a "reduced motion"
├── js/
│   └── app.js          # Textos PT/EN/FR (objeto L) + mini motor de templates
├── assets/
│   ├── favicon.svg
│   └── img/            # Fotos do site (ver abaixo)
├── .nojekyll           # Faz o GitHub Pages servir os arquivos como estão
└── .vscode/            # Recomenda a extensão Live Server
```

### Como funciona

O conteúdo de `index.html` fica dentro de um `<template id="tpl">`. O `js/app.js` lê esse template e o preenche com os textos do idioma escolhido, usando três marcações simples:

| Marcação | O que faz |
| --- | --- |
| `{{caminho.do.valor}}` | Insere um texto do objeto de idioma |
| `<sc-for list="{{lista}}" as="item">` | Repete o bloco para cada item da lista |
| `<sc-if value="{{condicao}}">` | Mostra o bloco só se a condição for verdadeira |

Ao trocar de idioma, a página é redesenhada com uma pequena transição.

## Rodar localmente

1. Abra a pasta no VS Code (Arquivo > Abrir Pasta).
2. Instale a extensão **Live Server** (o VS Code vai sugerir).
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

Também funciona com qualquer servidor estático, por exemplo `npx serve .` ou `python -m http.server`.

## Fotos

Salve as imagens em `assets/img/` com estes nomes (JPG):

| Arquivo | Uso | Proporção |
| --- | --- | --- |
| `rodrigo.jpg` | Retrato | 4:5 (vertical) |
| `familia.jpg` | Família | 1:1 (quadrada) |
| `midia.jpg` | Tecnologia na igreja | 4:3 |
| `jovens.jpg` | Liderança de jovens | 4:3 |

Enquanto o arquivo não existir, aparece o espaço reservado. Use fotos com até ~300 KB. Se houver menores de idade nas fotos, tenha autorização dos responsáveis.

## Onde editar

- **Textos, projetos e experiência:** `js/app.js` (objeto `L`, no topo, um bloco por idioma).
- **Faixa de tecnologias:** constante `TECHS` em `js/app.js`.
- **Cores e animações:** `css/style.css` e os estilos em `index.html`
  (verde-limão `#C6FF3D`, rosa `#FF3D81`, violeta `#8B5CF6`, fundo `#07070D`).
- **Contato (WhatsApp, e-mail, LinkedIn, GitHub):** seção `#contato` em `index.html`.
- **Depois de mudar o CSS ou o JS:** troque o número em `?v=...` nos links de `css/style.css` e `js/app.js` no `index.html` (por exemplo, a data de hoje). Isso obriga os navegadores a baixarem a versão nova em vez de usar a cópia guardada.

## Publicação

O site é publicado pelo **GitHub Pages** a partir da branch `main` (pasta raiz). Cada `git push` na `main` atualiza o site em cerca de um minuto.

## Direitos

© Rodrigo Alves de Oliveira. Todos os direitos reservados. Os textos, as fotos e a identidade visual são pessoais. Fique à vontade para estudar o código como referência.
