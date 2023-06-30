# FAQ

Answers to questions that are directly related to the report/thesis template can be found below. More general questions and answers have been incorporated in a quick reference manual and can now be found under the *'Learn'* menu. Some quick shortcuts:

[→ How to change the style or sorting order of the bibliography?](/learn/bibliography-and-citing.html#setting-up-the-bibliography)\
[→ How to cross-reference with 'cleveref'?](/learn/cleveref.html)\
[→ How to include source code with 'listings'?](/learn/listings.html)

## Using the template in Dutch

Although the template is fully in English, switching to Dutch (or any other language) has been made as easy as possible. There is no hardcoded English in the class file, leaving only the document files to be translated. Some notes:

- Making sure the appropriate hyphenation rules and quotes are used can be done by adding *babel* and *csquotes* to the preamble:

```latex
\usepackage[dutch]{babel}
\usepackage{csquotes}
```

- The affiliation on the cover is defined with `\affiliation{}` in `report.tex`.
- Adding *babel* will also ensure a translated title of the table of contents.
- The references can be renamed by changing the `title=References` option of the `\printbibliography` command in `report.tex`.

## Creative Spacing

Meeting the page limit requirements is nothing more than using spacing creatively. As such, here is an incomplete list to change some of these spacings. Changing the spacing has to be done in the class file (`tudelft-report.cls`), unless stated otherwise. In some cases, the spacing can be negative to reduce whitespace to the absolute minimum.

- **Page margins**\
  The geometry of the page is defined with the command below. You could change the scale to your desire, replace it with a simple `margin=<length>` or fine-tune it with many different parameters. For the latter option, visit the [Overleaf guide](https://www.overleaf.com/learn/latex/page_size_and_margins#Fine_tuning_your_LaTeX_page_dimensions) on page size and margins.

  ```latex
  %% Scaling the margins to be slightly smaller than default (.7)
  \geometry{a4paper,hscale=0.75,vscale=0.8}
  ```

- **Titles (`\chapter`, `\section`, etc) and their spacing**\
  The titles and its spacings are defined by `\titleformat` and `\titlespacing`. For example, the `\chapter` is defined by:

  ```latex
  %% Format the chapter titles and spacing
  \titleformat{\chapter}[display]
      {\flushright}
      {\fontsize{96}{96}\selectfont\largetitlestyle\thechapter}
      {0pt}
      {\Huge\titlestyle}
  \titlespacing*{\chapter}{0pt}{0pt}{2\baselineskip}
  ```

  To give some ideas: (1) the size of the chapter number is defined by `\fontsize{96}{96}`, (2) the size of the title is defined by `\Huge` and (3) the spacing between the title and the text is defined by `2\baselineskip`. The formatting of the sections is done in similar fashion. See the container at the bottom of [this section](/learn/chapters-sections-and-text.html#chapters-and-sections) for more details about the `\titleformat` command.

  If you would like to move the chapter number to the same line as the chapter title, replace the titleformat command (line 2-6 in the previous code block) with:

  ```latex
  \titleformat{\chapter}
    {\Huge\flushright\titlestyle}
    {\thechapter.}
    {5pt}
    {}
  ```

## Table with authors on the cover

As the `\author{}` command will break if any LaTeX commands are included, version 1.5 added the `\covertable{}` command to easily add a table of authors on the cover page. The `\author{}` command will still have to be defined and will be added to the metadata of the PDF, the title page and preface. The cover page will instead use `\covertable{}` if it is defined. Although you could theoretically use the command however you want, an example with the intended use-case can be found below:

```latex
%% Add a table to the cover page; add this command before \makecover
\covertable{\fontsize{20.74}{20.74}\selectfont
    \begin{tabularx}{\linewidth}{@{}XX}
        D. Bernoulli (1234567) & I. Newton (9876543) \\
        M. Curie (9876543) & A. Einstein (1234567) \\
        W. Wright (1234567)  & O. Wright (9876543) \\
    \end{tabularx}
}
```

<p align="center">
  <img alt="TU Delft LaTeX Report Template Author Table" src="/images/report-template-faq-authors.jpg" width="275">
</p>

## More cover images with open licenses

An additional six high quality cover images related to aerospace engineering can be found below. Make sure to appropriately credit the image if you decide to use one of them.

<p align="center">
  <b>1</b> <img alt="TU Delft LaTeX Report Template Cover 1" src="/images/report-template-cover-1.jpg" width="25%" style="display: inline-block">
&nbsp;
  <b>2</b> <img alt="TU Delft LaTeX Report Template Cover 2" src="/images/report-template-cover-2.jpg" width="25%" style="display: inline-block">
&nbsp;
  <b>3</b> <img alt="TU Delft LaTeX Report Template Cover 3" src="/images/report-template-cover-3.jpg" width="25%" style="display: inline-block">
</p>

<p align="center">
  <b>4</b> <img alt="TU Delft LaTeX Report Template Cover 4" src="/images/report-template-cover-4.jpg" width="25%" style="display: inline-block">
&nbsp;  
  <b>5</b> <img alt="TU Delft LaTeX Report Template Cover 5" src="/images/report-template-cover-5.jpg" width="25%" style="display: inline-block">
&nbsp;
  <b>6</b> <img alt="TU Delft LaTeX Report Template Cover 6" src="/images/report-template-cover-6.jpg" width="25%" style="display: inline-block">
</p>

The recommended color of the title as a HTML color code is `4884d6` for the first two images. For the third and fourth image `fe860e` is recommended. For the final two images, the title color `e3a01b` is recommended.

| Download | Description with Attribution |
|----------|------------------------------|
| <a href="/images/cover1.jpg" target="_blank">cover1.jpg</a> | Storm Cell Over the Southern Appalachian Mountains by NASA/Stu Broce under CC BY 2.0 |
| <a href="/images/cover2.jpg" target="_blank">cover2.jpg</a> | City Lights of Africa, Europe, and the Middle East by NASA Earth Observatory under CC BY 2.0 |
| <a href="/images/cover3.jpg" target="_blank">cover3.jpg</a> | Render of Daybreak at Gale Crater by NASA/JPL-Caltech under CC BY 2.0 |
| <a href="/images/cover4.jpg" target="_blank">cover4.jpg</a> | Royal Air Force Voyager Transport Tanker Aircraft by Ministry of Defense/Cpl Ashley Keates under OGL v1.0 |
| <a href="/images/cover5.jpg" target="_blank">cover5.jpg</a> | Aircraft Flying in the Sunset by Gerhard Gellinger |
| <a href="/images/cover6.jpg" target="_blank">cover6.jpg</a> | F18 at Bodo Air Base Norway by Ministerio de Defensa España under CC BY-NC 2.0 |
