.. _`bioconductor-cormut`:

bioconductor-cormut
===================

|downloads|

CorMut provides functions for computing kaks for individual sites or specific amino acids and detecting correlated mutations among them. Three methods are provided for detecting correlated mutations \,including conditional selection pressure\, mutual information and Jaccard index. The computation consists of two steps\: First\, the positive selection sites are detected\; Second\, the mutation correlations are computed among the positive selection sites. Note that the first step is optional. Meanwhile\, CorMut facilitates the comparison of the correlated mutations between two conditions by the means of correlated mutation network. The reference sequence should be the first sequence of the sequence file\, and does not allow the presence of gap.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/CorMut.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-cormut/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cormut

and update with::

   conda update bioconductor-cormut



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cormut.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cormut/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cormut/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cormut/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cormut
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cormut/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cormut

