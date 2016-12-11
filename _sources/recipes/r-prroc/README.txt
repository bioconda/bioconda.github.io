.. _`r-prroc`:

r-prroc
=======

|downloads|

Computes the areas under the precision-recall (PR) and ROC curve for weighted (e.g., soft-labeled) and unweighted data. In contrast to other implementations, the interpolation between points of the PR curve is done by a non-linear piecewise function. In addition to the areas under the curves, the curves themselves can also be computed and plotted by a specific S3-method.

======== ===========
Home     
Versions 1.1
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-prroc
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-prroc

and update with::

   conda update r-prroc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-prroc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-prroc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-prroc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-prroc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-prroc
.. |docker| image:: https://quay.io/repository/biocontainers/r-prroc/status
                :target: https://quay.io/repository/biocontainers/r-prroc


