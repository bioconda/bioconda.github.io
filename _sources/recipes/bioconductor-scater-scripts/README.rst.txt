.. _`bioconductor-scater-scripts`:

bioconductor-scater-scripts
===========================

|downloads|

A set of wrappers for individual components of the Scater package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

============= ===========
Home          https://github.com/ebi-gene-expression-group/bioconductor-scater-scripts
Versions      0.0.2
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scater-scripts


Development   https://github.com/ebi-gene-expression-group/bioconductor-scater-scripts


============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-scater-scripts

and update with::

   conda update bioconductor-scater-scripts



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-scater-scripts.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-scater-scripts/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-scater-scripts/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-scater-scripts/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-scater-scripts
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-scater-scripts/status
                :target: https://quay.io/repository/biocontainers/bioconductor-scater-scripts

