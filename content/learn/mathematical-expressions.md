# Mathematical Expressions

## Inline and Display Mode

The features of LaTeX when it comes to typesetting mathematical expressions are definitely one the most compelling reasons to use LaTeX. Most of these features can only be used it *math mode*, which can be part of a paragraph (inline) or on separate lines (display). In both cases, 'delimiters' have to be used to tell LaTeX when to use math mode and when to switch back to 'regular' text.

For expressions that are part of a paragraph (inline), any of the following delimiters can be used:

```latex
$ ... $                       % $a^2 + b^2 = c^2$
\( ... \)                     % \(E = mc^2\)     
\begin{math} ... \end{math}   % \begin{math}1+2=3\end{math}
```

For expressions on separate lines (display), any of the following 'delimiters' can be used:

```latex
\begin{equation} ... \end{equation}
\[ ... \]
\begin{displaymath} ... \end{displaymath}
```

For display math mode, a small difference exists between the different 'delimiters', as only the `equation` environment will result in a numbered equation. Given that the package *amsmath* (included in both templates) provides the `equation*` environment for an unnumbered equation, I would personally recommend this combination for display math. An example of an equation can be found below.

```latex
\begin{equation}
  M = \frac{V}{a} = \frac{V}{\sqrt{\gamma RT}}
\end{equation}
```

## Writing Expressions

### Superscript, Subscript, Fractions and Brackets

A more comprehensive manual to writing mathematical expressions can be found [here](https://en.wikibooks.org/wiki/LaTeX/Mathematics). On this page, only the basics will be covered. Most will be explained using examples, as words can only convey so much. Superscript, subscript, fractions and brackets will first be looked at:

```latex
^                                   % x^2 ~ Results in x²       
_                                   % k_{n-1} ~ Results in kₙ₋₁
\frac{<numerator>}{<denominator>}   % \frac{1}{2}
\left( ... \right)                  % Can also be \left[ ... \right] for example
\left\{ ... \right\}                % As {} are used in commands, a \ is needed
```

Note that superscript or subscript will only apply to the first character. A group of characters has to be surrounded by curly brackets as can be seen on line 2. Also note that you can have multiple 'layers': a fraction can be inside a fraction, brackets can be inside brackets, etc.. Finally, it is important to note that it is not strictly necessary to use `\left` and `\right` with brackets, but this will automatically adjust the size of the brackets. A simple equation might not need it, but it will not hurt either.

### Square Root, Trigonometric Functions, Sums, Products and Integrals

Square roots, trigonometric functions, sums, products and integrals are given below:

```latex
\sqrt{}     % \sqrt{2}
\sqrt[]{}   % \sqrt[3]{8} ~ A different power
\sin        % \sin(2x)
\cos        % \cos\left(\frac{1}{2}\right) ~ Bracket size automatically adjusted
\tan
\sum        % Combine the sum, product or integral with the super- and
\prod       % subscript functionality to add the limits. For example:
\int        % int_{0}^{2x} 2x^2 dx
```

### Regular Text and Mathematical Symbols

The package *amsmath* adds the `\text{}` command that can be used to have regular text in a math mode environment. This can, for example, be useful when you want to add a unit to the equation. The basic text formatting commands (such as `\textbf{}` and `\textit{}`) will of course also work. There are many ways to add horizontal spacing (such as `~` or `\:`) inside math environments, but adding a space to `\text{}` might be the easiest way to create spacing between the expression and text:

```latex
\begin{equation}
  W = 15 \text{ kg}
\end{equation}
```

The Greek alphabet and a small selection of symbols/tools can be found below. A comprehensive list of symbols for LaTeX can be found [here](http://mirrors.ctan.org/info/symbols/comprehensive/symbols-a4.pdf). As the list contains more than 18 thousand symbols, you might want to use [Detexify](https://detexify.kirelabs.org/classify.html) instead and let symbol recognition do the rest.

::: details Greek alphabet

```latex
A \alpha            % Αα
B \beta             % Ββ
\Gamma \gamma       % Γγ
\Delta \delta       % Δδ
E \epsilon          % Εϵ ~ Or \varepsilon (ε)
Z \zeta             % Ζζ
H \eta              % Ηη
\Theta \theta       % Θθ ~ Or \vartheta (ϑ)
I \iota             % Ιι
K \kappa            % Κκ
\Lambda \lambda     % Λλ
M \mu               % Μμ
N \nu               % Νν
\Xi \xi             % Ξξ
O o                 % Οο
\Pi \pi             % Ππ ~ Or \varpi (ϖ)
P \rho              % Ρρ ~ Or \varrho (ϱ)
\Sigma \sigma       % Σσ ~ Or \varsigma (ς)
T \tau              % Ττ
\Upsilon \upsilon   % Υυ
\Phi \phi           % Φφ ~ Or \varphi (ϕ)
X \chi              % Χχ
\Psi \psi           % Ψψ
\Omega \omega       % Ωω
```

:::

::: details Mathematical symbols and tools

```latex
\num{1e2}     % Scientific notation: 1×10² (part of 'siunitx')
\cdot         % ·
\times        % ×
\pm           % ±
\leq          % ≤
\geq          % ≥
\approx       % ≈
\infty        % ∞
\nabla        % ∇
\partial      % ∂
\leftarrow    % ←
\rightarrow   % →
```

:::
