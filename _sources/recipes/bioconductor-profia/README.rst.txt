.. _`bioconductor-profia`:

bioconductor-profia
===================

|downloads|

Flow Injection Analysis coupled to High\-Resolution Mass Spectrometry is a promising approach for high\-throughput metabolomics. FIA\- HRMS data\, however\, cannot be pre\-processed with current software tools which rely on liquid chromatography separation\, or handle low resolution data only. Here we present the proFIA package\, which implements a new methodology to pre\-process FIA\-HRMS raw data \(netCDF\, mzData\, mzXML\, and mzML\) including noise modelling and injection peak reconstruction\, and generate the peak table. The workflow includes noise modelling\, band detection and filtering then signal matching and missing value imputation. The peak table can then be exported as a .tsv file for further analysis. Visualisations to assess the quality of the data and of the signal made are easely produced.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/proFIA.html
Versions      1.4.0, 1.2.0
License       CeCILL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-profia/meta.yaml



Links         biotools: :biotools:`profia`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-profia

and update with::

   conda update bioconductor-profia



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-profia.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-profia/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-profia/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-profia/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-profia
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-profia/status
                :target: https://quay.io/repository/biocontainers/bioconductor-profia

