.. _`bioconductor-bader`:

bioconductor-bader
==================

|downloads|

For RNA sequencing count data\, BADER fits a Bayesian hierarchical model. The algorithm returns the posterior probability of differential expression for each gene between two groups A and B. The joint posterior distribution of the variables in the model can be returned in the form of posterior samples\, which can be used for further down\-stream analyses such as gene set enrichment.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/BADER.html
Versions      1.14.0, 1.16.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bader



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bader

and update with::

   conda update bioconductor-bader



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bader.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bader/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bader/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bader/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bader
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bader/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bader

