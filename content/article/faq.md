# FAQ

Answers to questions that are directly related to the article template can be found below. More general questions and answers have been incorporated in a quick reference/simple manual and can now be found under the 'Learn' menu. For unanswered questions, suggestions or issues related to the template or this documentation, feel free to [contact me](/contact.html).

## Spanning figures or tables over two columns

Floats, such as figures and tables, will behave like 'normal' in `twocolumn` mode and will therefore only occupy one column. In order to have a float span both columns (for example in combination with minipages or subfigures), an asterisk can be added to the environment. An example of a figure that will span both columns can be found below.

```latex
\begin{figure*}[ht]
    \centering
    \includegraphics[width=0.8\linewidth]{image.jpg}
    \caption{Caption}
    \label{fig:label}
\end{figure*}
```
