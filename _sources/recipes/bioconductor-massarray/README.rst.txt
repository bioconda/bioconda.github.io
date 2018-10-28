.. _`bioconductor-massarray`:

bioconductor-massarray
======================

|downloads|

This package is designed for the import\, quality control\, analysis\, and visualization of methylation data generated using Sequenom\'s MassArray platform.  The tools herein contain a highly detailed amplicon prediction for optimal assay design.  Also included are quality control measures of data\, such as primer dimer and bisulfite conversion efficiency estimation.  Methylation data are calculated using the same algorithms contained in the EpiTyper software package.  Additionally\, automatic SNP\-detection can be used to flag potentially confounded data from specific CG sites.  Visualization includes barplots of methylation data as well as UCSC Genome Browser\-compatible BED tracks.  Multiple assays can be positionally combined for integrated analysis.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/MassArray.html
Versions      1.28.0, 1.30.0, 1.32.0
License       GPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massarray



Links         biotools: :biotools:`massarray`, doi: :doi:`10.1093/bioinformatics/btp382`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-massarray

and update with::

   conda update bioconductor-massarray



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-massarray.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-massarray/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-massarray/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-massarray/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-massarray
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-massarray/status
                :target: https://quay.io/repository/biocontainers/bioconductor-massarray

