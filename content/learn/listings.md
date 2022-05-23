# Including Code with 'listings'

*→ Included in the report/thesis template by default. Add `\usepackage{listings}` to the preamble of the article template to use it there. See [below](/learn/listings.html#package-options) for the additional settings used.*

In order to easily add source code to LaTeX documents, `listings` or `minted` are often used. As the latter has some prerequisites and requires access to the shell to function, the package `listings` is used in the report/thesis template.

## Adding Source Code

Adding displayed code can be done by creating a `lstlisting` environment and adding the source code to that environment. An example with Python as the programming language can be found below:

```latex
\begin{lstlisting}[language=Python]
# Impressive sample code

someText = "Hello World"

for i in range(5):
    print(someText)
\end{lstlisting}
```  

Stand-alone files can also be inserted directly:

```latex
\lstinputlisting[language=Python]{filename.py}
```

## Package Options

One way to define the formatting of the source code is by using the `\lstset{}` command. The following settings are used in the report/thesis template:

```latex
\lstset{
  basicstyle=\ttfamily\footnotesize,  % Style of the font that is used for the code
  backgroundcolor=\color{gray!10},    % Background color
  keywordstyle=\color{red!75!black},  % Keyword style
  stringstyle=\color{green!40!black}, % String style
  commentstyle=\color{blue!30!black}, % Comment style
  numbers=left,                       % Add line numbers on the left side
  numbersep=5pt,                      % Decrease distance between line numbers and code
  numberstyle=\tiny,                  % Line number style
  breaklines=true,                    % Line break automatically
}
```  

A more complete summary of the customization options can be found [here](https://nasa.github.io/nasa-latex-docs/html/examples/listing.html#customization-options).

## More Information

This webpage only describes the basic usage. If you have any questions, try searching for an answer online or take a look at the [package documentation](https://ctan.org/pkg/listings). For questions, suggestions or issues related to the template or this documentation, feel free to  [contact me](/contact.html).
