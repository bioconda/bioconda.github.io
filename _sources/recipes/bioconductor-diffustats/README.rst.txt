.. _`bioconductor-diffustats`:

bioconductor-diffustats
=======================

|downloads|

Label propagation approaches are a widely used procedure in computational biology for giving context to molecular entities using network data. Node labels\, which can derive from gene expression\, genome\-wide association studies\, protein domains or metabolomics profiling\, are propagated to their neighbours in the network\, effectively smoothing the scores through prior annotated knowledge and prioritising novel candidates. The R package diffuStats contains a collection of diffusion kernels and scoring approaches that facilitates their computation and benchmarking.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/diffuStats.html
Versions      0.102.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffustats



Links         biotools: :biotools:`diffuStats`, doi: :doi:`10.1093/bioinformatics/btx632`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-diffustats

and update with::

   conda update bioconductor-diffustats



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-diffustats.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-diffustats/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-diffustats/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-diffustats/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-diffustats
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-diffustats/status
                :target: https://quay.io/repository/biocontainers/bioconductor-diffustats

