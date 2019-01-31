.. _`latentstrainanalysis`:

latentstrainanalysis
====================

|downloads|

Partitioning and analysis methods for large\, complex sequence datasets

============= ===========
Home          https://github.com/brian-cleary/LatentStrainAnalysis
Versions      0.0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//latentstrainanalysis/meta.yaml



============= ===========

LSA was developed as a pre\-assembly tool for partitioning metagenomic reads.
It uses a hyperplane hashing function and streaming SVD in order to find
covariance relations between k\-mers. The code\, and the process outline in
LSFScripts in particular\, have been optimized to scale to massive data
sets in fixed memory with a highly distributed computing environment.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install latentstrainanalysis

and update with::

   conda update latentstrainanalysis



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/latentstrainanalysis.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/latentstrainanalysis/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/latentstrainanalysis/README.html
.. |downloads| image:: https://anaconda.org/bioconda/latentstrainanalysis/badges/downloads.svg
               :target: https://anaconda.org/bioconda/latentstrainanalysis
.. |docker| image:: https://quay.io/repository/biocontainers/latentstrainanalysis/status
                :target: https://quay.io/repository/biocontainers/latentstrainanalysis

