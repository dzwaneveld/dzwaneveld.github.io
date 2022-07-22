# Chapters, Sections and Text

## Chapters and Sections

The chapters and sections of the document will automatically be numbered and indexed by LaTeX. For that to happen, the chapters and sections have to be explicitly defined. There are up to seven levels of depth, but `\part{}` and `\chapter{}` are only available in the book and report document type (used in the report/thesis template):

```latex
\part{A Part}                     % -1 ~ Only in reports/books
\chapter{A Chapter}               %  0 ~ Only in reports/books
\section{A Section}               %  1
\subsection{A Subsection}         %  2
\subsubsection{A Subsubsection}   %  3
\paragraph{A Paragraph}           %  4
\subparagraph{A Subparagraph}     %  5
```

As a result, a simple `\tableofcontents` command can print the table of contents without any hassle. It is also possible to have a chapter or section not appear in the table of contents by having it unnumbered. This can be done by adding an asterisk (*) at the end of the command, before the opening curly bracket:

```latex
\section*{An Unnumbered Section}
\addcontentsline{toc}{section}{An Unnumbered Section} % Or have it appear anyway
```

The layout and style of the chapter and section titles can be changed with the package *titlesec*. That is not quite within the scope of this documentation though. With a bit of LaTeX knowledge and the information below, you might nonetheless be able to make some minor changes.

::: details A brief look at the formatting of chapters and sections in the report/thesis template

Navigate to the class file (`layout/tudelft-report.cls`) and find the lines where these titles are formatted. The standard format used in this template is:

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
      {\Huge\titlestyle}
  ```

In this example:

- <*shape*> is set to `display` to put the label on a different line.
- <*format*> is used to move the title and label to the right with `\flushright`.
- <*label*> includes the chapter number with `\thechapter`, but also increases and changes the font of the number with `\fontsize{96}{96}` and `\largetitlestyle` respectively.
- <*sep*> specifies the horizontal separation between the label and the title (or the vertical separation in case of `display`). In this case, the no extra vertical spacing is added.
- <*before code*> formats the title body: the size is increased and the font changed.

Take a look at the other instances of `\titleformat` to see other possible parameters. If you would like to know more, try searching online or take a look at the [package documentation](https://ctan.org/pkg/titlesec)

:::

## Basic Text Formatting

The three basic text formatting types are bold, italics and underline:

```latex
\textbf{Some bold words}
\textit{A few italicised words}
\underline{Three underlined words}
```

If you want to emphasize with italics, you might want to use `\emph{}` instead, as it will adapt to the context. In normal or bold text, the word(s) will be italicised. If the text is already italicised, the behavior of the command is reversed. As a result, the word(s) will always stand out in some way.
