.. _`eden`:

eden
====

|downloads|

The Explicit Decomposition with Neighborhoods (EDeN) is a decompositional kernel based on the Neighborhood Subgraph Pairwise Distance Kernel (NSPDK) that can be used to induce an explicit feature representation for graphs. This in turn allows the adoption of machine learning algorithm to perform supervised and unsupervised learning task in a scalable way (e.g. using fast stochastic gradient descent methods in classification and approximate neighborhood queries in clustering).

======== ===========
Home     https://github.com/fabriziocosta/EDeN
Versions 2.0
License  MIT
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eden
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install eden

and update with::

   conda update eden



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/eden.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/eden/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/eden/README.html
.. |downloads| image:: https://anaconda.org/bioconda/eden/badges/downloads.svg
               :target: https://anaconda.org/bioconda/eden
.. |docker| image:: https://quay.io/repository/biocontainers/eden/status
                :target: https://quay.io/repository/biocontainers/eden


