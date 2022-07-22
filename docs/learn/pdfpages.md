# Including PDFs with 'pdfpages'

*→ Included in the report/thesis template by default. Add `\usepackage{pdfpages}` to the preamble of the article template to use it there.*

In some cases it might be useful or required to include another PDF document inside of your report or thesis. For example, if you want to include a PDF cover that was created in different program. In such cases, the package `pdfpages` can be used.

## Adding a PDF file

The main command of the package is as follows:

```latex
\includepdf[<key>=<value>]{filename.pdf}
```

The option `pages=<value>` can be used to specify which pages have to be inserted in the document. It is possible to specify a comma-separated list of page numbers (`pages={1,4,6}`) or include a range of page numbers (`pages={4-7}`). The latter also allows the insertion of all pages with `pages=-`. As an example: the following command will insert all pages of the document `example.pdf`:

```latex
\includepdf[pages=-]{example.pdf}
```

## More Information

This webpage only describes the basic usage. If you have any questions, try searching for an answer online or take a look at the [package documentation](https://ctan.org/pkg/pdfpages). For questions, suggestions or issues related to the template or this documentation, feel free to  [contact me](/contact.html).
