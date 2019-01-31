.. _`bioconductor-delayedarray`:

bioconductor-delayedarray
=========================

|downloads|

Wrapping an array\-like object \(typically an on\-disk object\) in a DelayedArray object allows one to perform common array operations on it without loading the object in memory. In order to reduce memory usage and optimize performance\, operations on the object are either delayed or executed using a block processing mechanism. Note that this also works on in\-memory array\-like objects like DataFrame objects \(typically with Rle columns\)\, Matrix objects\, and ordinary arrays and data frames.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DelayedArray.html
Versions      0.6.6, 0.4.1, 0.2.7
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-delayedarray/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-delayedarray

and update with::

   conda update bioconductor-delayedarray



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-delayedarray.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-delayedarray/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-delayedarray
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-delayedarray/status
                :target: https://quay.io/repository/biocontainers/bioconductor-delayedarray

