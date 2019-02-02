.. _`bioconductor-sincell`:

bioconductor-sincell
====================

|downloads|

Cell differentiation processes are achieved through a continuum of hierarchical intermediate cell\-states that might be captured by single\-cell RNA seq. Existing computational approaches for the assessment of cell\-state hierarchies from single\-cell data might be formalized under a general workflow composed of i\) a metric to assess cell\-to\-cell similarities \(combined or not with a dimensionality reduction step\)\, and ii\) a graph\-building algorithm \(optionally making use of a cells\-clustering step\). Sincell R package implements a methodological toolbox allowing flexible workflows under such framework. Furthermore\, Sincell contributes new algorithms to provide cell\-state hierarchies with statistical support while accounting for stochastic factors in single\-cell RNA seq. Graphical representations and functional association tests are provided to interpret hierarchies.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/sincell.html
Versions      1.14.1, 1.14.0, 1.12.0, 1.10.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-sincell/meta.yaml



Links         biotools: :biotools:`sincell`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sincell

and update with::

   conda update bioconductor-sincell



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sincell.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sincell/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sincell/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sincell/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sincell
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sincell/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sincell

