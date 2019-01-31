.. _`bioconductor-scde`:

bioconductor-scde
=================

|downloads|

The scde package implements a set of statistical methods for analyzing single\-cell RNA\-seq data. scde fits individual error models for single\-cell RNA\-seq measurements. These models can then be used for assessment of differential expression between groups of cells\, as well as other types of analysis. The scde package also contains the pagoda framework which applies pathway and gene set overdispersion analysis to identify and characterize putative cell subpopulations based on transcriptional signatures. The overall approach to the differential expression analysis is detailed in the following publication\: \"Bayesian approach to single\-cell differential expression analysis\" \(Kharchenko PV\, Silberstein L\, Scadden DT\, Nature Methods\, doi\: 10.1038\/nmeth.2967\). The overall approach to subpopulation identification and characterization is detailed in the following pre\-print\: \"Characterizing transcriptional heterogeneity through pathway and gene set overdispersion analysis\" \(Fan J\, Salathia N\, Liu R\, Kaeser G\, Yung Y\, Herman J\, Kaper F\, Fan JB\, Zhang K\, Chun J\, and Kharchenko PV\, Nature Methods\, doi\:10.1038\/nmeth.3734\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/scde.html
Versions      2.8.0, 2.6.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-scde/meta.yaml



Links         biotools: :biotools:`scde`, doi: :doi:`10.1038/nmeth.2967`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-scde

and update with::

   conda update bioconductor-scde



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-scde.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-scde/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-scde/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-scde/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-scde
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-scde/status
                :target: https://quay.io/repository/biocontainers/bioconductor-scde

