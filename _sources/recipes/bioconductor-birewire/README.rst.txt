.. _`bioconductor-birewire`:

bioconductor-birewire
=====================

|downloads|

Fast functions for bipartite network rewiring through N consecutive switching steps \(See References\) and for the computation of the minimal number of switching steps to be performed in order to maximise the dissimilarity with respect to the original network. Includes functions for the analysis of the introduced randomness across the switching steps and several other routines to analyse the resulting networks and their natural projections. Extension to undirected networks and directed signed networks is also provided. Starting from version 1.9.7 a more precise bound \(especially for small network\) has been implemented. Starting from version 2.2.0 the analysis routine is more complete and a visual montioring of the underlying Markov Chain has been implemented. Starting from 3.6.0 the library can handle also matrices with NA \(not for the directed signed graphs\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BiRewire.html
Versions      3.12.0, 3.10.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-birewire/meta.yaml



Links         biotools: :biotools:`birewire`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-birewire

and update with::

   conda update bioconductor-birewire



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-birewire.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-birewire/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-birewire/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-birewire/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-birewire
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-birewire/status
                :target: https://quay.io/repository/biocontainers/bioconductor-birewire

