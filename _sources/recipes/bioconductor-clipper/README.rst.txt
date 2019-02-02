.. _`bioconductor-clipper`:

bioconductor-clipper
====================

|downloads|

Implements topological gene set analysis using a two\-step empirical approach. It exploits graph decomposition theory to create a junction tree and reconstruct the most relevant signal path. In the first step clipper selects significant pathways according to statistical tests on the means and the concentration matrices of the graphs derived from pathway topologies. Then\, it \"clips\" the whole pathway identifying the signal paths having the greatest association with a specific phenotype.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/clipper.html
Versions      1.22.0
License       AGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-clipper/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-clipper

and update with::

   conda update bioconductor-clipper



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-clipper.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-clipper/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-clipper/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-clipper/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-clipper
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-clipper/status
                :target: https://quay.io/repository/biocontainers/bioconductor-clipper

