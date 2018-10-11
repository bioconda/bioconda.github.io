.. _`bioconductor-generxcluster`:

bioconductor-generxcluster
==========================

|downloads|

Detect Differential Clustering of Genomic Sites such as gene therapy integrations.  The package provides some functions for exploring genomic insertion sites originating from two different sources. Possibly\, the two sources are two different gene therapy vectors.  Vectors are preferred that target sensitive regions less frequently\, motivating the search for localized clusters of insertions and comparison of the clusters formed by integration of different vectors.  Scan statistics allow the discovery of spatial differences in clustering and calculation of False Discovery Rates \(FDRs\) providing statistical methods for comparing retroviral vectors. A scan statistic for comparing two vectors using multiple window widths to detect clustering differentials and compute FDRs is implemented here.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/geneRxCluster.html
Versions      1.14.0, 1.16.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generxcluster



Links         biotools: :biotools:`generxcluster`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-generxcluster

and update with::

   conda update bioconductor-generxcluster



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-generxcluster.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-generxcluster/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-generxcluster/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-generxcluster/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-generxcluster
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-generxcluster/status
                :target: https://quay.io/repository/biocontainers/bioconductor-generxcluster

