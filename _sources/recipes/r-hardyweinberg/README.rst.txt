.. _`r-hardyweinberg`:

r-hardyweinberg
===============

|downloads|

Contains tools for exploring Hardy\-Weinberg equilibrium \(Hardy\, 1908\;  Weinberg\, 1908\) \<doi\:10.1126\/science.28.706.49\> for bi and multi\-allelic genetic marker data. All classical tests \(chi\-square\, exact\, likelihood\-ratio and permutation tests\) with bi\-allelic variants are included in the package\, as well as functions for power computation and for the simulation of marker data under equilibrium and disequilibrium. Routines for dealing with markers on the X\-chromosome are included \(Graffelman \& Weir\, 2016\) \<doi\: 10.1038\/hdy.2016.20\>\, including Bayesian procedures. Some exact and permutation procedures also work with multi\-allelic variants. Special test procedures that jointly address Hardy\-Weinberg equilibrium and equality of allele frequencies in both sexes are supplied\, for the bi and multi\-allelic case. Functions for testing equilibrium in the presence of missing data by using multiple imputation are also provided. Implements several graphics for exploring the equilibrium status of a large set of bi\-allelic markers\: ternary plots with acceptance regions\, log\-ratio plots and Q\-Q plots. 

============= ===========
Home          https://www.r-project.org, http://www-eio.upc.edu/~jan
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hardyweinberg



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-hardyweinberg

and update with::

   conda update r-hardyweinberg



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-hardyweinberg.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-hardyweinberg/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-hardyweinberg/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-hardyweinberg/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-hardyweinberg
.. |docker| image:: https://quay.io/repository/biocontainers/r-hardyweinberg/status
                :target: https://quay.io/repository/biocontainers/r-hardyweinberg

