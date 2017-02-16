.. _`r-multicool`:

r-multicool
===========

|downloads|

A set of tools to permute multisets without loops or hash tables and to generate integer partitions. The permutation functions are based on C code from Aaron Williams. Cool-lex order is similar to colexicographical order. The algorithm is described in Williams, A. Loopless Generation of Multiset Permutations by Prefix Shifts. SODA 2009, Symposium on Discrete Algorithms, New York, United States. The permutation code is distributed without restrictions. The code for stable and efficient computation of multinomial coefficients comes from Dave Barber. The code can be download from http://home.comcast.net/~tamivox/dave/multinomial/index.html and is distributed without conditions. The package also generates the integer partitions of a positive, non-zero integer n. The C++ code for this is based on Python code from Jerome Kelleher which can be found here http://jeromekelleher.net/partitions.php. The C++ code and Python code are distributed without conditions.

======== ===========
Home     
Versions 0.1_9
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-multicool
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-multicool

and update with::

   conda update r-multicool



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-multicool.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-multicool/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-multicool/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-multicool/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-multicool
.. |docker| image:: https://quay.io/repository/biocontainers/r-multicool/status
                :target: https://quay.io/repository/biocontainers/r-multicool


