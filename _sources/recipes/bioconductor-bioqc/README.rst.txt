.. _`bioconductor-bioqc`:

bioconductor-bioqc
==================

|downloads|

BioQC performs quality control of high\-throughput expression data based on tissue gene signatures. It can detect tissue heterogeneity in gene expression data. The core algorithm is a Wilcoxon\-Mann\-Whitney test that is optimised for high performance.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BioQC.html
Versions      1.8.0, 1.6.0
License       GPL (>=3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-bioqc/meta.yaml



Links         biotools: :biotools:`bioqc`, doi: :doi:`10.1186/s12864-017-3661-2`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bioqc

and update with::

   conda update bioconductor-bioqc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bioqc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bioqc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bioqc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bioqc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bioqc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bioqc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bioqc

