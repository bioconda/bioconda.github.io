.. _`bioconductor-clustersignificance`:

bioconductor-clustersignificance
================================

|downloads|

The ClusterSignificance package provides tools to assess if class clusters in dimensionality reduced data representations have a separation different from permuted data. The term class clusters here refers to\, clusters of points representing known classes in the data. This is particularly useful to determine if a subset of the variables\, e.g. genes in a specific pathway\, alone can separate samples into these established classes. ClusterSignificance accomplishes this by\, projecting all points onto a one dimensional line. Cluster separations are then scored and the probability of the seen separation being due to chance is evaluated using a permutation method.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/ClusterSignificance.html
Versions      1.6.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustersignificance



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-clustersignificance

and update with::

   conda update bioconductor-clustersignificance



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-clustersignificance.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-clustersignificance/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-clustersignificance/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-clustersignificance/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-clustersignificance
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-clustersignificance/status
                :target: https://quay.io/repository/biocontainers/bioconductor-clustersignificance

