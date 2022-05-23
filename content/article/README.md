# Article Template

<p>
  <a href="https://www.overleaf.com/docs?snip_uri=https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip" target="_blank" >
    <img alt="Open in Overleaf" src="/badges/open-in-overleaf.svg">
  </a>
  <a href="https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip" >
    <img alt="Download .zip" src="/badges/download-zip.svg" hspace="4">
  </a>
  <a href="https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template" target="_blank">
    <img alt="Visit Github repository" src="/badges/visit-github-repository.svg">
  </a>
</p>

This template aimed to simplify and improve the template provided in the course AE2333-I. Though it might still be useful for that course, the template is now intended to be a simple article template that is based on the official AIAA template. The following three main design principles apply:

* **Simplicity First:** An organised class file with an option to switch to two columns easily;
* **Effortless:** A careful selection of common packages to get started immediately;
* **Complete:** Ready-to-go when it comes to the structure + An extensive sample bibliography.

This template is created for _pdfLaTeX_, but it is also compatible with _XeLaTeX_ or _LuaLaTeX_. _Natbib_ is used for the bibliography with as backend _BibTeX_. If you would like to use it on Overleaf, click the badge above to get started immediately.

<p align="center">
  <img alt="TU Delft LaTeX Article Template" src="/images/article-template.jpg" width="40%" style='border:1px solid #c7c7c7'>
&nbsp;
  <img alt="TU Delft LaTeX Article Template Twocolumn" src="/images/article-template-twocolumn.jpg" width="40%" style='border:1px solid #c7c7c7'>
</p>

::: tip Any questions?
Visit the [FAQ](/report/faq.html) to see if that answers your question. For unanswered questions, suggestions or issues related to the template or this documentation, feel free to [contact me](/contact.html).
:::

##  Structure of the Template

As an article can become quite a lengthy document, the main sections (such as the introduction and conclusion) are separated into different files for convenience. All these files are inserted in the main file, `article.tex`, using the `\input{filename}` command. The abstract, nomenclature, acknowledgment and appendix can be found in the main file instead.

The bibliography is added using `\bibliography{article.bib}`, which uses the file `article.bib`. If you would like to change the default bibliography file, change the command accordingly, which can be found in the main file. See [here](/article/#bibliography) for more detail about the bibliography.

## Document Class

The document class, which can be found in `layout/tudelft-aiaa.cls`, is based on the article class by AIAA. The article is one column by default, but also supports two columns with the `twocolumn` option. To change the default behavior, provide the option as parameter to the `\documentclass{}` command as seen below. Note that the option is case-sensitive.

```latex
\documentclass[twocolumn,<option2>,...]{layout/tudelft-aiaa}
```

## Bibliography

In the following sections, the most common entry types and (required/optional) fields per entry type are provided. Private communication or personal websites may officially only be incorporated in the main text or appear as footnotes. The DOI (digital object identifier) should always be given if it is available.

The optional fields outside the brackets are almost always required. Please refer to `article.bib` for examples. Make sure the actual output corresponds with the guidelines.

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
