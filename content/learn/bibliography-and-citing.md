# Bibliography and Citing

*→ The article template is closely related to the official AIAA template and uses natbib by default for the bibliography. Only BibLaTeX is explained below, which is used in the report/thesis template.*

## Setting Up

The report/thesis template uses *BibLaTeX* for the bibliography. The bibliography in the template has been set up to allow for easy customization and most common bibliography styles are readily available for it. In the preamble of the main file, the package is imported and the bibliography file is specified with the following commands:

```latex
%% Setting up the bibliography
\usepackage{biblatex}
\addbibresource{report.bib}
```

Within the `\begin{document} (...) \end{document}` environment, the bibliography is printed with the command below (with some additional parameters in the template).

```latex
%% Add bibliography
\printbibliography
```

Besides the additional `\setcounter{bib(...)penalty}{7000}` commands that allow URLs to break on any character (to prevent URLs from running into the margin), *BibLaTeX* is essentially set up with the default settings. That might work for you, but changing the bibliography style or sorting order can also easily be done. Take a look at the information below or check out [Section 3.1](https://mirror.koddos.net/CTAN/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsection.3.1) of the documentation for more information.

::: details How to change the bibliography style?

The default style of *BibLaTeX* is numeric. You can change it by specifying a different style when the package is imported. Navigate to the main file and find the line where *BibLaTeX* is imported:

```latex
\usepackage{biblatex}
```

Choose a style from the table below or search online for more styles and add the style as an option as seen below the table. If you are using multiple options, use a comma to separate. Note that the style is case-sensitive.

| Style    | Example                                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| **ieee** | [1] J. Anderson, _Introduction to Flight_, 8th international ed. New York, United States: McGraw Hill Education, 2016. |
| **apa6** | Anderson, J. (2016). _Introduction to flight_ (8th international ed.). New York, United States: McGraw Hill Education. |
| **apa**  | Anderson, J. (2016). _Introduction to flight_ (8th international ed.). McGraw Hill Education.                          |

```latex
\usepackage[style=apa6]{biblatex}
```

Furthermore, note that with APA (or similar) you might want to use `\parencite{}` instead of `\cite{}`. The latter does not include parentheses by default.

:::

::: details How to change the sorting order of the entries?

The default sorting order of *BibLaTeX* is by the authors' last name. You can change it by specifying a different sorting order when the package is imported. Navigate to the main file and find the line where *BibLaTeX* is imported:

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

Add the sorting style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the sorting style is case-sensitive.

```latex
\usepackage[sorting=none]{biblatex}
```

:::

## Bibliography Entries

Before a bibliography entry can be cited in the text, it has to be added to the bibliography file (`.bib`) first. A few sample entries have been included in the template, but an additional example can be found below. This example has the type `book` with  `anderson-introduction-to-flight` as the identifier. This identifier will be used when citing the entry. Do not use spaces and note that the identifier is case-sensitive.

```
@book{anderson-introduction-to-flight,
    author = {J.D. Anderson},
    title = {Introduction to Flight},
    publisher = {McGraw Hill Education},
    year = {2016},
    edition = {8th international ed.},
    address = {New York, United States},
    note = {}
}
```

Depending on the entry type, different fields (such as `author`, `title` and `year`) have to be specified. For most entries, this will be relatively straightforward. Some uncommon types will inevitably appear at times. Refer to [Section 2.1.1](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.2.1.1) of the documentation of *BibLaTeX* to learn more about the various default types and the fields accepted per type. Note that websites such as Google Scholar usually have a 'Cite' button available. Select *'BibTeX'* and take advantage of the easy copy-and-pasting.

::: details Adding entries with multiple authors

It does not matter whether the author is formatted as `J.D. Anderson` or `Anderson, J.D.`. The output will be the same. Make sure, however, to always separate individual authors with `and` as using a comma might give strange results. A correct example:

```
author = {J.D. Anderson and K.E. Banderson and L.F. Canderson},
```

:::

::: details Adding entries with multiple-word last names and organisation names

In specific cases, *BibLaTeX* might have some trouble with the author. This can happen when the last name contains multiple words (such as *'Van der Meeren'*) or if the author is an organisation (such as the *'European Space Agency'*). In order for these instances to be recognised as a single group of words, an extra pair of curly brackets have to be added:

```latex
author = {A.B. {Van der Meeren}} % 'Van der Meeren, A.B.' will also work
author = {{European Space Agency}}
```

:::

## Citing

Once an entry has been added to the bibliography file, it can be cited using `\cite{<identifier>}`. Note that with APA (or similar), you might want to use `\parencite{}` instead of `\cite{}`. The latter does not include parentheses by default. Also note that these commands are not limited to one identifier. Multiple comma-separated identifiers can be added to a single command:

```latex
\cite{example-article-one,example-article-two,example-article-three}
```

Only the basics have been covered here so far. Even a simple `\cite{}` command has more functionality than is written here. For example, some page numbers can easily be included in the citation with square brackets: `\cite[112-115]{example-book}` may results in [1, pp. 112-115]. As always, you can find more information in the [package documentation](https://mirror.koddos.net/CTAN/macros/latex/contrib/biblatex/doc/biblatex.pdf) or elsewhere online.
