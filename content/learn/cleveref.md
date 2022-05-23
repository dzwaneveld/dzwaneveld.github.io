# Cross-referencing with 'cleveref'

*→ Included in the report/thesis and article template by default.*

A random figure might at some point be numbered *'Figure 2.1'*, but a few changes to the document could suddenly make it *'Figure 2.4'*. To make cross-referencing easier, LaTeX provides commands to automate referencing to numbered elements (such as sections, equations and figures). Although multiple solutions exist, *cleveref* is generally considered to be more powerful and flexible.

## Creating Labels

Before referencing a numbered element, an identifier has to be added. A random text string will work with the `\label{}` command, but you might want to include the reference type (`eqn:`, `fig:`) to stay organized. An example can be found below:

```latex
\section{Some Introductory Thoughts}
\label{section:introduction}

\begin{equation}
  \label{eqn:pythagoras}
  a^2 + b^2 = c^2
\end{equation}

\begin{figure}[h]
  \centering
  \includegraphics[width=0.8\linewidth]{example.png}
  \caption{An example figure}
  \label{fig:example}
\end{figure}
```  

Note that with figures and tables, the `\label{}` command has to be given after `\caption{}`.

## Referencing Numbered Elements

When a numbered element has a label, it can be cross-referenced with the `\cref{}` command. Note that capitalizing the first letter of the `\cref{}` command will also capitalize the first letter of the reference name.

```latex
\section{A section with a label}
\label{section:example}

\cref{section:example} % For example: 'section 2.1'
\Cref{section:example} % For example: 'Section 2.1'
```

It is also possible to cross-reference multiple numbered elements at once. The `\crefrange{}{}` command can be used to cross-reference a range of elements, while the `\cref{}` command allows multiple comma-separated identifiers to be added:

```latex
\crefrange{fig:ex-1}{fig:ex-5} % For example: 'figures 2.1 to 2.5'
\cref{fig:example,tab:example} % For example: 'figure 2.1 and table 2.1'
```

## Package Options

A few package options exist that modify the cross-reference format. Two of them are described here in more detail:

- **capitalise:** With this option, the first letter of the cross-reference name will always be capitalized. This package option is used by default in the article template.
- **noabbrev:** The full name of the cross-reference will always be used instead of an abbreviation (such as eq.) with this option. This package option is used by default in the report/thesis template.

Changing the package options can be done by finding the line where *cleveref* is imported in the class file (`layout` > `<file>.cls`). Remove or add the option (comma-separated) as can be seen below.

```latex
\RequirePackage[capitalise,<option2>,...]{cleveref} % Intelligent cross-referencing
```

## More Information

This webpage only describes the basic usage. If you have any questions, try searching for an answer online or take a look at the [package documentation](https://ctan.org/pkg/cleveref). For questions, suggestions or issues related to the template or this documentation, feel free to  [contact me](/contact.html).
