.. _`bioconductor-hopach`:

bioconductor-hopach
===================

|downloads|

The HOPACH clustering algorithm builds a hierarchical tree of clusters by recursively partitioning a data set\, while ordering and possibly collapsing clusters at each level. The algorithm uses the Mean\/Median Split Silhouette \(MSS\) criteria to identify the level of the tree with maximally homogeneous clusters. It also runs the tree down to produce a final ordered list of the elements. The non\-parametric bootstrap allows one to estimate the probability that each element belongs to each cluster \(fuzzy clustering\).

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/hopach.html
Versions      2.38.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hopach



Links         biotools: :biotools:`hopach`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hopach

and update with::

   conda update bioconductor-hopach



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hopach.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hopach/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hopach/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hopach/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hopach
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hopach/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hopach

