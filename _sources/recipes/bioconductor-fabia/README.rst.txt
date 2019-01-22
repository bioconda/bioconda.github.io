.. _`bioconductor-fabia`:

bioconductor-fabia
==================

|downloads|

Biclustering by \"Factor Analysis for Bicluster Acquisition\" \(FABIA\). FABIA is a model\-based technique for biclustering\, that is clustering rows and columns simultaneously. Biclusters are found by factor analysis where both the factors and the loading matrix are sparse. FABIA is a multiplicative model that extracts linear dependencies between samples and feature patterns. It captures realistic non\-Gaussian data distributions with heavy tails as observed in gene expression measurements. FABIA utilizes well understood model selection techniques like the EM algorithm and variational approaches and is embedded into a Bayesian framework. FABIA ranks biclusters according to their information content and separates spurious biclusters from true biclusters. The code is written in C.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/fabia.html
Versions      2.26.0, 2.24.0
License       LGPL (>= 2.1)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabia



Links         biotools: :biotools:`fabia`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-fabia

and update with::

   conda update bioconductor-fabia



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-fabia.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-fabia/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-fabia/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-fabia/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-fabia
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-fabia/status
                :target: https://quay.io/repository/biocontainers/bioconductor-fabia

