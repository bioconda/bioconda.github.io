.. _`bioconductor-zfpkm`:

bioconductor-zfpkm
==================

|downloads|

Perform the zFPKM transform on RNA\-seq FPKM data. This algorithm is based on the publication by Hart et al.\, 2013 \(Pubmed ID 24215113\). Reference recommends using zFPKM \> \-3 to select expressed genes. Validated with encode open\/closed chromosome data. Works well for gene level data using FPKM or TPM. Does not appear to calibrate well for transcript level data.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/zFPKM.html
Versions      1.0.0, 1.2.0
License       GPL-3 | file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zfpkm



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-zfpkm

and update with::

   conda update bioconductor-zfpkm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-zfpkm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-zfpkm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-zfpkm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-zfpkm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-zfpkm
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-zfpkm/status
                :target: https://quay.io/repository/biocontainers/bioconductor-zfpkm

