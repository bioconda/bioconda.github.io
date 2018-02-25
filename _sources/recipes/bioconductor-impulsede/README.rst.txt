.. _`bioconductor-impulsede`:

bioconductor-impulsede
======================

|downloads|

ImpulseDE is suited to capture single impulse\-like patterns in high throughput time series datasets\. By fitting a representative impulse model to each gene\, it reports differentially expressed genes whether across time points in a single experiment or between two time courses from two experiments\. To optimize the running time\, the code makes use of clustering steps and multi\-threading\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/ImpulseDE.html
Versions 1.4.0
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impulsede

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-impulsede

and update with::

   conda update bioconductor-impulsede



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-impulsede.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-impulsede/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-impulsede/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-impulsede/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-impulsede
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-impulsede/status
                :target: https://quay.io/repository/biocontainers/bioconductor-impulsede

