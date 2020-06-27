# Getting Started

<p>
  <a href="https://www.overleaf.com/docs?snip_uri=https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip" target="_blank" rel="noopener noreferrer">
    <img src="./img/open-in-overleaf.svg" alt="Open in Overleaf">
  </a>
  <a href="https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip">
    <img src="./img/download-zip.svg" alt="Download">
  </a>
  <a href="https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/" target="_blank" rel="noopener noreferrer">
    <img src="./img/version-1.1.svg" alt="Version 1.1">
  </a>
  <a href="/about">
    <img src="./img/license-CC-BY-NC-4.0.svg" alt="License CC BY-NC 4.0">
  </a>
</p>

This template is created for _pdfLaTeX_, but it is also compatible with _XeLaTeX_ or _LuaLaTeX_. _Natbib_ is used for the bibliography with as backend _BibTeX_. If you would like to use it on Overleaf, click the button above to get started immediately.

## 1. Document Structure

### 1.1 Structure

As an article can become quite a lengthy document, the main sections (such as introduction and conclusion) are separated into different files for convenience. All these files are inserted in the master file, `main.tex`, using the `\input{filename}` command. The abstract, nomenclature, acknowledgment and appendix can be found in the master file instead. The document class, which can be found in `tudelft-aiaa.cls`, is based on the article class by AIAA.

Finally, the bibliography is added using `\bibliography{article.bib}`, which uses the file `article.bib`. If you would like to change the default bibliography file, change the command accordingly, which can be found in the master file. See Section 3 for more detail about the bibliography.

### 1.2 Two Columns Option

By default, the article is only one column. Switching to two columns can be done by using the `twocolumn` global option, resulting in the first line in `main.tex` as can be seen below.

```LaTeX
\documentclass[twocolumn]{layout/tudelft-aiaa}
```

Floats, such as figures and tables, will behave like 'normal' in `twocolumn` mode and will therefore only occupy one column. In order to have a float span both columns (for example in combination with minipages or subfigures), an asterisk can be added to the environment. An example of a figure that will span both columns can be found below.

```LaTeX
\begin{figure*}[ht]
    \centering
    \includegraphics[width=0.8\linewidth]{image.jpg}
    \caption{Caption}
    \label{fig:label}
\end{figure*}
```

## 2. Guidelines

The Microsoft Word template for AE2223-I is the guiding template and nearly everything is taken care of in this template. In order to follow all guidelines regarding the article layout, the following information should still be noted:

- Paragraphs that follow a blank line should not be indented. Use `\noindent` to correct these indentations locally if needed. This works automatically after headings (sections, etc.)
- When referencing a figure or equation in text, `\autoref{}` will abbreviate to 'Fig.'' or 'Eq.' always. Use `\ref{}` at the beginning of sentences and write out 'Figure' or 'Equation' fully.

## 3. Bibliography

In the following sections, the most common entry types and (required/optional) fields per entry type are provided. Private communication or personal websites may only be incorporated in the main text or appear as footnotes. The DOI (digital object identifier) should always be given if it is available.

The optional fields outside the brackets are **almost always required**. Please refer to `article.bib` for actual examples. Make sure the actual output corresponds with the guidelines.

### Articles

- `@article`\
Required fields: `author` `title` `year` `journal`\
Optional fields: `volume` `number` `pages` `doi` (`url` `note`)

### Books

- `@inbook`\
Required fields: `author`/`editor` `title` `year` `publisher`\
Optional fields: `address` `pages`/`chapter` (`series` `doi` `url` `note`)

- `@book`\
Required fields: `author`/`editor` `title` `year` `publisher`\
Optional fields: `address` (`series` `doi` `url` `note`)

### Proceedings

- `@inproceedings`\
Required fields: `author` `title` `year` `booktitle` `pages`\
Optional fields: `publisher`/`organization` `address` (`volume` `series` `doi` `url` `note`)

- `@proceedings`\
Required fields: `title` `year`\
Optional fields: `editor` `publisher`/`organization` `address` (`volume` `number` `series` `doi` `url` `note`)

### Reports, Theses, and Individual Papers

- `@report`\
Required fields: `author` `title` `year`\
Optional fields: `number` `institution` `address` (`doi` `url` `note`)

- `@mastersthesis`\
Required fields: `author` `title` `year` `school`\
Optional fields: `address` (`doi` `url` `note`)

- `@phdthesis`\
Required fields: `author` `title` `year` `school`\
Optional fields: `address` (`doi` `url` `note`)
