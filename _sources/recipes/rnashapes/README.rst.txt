.. _`rnashapes`:

rnashapes
=========

|downloads|

RNAshape abstraction maps structures to a tree-like domain of shapes, retaining adjacency and nesting of structural features, but disregarding helix lengths. Shape abstraction integrates well with dynamic programming algorithms, and hence it can be applied during structure prediction rather than afterwards. This avoids exponential explosion and can still give us a non-heuristic and complete account of properties of the molecule's folding space.

======== ===========
Home     http://bibiserv.techfak.uni-bielefeld.de/rnashapes
Versions 2.1.6
License  
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes/2.1.6
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install rnashapes

and update with::

   conda update rnashapes



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/rnashapes.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/rnashapes/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/rnashapes/README.html
.. |downloads| image:: https://anaconda.org/bioconda/rnashapes/badges/downloads.svg
               :target: https://anaconda.org/bioconda/rnashapes
.. |docker| image:: https://quay.io/repository/biocontainers/rnashapes/status
                :target: https://quay.io/repository/biocontainers/rnashapes


