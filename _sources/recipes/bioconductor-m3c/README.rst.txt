.. _`bioconductor-m3c`:

bioconductor-m3c
================

|downloads|

Genome\-wide data is used to stratify large complex datasets into classes using class discovery algorithms. A widely applied technique is consensus clustering\, however\; the approach is prone to overfitting and false positives. These issues arise from not considering reference distributions while selecting the number of classes \(K\). As a solution\, we developed Monte Carlo reference\-based consensus clustering \(M3C\). M3C uses a multi\-core enabled Monte Carlo simulation to generate null distributions along the range of K which are used to select its value. Using a reference\, that maintains the correlation structure of the input features\, eliminates the limitations of consensus clustering. M3C uses the Relative Cluster Stability Index \(RCSI\) and p values to decide on the value of K and reject the null hypothesis\, K\=1. M3C can also quantify structural relationships between clusters\, and uses spectral clustering to deal with non\-Gaussian and complex structures. M3C can automatically analyse biological or clinical data with respect to the discovered classes.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/M3C.html
Versions      
License       AGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-m3c/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-m3c

and update with::

   conda update bioconductor-m3c



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-m3c.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-m3c/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-m3c/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-m3c/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-m3c
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-m3c/status
                :target: https://quay.io/repository/biocontainers/bioconductor-m3c

