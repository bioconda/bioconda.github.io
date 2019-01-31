.. _`bioconductor-pwomics`:

bioconductor-pwomics
====================

|downloads|

pwOmics performs pathway\-based level\-specific data comparison of matching omics data sets based on pre\-analysed user\-specified lists of differential genes\/transcripts and phosphoproteins. A separate downstream analysis of phosphoproteomic data including pathway identification\, transcription factor identification and target gene identification is opposed to the upstream analysis starting with gene or transcript information as basis for identification of upstream transcription factors and potential proteomic regulators. The cross\-platform comparative analysis allows for comprehensive analysis of single time point experiments and time\-series experiments by providing static and dynamic analysis tools for data integration. In addition\, it provides functions to identify individual signaling axes based on data integration.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/pwOmics.html
Versions      1.12.0, 1.10.1
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-pwomics/meta.yaml



Links         biotools: :biotools:`pwomics`, doi: :doi:`10.1093/bioinformatics/btv323`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pwomics

and update with::

   conda update bioconductor-pwomics



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pwomics.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pwomics/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pwomics/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pwomics/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pwomics
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pwomics/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pwomics

