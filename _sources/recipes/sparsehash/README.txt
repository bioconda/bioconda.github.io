.. _`sparsehash`:

sparsehash
==========

|downloads|

An extremely memory-efficient hash_map implementation. 2 bits/entry overhead! The SparseHash library contains several hash-map implementations, including implementations that optimize for space or speed.  These hashtable implementations are similar in API to SGI's hash_map class and the tr1 unordered_map class, but with different performance characteristics. It's easy to replace hash_map or unordered_map by sparse_hash_map or dense_hash_map in C++ code.  They also contain code to serialize and unserialize from disk.

======== ===========
Home     https://github.com/sparsehash/sparsehash
Versions 2.0.2, 2.0.3
License  
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparsehash/2.0.2
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install sparsehash

and update with::

   conda update sparsehash



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/sparsehash.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/sparsehash/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/sparsehash/README.html
.. |downloads| image:: https://anaconda.org/bioconda/sparsehash/badges/downloads.svg
               :target: https://anaconda.org/bioconda/sparsehash
.. |docker| image:: https://quay.io/repository/biocontainers/sparsehash/status
                :target: https://quay.io/repository/biocontainers/sparsehash


