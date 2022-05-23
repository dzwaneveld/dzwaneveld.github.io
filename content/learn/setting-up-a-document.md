# Setting up a Document

With plenty of other resources out there, this is not meant as a complete introduction to LaTeX. Perhaps an introductory course offered by a study association might be a better start. This is meant as a quick reference when using one of the templates, but it might nonetheless provide just enough information to be somewhat of a starting point. A more comprehensive manual is [The Not So Short Introduction to LaTeX2e](http://mirrors.ctan.org/info/lshort/english/lshort.pdf).

## Installation

If you are just getting started or are working together in a group, [Overleaf](https://overleaf.com) is likely the easiest to use as it requires no additional setup. Simply create an account, click the 'open in Overleaf' badge on the template webpage and everything will automatically be set up correctly.

In case you are not working in a group and are working on a large document, a local installation might be a better option. A local  installation consists of a TeX distribution and an editor. On Windows, the choice for a distribution is either [TeX Live](https://www.tug.org/texlive/) or [MikTeX](https://miktex.org/). Choosing a TeX editor comes down to personal preference. I would not recommend my current setup with [Atom](https://atom.io) + specific packages. A better choice is [TeXstudio](https://www.texstudio.org/) or [Texmaker](https://www.xm1math.net/texmaker/).

## A Basic Document

Word processors such as Word or LibreOffice allow the user to directly edit the 'final' document. The page on the screen will look identical to a printed version of the same page. LaTeX is not a word processor, but a markup language. Instead of editing the 'final' document, elements (such as chapter titles, equations or figures) are explicitly defined by commands. A compiler (often *pdfLaTeX* or *XeLaTeX*) then uses the created `.tex`-file to compile a 'final' document (usually a PDF file).

A simple example document with a section *'Hello World'* and a short paragraph with an explanation about comments can be found below.

```latex
\documentclass{article}

\begin{document}

\section{Hello World}

This is a very basic document with an explanation about
comments. A percentage symbol can be used for comments
that will not show up in the output document.

% A sample comment. If you want to use a percentage
% symbol in the text, use \% instead.

\end{document}
```

The `\documentclass{}` command specifies the type of document. One of the default document classes (such as `article`, `book` or `report`) or a custom class can be used. The command also accepts options that customize the behaviour of the class. These can be added with square brackets as seen below. More details about the document class command and options can be found in [Section 1.6](http://mirrors.ctan.org/info/lshort/english/lshort.pdf#11) of the more comprehensive introduction to LaTeX.

```latex
\documentclass[12pt,a4paper]{article}
```

Everything between the `\documentclass{}` and `\begin{document}` commands is known as the *preamble*. This is the location where you can import packages or change certain parameters. As LaTeX by itself is limited, packages can be used to expand the functionality of LaTeX. The capabilities of packages can range from specific layout control to allowing users to easily add source code to the document.

The text of the document, mixed with LaTeX commands, can be found between the `\begin{document}` and `\end{document}` commands. The possibilities of the LaTeX commands are endless, though only the basics will be covered in the rest of this documentation. More information can, of course, be found by checking out other manuals, taking a look at package documentation or searching for information elsewhere online.
