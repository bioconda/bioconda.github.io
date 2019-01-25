.. _`bioconductor-glmsparsenet`:

bioconductor-glmsparsenet
=========================

|downloads|

glmSparseNet is an R\-package that generalizes sparse regression models when the features \(e.g. genes\) have a graph structure \(e.g. protein\-protein interactions\)\, by including network\-based regularizers. glmSparseNet uses the glmnet R\-package\, by including centrality measures of the network as penalty weights in the regularization. The current version implements regularization based on node degree\, i.e. the strength and\/or number of its associated edges\, either by promoting hubs in the solution or orphan genes in the solution. All the glmnet distribution families are supported\, namely \"gaussian\"\, \"poisson\"\, \"binomial\"\, \"multinomial\"\, \"cox\"\, and \"mgaussian\".

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/glmSparseNet.html
Versions      
License       GPL (>=3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-glmsparsenet/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-glmsparsenet

and update with::

   conda update bioconductor-glmsparsenet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-glmsparsenet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-glmsparsenet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-glmsparsenet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-glmsparsenet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-glmsparsenet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-glmsparsenet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-glmsparsenet

