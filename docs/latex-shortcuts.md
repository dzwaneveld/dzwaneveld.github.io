# LaTeX Environment Shortcuts

Although Overleaf offers autocompletion for some environments, such as figures and tables, it is quite limited. Below are some environments for easy copy-and-pasting.

## Figures Side by Side

::: details Using minipages
```LaTeX
\begin{figure}[h]
    \centering
    \begin{minipage}{.45\textwidth}
        \centering
        \includegraphics[width=.9\textwidth]{example.png}
        \caption{first figure}
        \label{fig:first}
    \end{minipage}\hfill
    \begin{minipage}{.45\textwidth}
        \centering
        \includegraphics[width=.9\textwidth]{example.png}
        \caption{second figure}
        \label{fig:second}
    \end{minipage}
\end{figure}
```
:::

::: details Using subcaption with global caption
```LaTeX
\begin{figure}[h]
    \centering
    \begin{subfigure}{.45\textwidth}
        \centering
        \includegraphics[width=.9\linewidth]{example.png}
        \caption{first subfigure}
        \label{fig:first}
    \end{subfigure}\hfill
    \begin{subfigure}{.45\textwidth}
        \centering
        \includegraphics[width=.9\linewidth]{example.png}
        \caption{second subfigure}
        \label{fig:second}
    \end{subfigure}
    \caption{Global caption}
    \label{fig:global}
\end{figure}
```
:::

## Tables Side by Side

::: details Using minipages
```LaTeX
\begin{table}[h]
    \begin{minipage}{.45\linewidth}
        \caption{first table}
        \label{tab:first}
        \centering
        \begin{tabular}{ll}
        1 & 2
        \end{tabular}
    \end{minipage}\hfill
    \begin{minipage}{.45\linewidth}
        \centering
        \caption{second table}
        \label{tab:second}
        \begin{tabular}{ll}
        3 & 4
        \end{tabular}
    \end{minipage}
\end{table}
```
:::

::: details Using subcaption with global caption
```LaTeX
\begin{table}[h]
    \caption{Global caption}
    \label{tab:global}
    \begin{subtable}{.45\linewidth}
        \caption{first table}
        \label{tab:first}
        \centering
        \begin{tabular}{ll}
        1 & 2
        \end{tabular}
    \end{subtable}\hfill
    \begin{subtable}{.45\linewidth}
        \centering
        \caption{second table}
        \label{tab:second}
        \begin{tabular}{ll}
        3 & 4
        \end{tabular}
    \end{subtable}
\end{table}
```
:::

## Table and Figure Side by Side

::: details Using minipages
```LaTeX
\begin{minipage}{.45\linewidth}
    \captionof{table}{table caption}
    \label{tab:table}
    \centering
    \begin{tabular}{ll}
    1 & 2
    \end{tabular}
\end{minipage}\hfill
\begin{minipage}{.45\linewidth}
    \centering
    \includegraphics[width=.9\textwidth]{example.png}
    \captionof{figure}{figure caption}
    \label{fig:figure}
\end{minipage}
```
:::
