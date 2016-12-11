.. _`r-bit`:

r-bit
=====

|downloads|

bitmapped vectors of booleans (no NAs),  coercion from and to logicals, integers and integer subscripts;  fast boolean operators and fast summary statistics.  With 'bit' vectors you can store true binary booleans {FALSE,TRUE} at the  expense of 1 bit only, on a 32 bit architecture this means factor 32 less  RAM and ~ factor 32 more speed on boolean operations. Due to overhead of  R calls, actual speed gain depends on the size of the vector: expect gains  for vectors of size > 10000 elements. Even for one-time boolean operations  it can pay-off to convert to bit, the pay-off is obvious, when such  components are used more than once.  Reading from and writing to bit is approximately as fast as accessing  standard logicals - mostly due to R's time for memory allocation. The package  allows to work with pre-allocated memory for return values by calling .Call()  directly: when evaluating the speed of C-access with pre-allocated vector  memory, coping from bit to logical requires only 70% of the time for copying  from logical to logical; and copying from logical to bit comes at a  performance penalty of 150%. the package now contains further classes for  representing logical selections: 'bitwhich' for very skewed selections and  'ri' for selecting ranges of values for chunked processing. All three index  classes can be used for subsetting 'ff' objects (ff-2.1-0 and higher).

======== ===========
Home     http://ff.r-forge.r-project.org/
Versions 1.1_12
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bit
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-bit

and update with::

   conda update r-bit



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-bit.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-bit/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-bit/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-bit/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-bit
.. |docker| image:: https://quay.io/repository/biocontainers/r-bit/status
                :target: https://quay.io/repository/biocontainers/r-bit


