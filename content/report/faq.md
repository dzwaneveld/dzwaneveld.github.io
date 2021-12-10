# FAQ

Answers to some of more common questions can be found below. A general knowledge of LaTeX is assumed. If you have very specific questions, you might want to take a look at the documentation of the package in question. Feel free to [contact me](/about.html#contact) if you have more questions.

[[toc]]

## Layout

### How do I get as little/much text as possible on a single page?

Meeting the page limit requirements is nothing more than using spacing creatively. As such, here is an incomplete list to change some of these spacings. Changing the spacing has to be done in the class file (`layout/report-class.cls`), unless stated otherwise. In some cases, the spacing can be negative to reduce whitespace to the absolute minimum.

- **Page margins**\
  The geometry of the page is defined with the command below. You could change the scale to your desire, replace it with a simple `margin=<length>` or fine-tune it with many different parameters. For the latter option, visit the [Overleaf Documentation](https://www.overleaf.com/learn/latex/page_size_and_margins#Fine_tuning_your_LaTeX_page_dimensions) on page size and margins.

  ```latex
  \geometry{a4paper,hscale=0.75,vscale=0.8}
  ```

- **Titles (`\chapter`, `\section`, etc) and their spacing**\
  The titles and its spacings are defined by `\titleformat` and `\titlespacing`. For example, the `\chapter` is defined by:

  ```latex
  \titleformat{\chapter}[display]
      {\flushright}
      {\fontsize{96}{96}\largetitlestyle\thechapter}
      {0pt}
      {\Huge\titlestyle}
  \titlespacing*{\chapter}{0pt}{0pt}{2\baselineskip}
  ```

  To give some ideas: (1) the size of the chapter number is defined by `\fontsize{96}{96}`, (2) the size of the title is defined by `\Huge` and (3) the spacing between the title and the text is defined by `2\baselineskip`. The formatting of the sections is done in similar fashion. See [this question](/report/faq.html#how-can-i-adjust-the-titles) for a more details about the `\titleformat` command.

  If you would like to move the chapter number to the same line as the chapter title, replace the titleformat command (line 1-5 in the previous code block) with:

  ```latex
  \titleformat{\chapter}
    {\Huge\titlestyle\flushright}
    {\thechapter.}
    {5pt}
    {}
  ```

- **Spacing between lists (itemize and enumerate)**\
  The default spacing between items has already been reduced slightly with the following:

  ```latex
  \setlist{itemsep=-2pt}
  ```

  To also change the vertical spacing between the text and the list, you can add `topsep=<length>` to this command (comma separated). In total there are four lengths used for vertical spacing, which you can find in [Section 1 of the documentation for enumitem](http://mirrors.ctan.org/macros/latex/contrib/enumitem/enumitem.pdf#section.1).

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
  \titleformat{\chapter}[display]
      {\flushright}
      {\fontsize{96}{96}\largetitlestyle\thechapter}
      {0pt}
      {\Huge\titlestyle}
  ```

In this example:

- <*shape*> is set to `display` to put the label on a different line.
- <*format*> is used to move the title and label to the right with `\flushright`.
- <*label*> includes the chapter number with `\thechapter`, but also increases and changes the font of the number with `\fontsize{96}{96}` and `\largetitlestyle` respectively.
- <*sep*> specifies the horizontal separation between the label and the title (or the vertical separation in case of `display`). In this case, the no extra vertical spacing is added.
- <*before code*> formats the title body: the size is increased and the font changed.

Take a look at the other instances of `\titleformat` to see other possible parameters. If you are interested, take a look at [documentation for titlesec](http://mirrors.ctan.org/macros/latex/contrib/titlesec/titlesec.pdf).

## Cover / Title Page

### How do I get more authors on the cover (while staying organized)?

With version 1.4.0 support has been added to use a table with authors on the cover. As the author will get added to the metadata of the PDF, any LaTeX code would cause errors. To solve this, the `\author{}` command now accepts an optional argument. If this argument is specified, the metadata will fall back on the optional argument. This will allow more freedom when adding authors to the cover:

```latex
\author[<Authors w/o LaTeX code>]{<Table with Authors>}
```

An example can be found below. In this example, the metadata of the PDF will contain 'Group 01' as author. Depending on the size of the group, you might want to adjust the amount of columns and/or font size.

```latex
\author[Group 01]{\fontsize{20.74}{20.74}\selectfont
    \begin{tabularx}{\linewidth}{@{}XX}
        D. Bernoulli (1234567) & I. Newton (9876543) \\
        M. Curie (9876543) & A. Einstein (1234567) \\
        W. Wright (1234567)  & O. Wright (9876543) \\
    \end{tabularx}}
```

The preface will also fall back on the optional argument by default. The resulting cover can be seen below.

<p align="center">
  <img alt="Report Template Author Table" src="/images/report-template-faq-authors.jpg" width="300">
</p>

## Bibliography / References

### How do I change the bibliography style?

The default style of BibLaTeX is numeric. You can change it by specifying a different style when the package is imported. Navigate to the main file (`report.tex`) and find the line where BibLaTeX is imported:

```latex
\usepackage{biblatex}
```

Some of the more common bibliography styles you will likely use are:

- **ieee:** [1] J. Anderson, *Introduction to Flight*, 8th international ed. New York, United States: McGraw Hill Education, 2016.
- **apa:** Anderson, J. (2016). *Introduction to flight* (8th international ed.). McGraw Hill Education.
- **apa6:** Anderson, J. (2016). *Introduction to flight* (8th international ed.). New York, United States: McGraw Hill Education.

Add the style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the style is **case-sensitive**.

```latex
\usepackage[style=apa6]{biblatex}
```

### How do I change the sorting order of the entries?

The default sorting order of BibLaTeX is by the author's last name. You can change it by specifying a different order when the package is imported. Navigate to the main file (`report.tex`) and find the line where BibLaTeX is imported:

```latex
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

Add the sorting style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the sorting style is **case-sensitive**.

```latex
\usepackage[sorting=none]{biblatex}
```

### How do I change the citation style?

Are you using APA (or similar) and are wondering about the parentheses? If so, use `\parencite{}` instead of `\cite{}`. The latter does not include parentheses by default.

If you are looking to change to citation style, take a look at [Section 3.3.1](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.3.3.1) in the documentation for BibLaTeX for a complete list with a short description. This option is added with `citestyle=<citestyle>`.
