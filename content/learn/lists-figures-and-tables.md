# Lists, Figures and Tables

## Simple Lists

Within the environment that contains the bulleted or numbered list, every entries of the list starts with `\item`. This will generate a bullet or number. Whether it will generate a bullet or number depends on the environment used. An `itemize` environment will result in a bulleted list:

```latex
\begin{itemize}
  \item Airplane
  \item Train
  ...
\end{itemize}
```
An `enumerate` environment will result in a numbered list:

```latex
\begin{enumerate}
  \item Mercurius
  \item Venus
  ...
\end{enumerate}
```
Creating a nested list can be done by simply creating a list environment inside an existing list. The bullet type and number format changes with increasing depth of the entries. In both cases, the depth is limited to 4 levels.

## Figures and Tables

### Floats

In order for figures and tables to be positioned correctly and include a caption, the whole environment has to be treated as a single object: a float. Floats are containers that cannot be broken over a page and include a placement specifier (`\begin{<float environment>}[<placement specifier>] ... `). The following placement specifiers can be used:

```latex
h   % Position approximately here (not exactly)
t   % At the top of the page
b   % At the bottom of the page
p   % On a special page with only floats
!   % Override internal parameters that determine 'good' positions
H   % Exactly here (part of 'float')
```

Sometimes LaTeX might complain that it has trouble placing a float. Multiple placement specifiers can be used at once to give LaTeX more flexibility if needed (such as `[htbp]`).

### Figures

Adding a figure can be done in a single command: `\includegraphics{}`. That would, however, be a figure that is not centered and has no caption. With the help of the *graphicx* package and `figure` environment, a figure can be included easily and properly. An example can be found below.

```latex
\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.75\textwidth]{example.png}
    \caption{The caption of the figure}
    \label{fig:example}
\end{figure}
```

The environment starts with the placement specifier (`[htbp]`) and a command to ensure the figure is centered on the page (`\centering`) respectively. The figure is added with the `\includegraphics{}` command with a certain specified width (`[width=0.75\textwidth]`). Note that this width does not have to be relative (e.g. `width=7.5cm`), nor does it have to be the width (e.g. `height=90pt`). Finally, the caption is added and a label is added to easily cross-reference the figure later.

::: details Figures side-by-side with independent captions

A `minipage` environment can be used to insert figures side-by-side with independent captions. An example can be found below.

```latex
\begin{figure}[htbp]
    \centering
    \begin{minipage}{.45\textwidth}
        \centering
        \includegraphics[width=.9\textwidth]{example1.png}
        \caption{First figure}
        \label{fig:first}
    \end{minipage}\hfill
    \begin{minipage}{.45\textwidth}
        \centering
        \includegraphics[width=.9\textwidth]{example2.png}
        \caption{Second figure}
        \label{fig:second}
    \end{minipage}
\end{figure}
```

:::

::: details Figures side-by-side with subcaptions and a global caption

The package *subcaption* (included in both templates) allows the creation of the `subfigure` environment, which can be used to insert figures side-by-side with subcaptions and a global caption. An example can be found below.

```latex
\begin{figure}[htbp]
    \centering
    \begin{subfigure}{.45\textwidth}
        \centering
        \includegraphics[width=.9\linewidth]{example1.png}
        \caption{First subfigure}
        \label{fig:first}
    \end{subfigure}\hfill
    \begin{subfigure}{.45\textwidth}
        \centering
        \includegraphics[width=.9\linewidth]{example2.png}
        \caption{Second subfigure}
        \label{fig:second}
    \end{subfigure}
    \caption{Global caption}
    \label{fig:global}
\end{figure}
```

:::

### Tables

An introduction to creating tables by Overleaf can be found [here](https://www.overleaf.com/learn/latex/Tables). As soon as the table becomes larger, it might be easier to use a [LaTeX table generator](https://www.tablesgenerator.com/latex_tables). This table generator also allows you to paste table data from a spreadsheet or text document.

Just getting the information inside the table is only the first step. Creating a professional-looking table generally requires a bit more work. The package *booktabs* (included in both templates) might be able to help. See Section 1 to 3 of the [package documentation](http://mirrors.ctan.org/macros/latex/contrib/booktabs/booktabs.pdf) for more information.
