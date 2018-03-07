.. _`bioconductor-semisup`:

bioconductor-semisup
====================

|downloads|

This R packages moves away from testing interaction terms\, and move towards testing whether an individual SNP is involved in any interaction. This reduces the multiple testing burden to one test per SNP\, and allows for interactions with unobserved factors. Analysing one SNP at a time\, it splits the individuals into two groups\, based on the number of minor alleles. If the quantitative trait differs in mean between the two groups\, the SNP has a main effect. If the quantitative trait differs in distribution between some individuals in one group and all other individuals\, it possibly has an interactive effect. Implicitly\, the membership probabilities may suggest potential interacting variables.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/semisup.html
Versions      1.0.2, 1.2.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-semisup



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-semisup

and update with::

   conda update bioconductor-semisup



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-semisup.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-semisup/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-semisup/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-semisup/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-semisup
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-semisup/status
                :target: https://quay.io/repository/biocontainers/bioconductor-semisup

