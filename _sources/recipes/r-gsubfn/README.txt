.. _`r-gsubfn`:

r-gsubfn
========

|downloads|

gsubfn is like gsub but can take a replacement function or certain other objects instead of the replacement string. Matches and back references are input to the replacement function and  replaced by the function output.   gsubfn can be used to split strings  based on content rather than delimiters and for quasi-perl-style string  interpolation. The package also has facilities for translating formulas  to functions and allowing such formulas in function calls instead of  functions.  This can be used with R functions such as apply, sapply, lapply, optim, integrate, xyplot, Filter and any other function that  expects another function as an input argument or functions like cat or sql calls that may involve strings where substitution is desirable.

======== ===========
Home     http://gsubfn.googlecode.com
Versions 0.6_6
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gsubfn
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-gsubfn

and update with::

   conda update r-gsubfn



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-gsubfn.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-gsubfn/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-gsubfn/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-gsubfn/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-gsubfn
.. |docker| image:: https://quay.io/repository/biocontainers/r-gsubfn/status
                :target: https://quay.io/repository/biocontainers/r-gsubfn


