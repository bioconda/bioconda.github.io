.. _`bioconductor-lea`:

bioconductor-lea
================

|downloads|

LEA is an R package dedicated to landscape genomics and ecological association tests. LEA can run analyses of population structure and genomewide tests for local adaptation. The package includes statistical methods for estimating ancestry coefficients from large genotypic matrices and for evaluating the number of ancestral populations \(snmf\, pca\). It performs statistical tests using latent factor mixed models for identifying genetic polymorphisms that exhibit association with environmental gradients or phenotypic traits \(lfmm\). LEA is mainly based on optimized C programs that can scale with the dimension of large data sets.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/LEA.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-lea/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-lea

and update with::

   conda update bioconductor-lea



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-lea.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-lea/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-lea/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-lea/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-lea
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-lea/status
                :target: https://quay.io/repository/biocontainers/bioconductor-lea

