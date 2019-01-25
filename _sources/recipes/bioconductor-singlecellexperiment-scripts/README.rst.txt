.. _`bioconductor-singlecellexperiment-scripts`:

bioconductor-singlecellexperiment-scripts
=========================================

|downloads|

A set of wrappers for operations associated with the SingleCellExperiment package. Functions in R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

============= ===========
Home          https://github.com/ebi-gene-expression-group/bioconductor-singlecellexperiment-scripts
Versions      0.0.3, 0.0.2, 0.0.1
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-singlecellexperiment-scripts/meta.yaml


Development   https://github.com/ebi-gene-expression-group/bioconductor-singlecellexperiment-scripts


============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-singlecellexperiment-scripts

and update with::

   conda update bioconductor-singlecellexperiment-scripts



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-singlecellexperiment-scripts/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-singlecellexperiment-scripts/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-singlecellexperiment-scripts/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-singlecellexperiment-scripts
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts/status
                :target: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts

