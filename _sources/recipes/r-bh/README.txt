.. _`r-bh`:

r-bh
====

|downloads|

Boost provides free peer-reviewed portable C++ source  libraries.  A large part of Boost is provided as C++ template code which is resolved entirely at compile-time without linking.  This  package aims to provide the most useful subset of Boost libraries  for template use among CRAN package. By placing these libraries in  this package, we offer a more efficient distribution system for CRAN  as replication of this code in the sources of other packages is  avoided. . As of release 1.60.0-2, the following Boost libraries are included: 'algorithm' 'any' 'bimap' 'bind' 'circular_buffer' 'concept' 'config' 'container' 'date'_'time' 'detail' 'dynamic_bitset' 'exception' 'filesystem' 'flyweight' 'foreach' 'functional' 'fusion' 'geometry' 'graph' 'heap' 'icl' 'integer' 'interprocess' 'intrusive' 'io' 'iostreams' 'iterator' 'math' 'move' 'mpl' 'multiprcecision' 'numeric' 'pending' 'phoenix' 'preprocessor' 'random' 'range' 'smart_ptr' 'spirit' 'tuple' 'type_trains' 'typeof' 'unordered' 'utility' 'uuid'.

======== ===========
Home     
Versions 1.60.0_2
License  BSL-1.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bh
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-bh

and update with::

   conda update r-bh



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-bh.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-bh/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-bh/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-bh/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-bh
.. |docker| image:: https://quay.io/repository/biocontainers/r-bh/status
                :target: https://quay.io/repository/biocontainers/r-bh


