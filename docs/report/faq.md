# FAQ

Answers to some of the questions I have been asked before can be found below. A general knowledge of LaTeX is assumed, but most steps should be relatively straightforward. If you have very specific questions, you might want to take a look at the documentation of the package in question. Feel free to [contact me](/about.html#contact) if you have more questions.

[[toc]]

## Layout

### How do I get as little/much text as possible on a single page?

> Meeting the page limit requirements is nothing more than using spacing creatively

Here is an incomplete list of places where you *could* make changes, but you probably *shouldn't*. Changes should done in the class file (located at `layout/report-class.cls`), unless stated otherwise. In some cases, spacing can be negative to reduce whitespace to the absolute minimal.

- **Page margins**\
  The geometry of the page is defined with the command below. You could change the scale to your desire, replace it with a simple `margin=<length>` or fine-tune it with many different parameters. For the latter option, visit the [Overleaf Documentation](https://www.overleaf.com/learn/latex/page_size_and_margins#Fine_tuning_your_LaTeX_page_dimensions) on page size and margins.

  ```LaTeX
  \geometry{a4paper,hscale=0.75,vscale=0.8}
  ```

- **Titles (`\chapter`, `\section`, etc) and their spacing**\
  The titles and its spacings are defined by `\titleformat` and `\titlespacing`. For example, the `\chapter` is defined by:

  ```LaTeX
  \titleformat{\chapter}[display]
      {\flushright}
      {\fontsize{96}{96}\largetitlestyle\thechapter}
      {0pt}
      {\Huge\titlestyle}
  \titlespacing*{\chapter}{0pt}{0pt}{2\baselineskip}
  ```

  To give some ideas: (1) the size of the chapter number is defined by `\fontsize{96}{96}`, (2) the size of the title is defined by `\Huge` and (3) the spacing between the title and the text is defined by `2\baselineskip`. The formatting of the sections is done in similar fashion. See [this question](/report/faq.html#how-can-i-adjust-the-titles) for a more details about the `\titleformat` command.

- **Spacing between lists (itemize and enumerate)**\
  The default spacing between items has already been reduced slightly with the following:

  ```LaTeX
  \setlist{itemsep=-2pt}
  ```

  To also change the vertical spacing between the text and the list, you can add `topsep=<length>` to this command (comma separated). In total there are four lengths used for vertical spacing, which you can find in [Section 1 of the documentation for enumitem](http://mirrors.ctan.org/macros/latex/contrib/enumitem/enumitem.pdf#section.1).

- **Spacing around the floats**\
  You can change the spacing around floats by defining a new length with `\setlength`. These are the main spacing definitions you can use and their default values:

  ```LaTeX
  \setlength{\intextsep}{12.0pt plus 2.0pt minus 2.0pt}     % Space above/below [h]
  \setlength{\textfloatsep}{20.0pt plus 2.0pt minus 4.0pt}  % Space below [t]/above [b]
  \setlength{\floatsep}{12.0pt plus 2.0pt minus 2.0pt}      % Vertical space between figures
  \setlength{\abovecaptionskip}{10.0pt}                     % Vertical space before caption
  \setlength{\belowcaptionskip}{0.0pt}                      % Vertical space after caption
  ```

  You should probably avoid changing these lengths. The 'glue stretching' lengths give freedom (*plus* and *minus* length) to the compiler whenever the *fixed part* is insufficient. A visual representation of these parameters can be found in [Section 6.2 of the documentation for layouts](http://mirrors.ctan.org/macros/latex/contrib/layouts/layman.pdf).

### How can I adjust the titles?

If you are looking to change the style of the titles (such as `\chapter{}` or `\section{}`), navigate to the class file (`layout/tudelft-report.cls`) and find the lines where these titles are formatted. The standard format used in this template is:

  ```LaTeX
  \titleformat{<command>}[<shape>]
      {<format>}                        % Applied to title and label
      {<label>}                         % Specify label and format
      {<sep>}                           % Separation between label and title
      {<before-code>}[<after-code>]     % Code before/after title body
  ```

For example, the `\chapter{}` is formatted with the following lines:

  ```LaTeX
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

## Bibliography / References

### How do I change the bibliography style to X?

The default style of BibLaTeX is numeric. You can change it by specifying a different style when the package is imported. Navigate to the class file (`layout/tudelft-report.cls`) and find the line where BiBLaTeX is imported:

```LaTeX
\RequirePackage{biblatex}   % Manages bibliography
```

There are plenty of bibliography styles out there, but some of the more common ones you will likely use are:

- **ieee:** [1] J. Anderson, *Introduction to Flight*, 8th international ed. New York, United States: McGraw Hill Education, 2016.
- **apa:** Anderson, J. (2016). *Introduction to flight* (8th international ed.). McGraw Hill Education.
- **apa6:** Anderson, J. (2016). *Introduction to flight* (8th international ed.). New York, United States: McGraw Hill Education.

Simply add the style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the style is **case-sensitive**.

```LaTeX
\RequirePackage[style=apa6]{biblatex}   % Manages bibliography
```

[→ Related: How do I change the citation style?](/report/faq.html#how-do-i-change-the-citation-style)

### How do I change the sorting order of the entries?

The default sorting order of BibLaTeX is by the author's last name. You can change it by specifying a different order when the package is imported. Navigate to the class file (`layout/tudelft-report.cls`) and find the line where BiBLaTeX is imported:

```LaTeX
\RequirePackage{biblatex}   % Manages bibliography
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

Simply add the sorting style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the sorting style is **case-sensitive**.

```LaTeX
\RequirePackage[sorting=none]{biblatex}   % Manages bibliography
```

### How do I change the citation style?

If you are using APA (or similar) and are wondering where the parentheses have gone, simply use `\parencite{}` instead of `\cite{}`. The latter does not include parentheses, so in order to get citations with parentheses use `\parencite{}`.

If you are looking to change to citation style, take a look at [Section 3.3.1](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.3.3.1) in the documentation for BibLaTeX for a complete list with a short description. This option is added with `citestyle=<citestyle>`.
