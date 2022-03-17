# FAQ

Answers to some of the more common questions can be found below. A general knowledge of LaTeX is assumed. As only the basics are described here, you might want to take a look at the documentation of the package in question if you have very specific questions or if you would like more information. Feel free to [contact me](/about.html#contact) if you have more questions.

[[toc]]

## Package-specific

### Cross-referencing with 'cleveref'

Although similar to the standard `\ref{}` and the `\autoref{}` command from the `hyperref` package, cleveref has the benefits of `\autoref{}` (as it also produces the reference kind) but is also more flexible when it comes to capitalization. The basic usage is as follows:

```latex
\section{A section with a label}
\label{section:example}

\cref{section:example} % E.g. 'section 2.1'
\Cref{section:example} % E.g. 'Section 2.1'
```

It is also possible to cross-reference to multiple markers at once. The `\crefrange{}{}` can be used to reference to a range of markers, while the `\cref` command allows multiple comma-separated markers:

```latex
\crefrange{eqn:1}{eqn:5} % E.g. 'equation (2.1) to (2.5)'
\cref{eqn:1,tab:example,fig:example} % E.g. 'equation (2.1), table 2.1 and figure 2.1'
```

If you would like to enable capitalization everywhere, find the line where cleveref is imported in the class file (`/layout/tudelft-report.cls`) and load the package with the `capitalise` option:

```latex
\RequirePackage[noabbrev,nameinlink,capitalise]{cleveref} % Intelligent cross-referencing
```

### Including a PDF document with 'pdfpages'

In some cases it might be needed to include another PDF document in the appendix or you might want to include a PDF cover that was created in another program. In such cases, the package `pdfpages` can be used. The main command of the package is:

```latex
\includepdf[<key=val>]{<filename>}
```

The option `pages=<val>` can be used to specify which pages have to be inserted in the document. It is possible to specify a comma-separated list of page numbers (`pages={1,4,6}`) or include a range of page numbers (`pages={4-7}`). The latter also allows the insertion of all pages with `pages=-`. As an example: the following command will insert all pages of the document `example.pdf`:

```latex
\includepdf[pages=-]{example.pdf}
```

## Design and Layout of the Template

### How do I get as little/much text as possible on a single page?

Meeting the page limit requirements is nothing more than using spacing creatively. As such, here is an incomplete list to change some of these spacings. Changing the spacing has to be done in the class file (`layout/report-class.cls`), unless stated otherwise. In some cases, the spacing can be negative to reduce whitespace to the absolute minimum.

- **Page margins**\
  The geometry of the page is defined with the command below. You could change the scale to your desire, replace it with a simple `margin=<length>` or fine-tune it with many different parameters. For the latter option, visit the [Overleaf guide](https://www.overleaf.com/learn/latex/page_size_and_margins#Fine_tuning_your_LaTeX_page_dimensions) on page size and margins.

  ```latex
  %% Scaling the margins to be slightly smaller than default (.7)
  \geometry{a4paper,hscale=0.75,vscale=0.8}
  ```

- **Titles (`\chapter`, `\section`, etc) and their spacing**\
  The titles and its spacings are defined by `\titleformat` and `\titlespacing`. For example, the `\chapter` is defined by:

  ```latex
  %% Formatting chapter titles and spacing
  \titleformat{\chapter}[display]
      {\flushright}
      {\fontsize{96}{96}\selectfont\largetitlestyle\thechapter}
      {0pt}
      {\Huge}
  \titlespacing*{\chapter}{0pt}{0pt}{2\baselineskip}
  ```

  To give some ideas: (1) the size of the chapter number is defined by `\fontsize{96}{96}`, (2) the size of the title is defined by `\Huge` and (3) the spacing between the title and the text is defined by `2\baselineskip`. The formatting of the sections is done in similar fashion. See [this question](/report/faq.html#how-can-i-adjust-the-titles) for a more details about the `\titleformat` command.

  If you would like to move the chapter number to the same line as the chapter title, replace the titleformat command (line 2-6 in the previous code block) with:

  ```latex
  \titleformat{\chapter}
    {\Huge\flushright}
    {\thechapter.}
    {5pt}
    {}
  ```

### How can I adjust the titles?

If you are looking to change the style of the titles (such as `\chapter{}` or `\section{}`), navigate to the class file (`layout/tudelft-report.cls`) and find the lines where these titles are formatted. The standard format used in this template is:

  ```latex
  \titleformat{<command>}[<shape>]
      {<format>}                        % Applied to title and label
      {<label>}                         % Specify label and format
      {<sep>}                           % Separation between label and title
      {<before-code>}[<after-code>]     % Code before/after title body
  ```

For example, the `\chapter{}` is formatted with the following lines:

  ```latex
  %% Formatting chapter titles and spacing
  \titleformat{\chapter}[display]
      {\flushright}
      {\fontsize{96}{96}\selectfont\largetitlestyle\thechapter}
      {0pt}
      {\Huge}
  ```

In this example:

- <*shape*> is set to `display` to put the label on a different line.
- <*format*> is used to move the title and label to the right with `\flushright`.
- <*label*> includes the chapter number with `\thechapter`, but also increases and changes the font of the number with `\fontsize{96}{96}` and `\largetitlestyle` respectively.
- <*sep*> specifies the horizontal separation between the label and the title (or the vertical separation in case of `display`). In this case, the no extra vertical spacing is added.
- <*before code*> formats the title body: the size is increased and the font changed.

Take a look at the other instances of `\titleformat` to see other possible parameters. If you are interested, take a look at [documentation for titlesec](http://mirrors.ctan.org/macros/latex/contrib/titlesec/titlesec.pdf).

## Cover and Title Page

### More high quality cover images with open licenses

An additional six high quality cover images related to aerospace engineering can be found below. Make sure to appropriately credit the image if you decide to use one of them.

<p align="center">
  <b>1</b> <img alt="TU Delft LaTeX Report Template Cover 1" src="/images/report-template-cover-1.jpg" width="25%">
&nbsp;
  <b>2</b> <img alt="TU Delft LaTeX Report Template Cover 2" src="/images/report-template-cover-2.jpg" width="25%">
&nbsp;
  <b>3</b> <img alt="TU Delft LaTeX Report Template Cover 3" src="/images/report-template-cover-3.jpg" width="25%">
</p>

<p align="center">
  <b>4</b> <img alt="TU Delft LaTeX Report Template Cover 4" src="/images/report-template-cover-4.jpg" width="25%">
&nbsp;  
  <b>5</b> <img alt="TU Delft LaTeX Report Template Cover 5" src="/images/report-template-cover-5.jpg" width="25%">
&nbsp;
  <b>6</b> <img alt="TU Delft LaTeX Report Template Cover 6" src="/images/report-template-cover-6.jpg" width="25%">
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

### How do I add a table with authors on the cover page?

As the `\author{}` command will break if any LaTeX code is included, version 1.5 added `\covertable{}` to add a table of authors on the cover page easily. The `\author{}` command will still have to be defined and will be added to the metadata of the PDF, the title page and preface. The cover page will instead use `\covertable{}` if it is defined. Although you could theoretically use the command however you want, an example with the intended use-case can be found below:

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

## Bibliography / References

### How do I change the bibliography style?

The default style of BibLaTeX is numeric. You can change it by specifying a different style when the package is imported. Navigate to the main file (`report.tex`) and find the line where BibLaTeX is imported:

```latex
%% Setting up the bibliography
\usepackage{biblatex}
```

Some of the more common bibliography styles you will likely use are:

- **ieee:** [1] J. Anderson, *Introduction to Flight*, 8th international ed. New York, United States: McGraw Hill Education, 2016.
- **apa:** Anderson, J. (2016). *Introduction to flight* (8th international ed.). McGraw Hill Education.
- **apa6:** Anderson, J. (2016). *Introduction to flight* (8th international ed.). New York, United States: McGraw Hill Education.

Add the style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the style is case-sensitive.

```latex
\usepackage[style=apa6]{biblatex}
```

### How do I change the sorting order of the entries?

The default sorting order of BibLaTeX is by the authors' last name. You can change it by specifying a different order when the package is imported. Navigate to the main file (`report.tex`) and find the line where BibLaTeX is imported:

```latex
%% Setting up the bibliography
\usepackage{biblatex}
```

Select a sorting style:

- **nty:** Sort by name, title, year
- **nyt:** Sort by name, year, title.
- **nyvt:** Sort by name, year, volume, title.
- **anyt:** Sort by alphabetic label, name, year, title.
- **anyvt:** Sort by alphabetic label, name, year, volume, title.
- **ynt:** Sort by year, name, title.
- **ydnt:** Sort by year (descending), name, title.
- **none:** Do not sort at all. All entries are processed in citation order.

Add the sorting style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the sorting style is case-sensitive.

```latex
\usepackage[sorting=none]{biblatex}
```

### How do I change the citation style?

Are you using APA (or similar) and are wondering about the parentheses? If so, use `\parencite{}` instead of `\cite{}`. The latter does not include parentheses by default.

If you are looking to change to citation style, take a look at [Section 3.3.1](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.3.3.1) in the documentation for BibLaTeX for a complete list with a short description. This option is added with `citestyle=<citestyle>`.
