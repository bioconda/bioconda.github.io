.. _`bioconductor-dss`:

bioconductor-dss
================

|downloads|

DSS is an R library performing differntial analysis for count\-based sequencing data. It detectes differentially expressed genes \(DEGs\) from RNA\-seq\, and differentially methylated loci or regions \(DML\/DMRs\) from bisulfite sequencing \(BS\-seq\). The core of DSS is a new dispersion shrinkage method for estimating the dispersion parameter from Gamma\-Poisson or Beta\-Binomial distributions.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DSS.html
Versions      2.30.0, 2.28.0, 2.26.0
License       GPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-dss/meta.yaml



Links         biotools: :biotools:`dss`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dss

and update with::

   conda update bioconductor-dss



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dss.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dss/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dss/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dss/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dss
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dss/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dss

