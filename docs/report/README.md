# Report/Thesis Template

<p>
  <a href="https://www.overleaf.com/docs?snip_uri=https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template/archive/master.zip&engine=xelatex" target="_blank" >
    <img alt="Open in Overleaf" src="/badges/open-in-overleaf.svg">
  </a>
  <a href="https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template/archive/master.zip" >
    <img alt="Download .zip" src="/badges/download-zip.svg" hspace="4">
  </a>
  <a href="https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template" target="_blank">
    <img alt="Visit Github repository" src="/badges/visit-github-repository.svg">
  </a>
</p>

This template aims to simplify and improve the (Xe)LaTeX report/thesis template by Delft University of Technology with the following three main design principles:

* **Simplicity First:** A class file that has been reduced by nearly 70% to simplify customization;
* **Effortless:** A careful selection of common packages to get started immediately;
* **Complete:** Ready-to-go when it comes to the document and file structure.

This template works with _pdfLaTeX_, _XeLaTeX_ and _LuaLaTeX_. In order to adhere to the TU Delft house style, either _XeLaTeX_ or _LuaLaTeX_ is required, as it supports TrueType and OpenType fonts. _BibLaTeX_ is used for the bibliography with as backend _biber_. If you would like to use it on Overleaf, click the badge above to get started immediately.

<p align="center">
  <img alt="TU Delft LaTeX Report Template" src="/images/report-template.jpg" width="30%" style='border:1px solid transparent'>
&nbsp;
  <img alt="TU Delft LaTeX Report Template Title Page" src="/images/report-template-title.jpg" width="30%" style='border:1px solid #c7c7c7'>
&nbsp;
  <img alt="TU Delft LaTeX Report Template Chapter Page" src="/images/report-template-chapter.jpg" width="30%" style='border:1px solid #c7c7c7'>
</p>

::: tip Any questions?
Visit the [FAQ](/report/faq.html) to see if that answers your question. For unanswered questions, suggestions or issues related to the template or this documentation, feel free to [contact me](/contact.html).
:::

## Structure of the Template

### File Structure and Document Class

As a report/thesis is generally a substantial document, the chapters and appendices have been separated into different files and folders for convenience. All these files are inserted in the main file, `report.tex`, using the `\input{filename}` command. The document class, which can be found in `layout/tudelft-report.cls`, is based on the `book` class.

The document class has one custom global option. To change the default behavior, provide the option as parameter to the `\documentclass{}` command as seen below. Note that the option is case-sensitive.

- **twoside**: margins and headers are adjusted and empty pages are added to resemble a printed (double-sided) book layout.

```latex
\documentclass[twoside,<option2>,...]{layout/tudelft-report}
```

### Document Structure

Between `\begin{document}` and `\end{document}`, the document is split into three parts by:

- `\frontmatter` uses Roman numerals for page numbering and is used for the title page, preface, summary, table of contents and nomenclature. The title page, preface, summary and nomenclature can be found in the `frontmatter` folder. The nomenclature uses the package `longtables`, which allows tables to flow over page boundaries;

- `\mainmatter` uses Arabic numerals for page and chapter numbering. The introduction, conclusion and two additional chapter files can be found in the `mainmatter` folder. The bibliography is added with `\printbibliography` and uses the file `report.bib` by default. See [here](/report/#bibliography) for more details;

- `\appendix` uses letters for the chapter numbering. Two chapters with an example with source code and a task division have been included respectively and can be found in the `appendix` folder.

## Cover and Title Page

The template will automatically generate a cover when the `\makecover` command is used. Beforehand, some information will have to be specified. The title, subtitle and author will also be present on the title page. Additionally, the author will be added to the preface.

- **Required for cover and title page:** `\title{...}`, `\author{...}`\
Try to make the title concise and add more information in the optional subtitle. As space is limited, the report title page includes a table to specify student names and numbers when working in a larger group. Take a look at the [FAQ](/report/faq.html#adding-a-table-with-authors-on-the-cover-page) if you would like to add a table with authors on the cover.

- **Required for cover page only:** `\coverimage{...}`, `\definecolor{title}{HTML}{...}`\
The recommended aspect ratio of the image is 2:3 (portrait). The color of the title is defined with the second command. In this form, it accepts HTML color codes, but switching to rgb, cmyk and other models is also possible. Take a look at the [Overleaf guide](https://www.overleaf.com/learn/latex/Using_colours_in_LaTeX#Creating_your_own_colours) for more details.

- **Optional:** `\subtitle{...}`, `\subject{...}`, `\affiliation{...}`

To give greater flexibility over the title page, the layout is specified in `title-report.tex`. A title page for theses is also available: `title-thesis.tex`. Change the corresponding `\input{...}` command in the main file to switch. Make sure to check the requirements and modify the file according to your needs.

## Bibliography

The bibliography has been set up in `report.tex` to allow for easy customization. It is included in the table of contents and renamed to 'References' using the `heading=bibintoc` and `title=References` options of the `\printbibliography` command respectively. If you would like to use a different `.bib` file, change the command `\addbibresource{report.bib}` accordingly. More information about setting up, customizing and using a bibliography can be found [here](/learn/bibliography-and-citing.html#setting-up).
