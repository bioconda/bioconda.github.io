.. _`r-rann`:

r-rann
======

|downloads|

Finds the k nearest neighbours for every point in a given dataset in O(N log N) time using Arya and Mount's ANN library (v1.1.3). There is support for approximate as well as exact searches, fixed radius searches and bd as well as kd trees.

======== ===========
Home     https://github.com/jefferis/RANN
Versions 2.5
License  GPL (>= 3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rann
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-rann

and update with::

   conda update r-rann



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-rann.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-rann/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-rann/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-rann/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-rann
.. |docker| image:: https://quay.io/repository/biocontainers/r-rann/status
                :target: https://quay.io/repository/biocontainers/r-rann


