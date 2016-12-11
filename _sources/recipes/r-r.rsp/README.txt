.. _`r-r.rsp`:

r-r.rsp
=======

|downloads|

The RSP markup language makes any text-based document come alive.  RSP provides a powerful markup for controlling the content and output of LaTeX, HTML, Markdown, AsciiDoc, Sweave and knitr documents (and more), e.g. 'Today's date is <%=Sys.Date()%>'.  Contrary to many other literate programming languages, with RSP it is straightforward to loop over mixtures of code and text sections, e.g. in month-by-month summaries.  RSP has also several preprocessing directives for incorporating static and dynamic contents of external files (local or online) among other things.  Functions rstring() and rcat() make it easy to process RSP strings, rsource() sources an RSP file as it was an R script, while rfile() compiles it (even online) into its final output format, e.g. rfile('report.tex.rsp') generates 'report.pdf' and rfile('report.md.rsp') generates 'report.html'.  RSP is ideal for self-contained scientific reports and R package vignettes.  It's easy to use - if you know how to write an R script, you'll be up and running within minutes.

======== ===========
Home     https://github.com/HenrikBengtsson/R.rsp
Versions 0.30.0
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r.rsp
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-r.rsp

and update with::

   conda update r-r.rsp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-r.rsp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-r.rsp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-r.rsp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-r.rsp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-r.rsp
.. |docker| image:: https://quay.io/repository/biocontainers/r-r.rsp/status
                :target: https://quay.io/repository/biocontainers/r-r.rsp


