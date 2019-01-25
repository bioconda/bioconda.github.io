.. _`bioconductor-normalize450k`:

bioconductor-normalize450k
==========================

|downloads|

Precise measurements are important for epigenome\-wide studies investigating DNA methylation in whole blood samples\, where effect sizes are expected to be small in magnitude. The 450K platform is often affected by batch effects and proper preprocessing is recommended. This package provides functions to read and normalize 450K \'.idat\' files. The normalization corrects for dye bias and biases related to signal intensity and methylation of probes using local regression. No adjustment for probe type bias is performed to avoid the trade\-off of precision for accuracy of beta\-values.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/normalize450K.html
Versions      
License       BSD_2_clause + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-normalize450k/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-normalize450k

and update with::

   conda update bioconductor-normalize450k



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-normalize450k.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-normalize450k/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-normalize450k/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-normalize450k/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-normalize450k
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-normalize450k/status
                :target: https://quay.io/repository/biocontainers/bioconductor-normalize450k

