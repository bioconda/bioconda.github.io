.. _`bioconductor-bridge`:

bioconductor-bridge
===================

|downloads|

Test for differentially expressed genes with microarray data. This package can be used with both cDNA microarrays or Affymetrix chip. The packge fits a robust Bayesian hierarchical model for testing for differential expression. Outliers are modeled explicitly using a \$t\$\-distribution. The model includes an exchangeable prior for the variances which allow different variances for the genes but still shrink extreme empirical variances. Our model can be used for testing for differentially expressed genes among multiple samples\, and can distinguish between the different possible patterns of differential expression when there are three or more samples. Parameter estimation is carried out using a novel version of Markov Chain Monte Carlo that is appropriate when the model puts mass on subspaces of the full parameter space.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/bridge.html
Versions      1.42.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridge



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bridge

and update with::

   conda update bioconductor-bridge



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bridge.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bridge/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bridge/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bridge/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bridge
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bridge/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bridge

