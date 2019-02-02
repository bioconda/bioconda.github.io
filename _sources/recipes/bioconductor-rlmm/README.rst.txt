.. _`bioconductor-rlmm`:

bioconductor-rlmm
=================

|downloads|

A classification algorithm\, based on a multi\-chip\, multi\-SNP approach for Affymetrix SNP arrays. Using a large training sample where the genotype labels are known\, this aglorithm will obtain more accurate classification results on new data. RLMM is based on a robust\, linear model and uses the Mahalanobis distance for classification. The chip\-to\-chip non\-biological variation is removed through normalization. This model\-based algorithm captures the similarities across genotype groups and probes\, as well as thousands other SNPs for accurate classification. NOTE\: 100K\-Xba only at for now.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/RLMM.html
Versions      1.44.0, 1.42.0, 1.40.0, 1.38.0
License       LGPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-rlmm/meta.yaml



Links         biotools: :biotools:`rlmm`, doi: :doi:`10.1093/bioinformatics/bti741`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rlmm

and update with::

   conda update bioconductor-rlmm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rlmm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rlmm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rlmm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rlmm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rlmm
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rlmm/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rlmm

