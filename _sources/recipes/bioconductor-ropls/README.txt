.. _`bioconductor-ropls`:

bioconductor-ropls
==================

|downloads|

Latent variable modeling with Principal Component Analysis (PCA) and Partial Least Squares (PLS) are powerful methods for visualization, regression, classification, and feature selection of omics data where the number of variables exceeds the number of samples and with multicollinearity among variables. Orthogonal Partial Least Squares (OPLS) enables to separately model the variation correlated (predictive) to the factor of interest and the uncorrelated (orthogonal) variation. While performing similarly to PLS, OPLS facilitates interpretation. Successful applications of these chemometrics techniques include spectroscopic data such as Raman spectroscopy, nuclear magnetic resonance (NMR), mass spectrometry (MS) in metabolomics and proteomics, but also transcriptomics data. In addition to scores, loadings and weights plots, the package provides metrics and graphics to determine the optimal number of components (e.g. with the R2 and Q2 coefficients), check the validity of the model by permutation testing, detect outliers, and perform feature selection (e.g. with Variable Importance in Projection or regression coefficients). The package can be accessed via a user interface on the Workflow4Metabolomics.org online resource for computational metabolomics (built upon the Galaxy environment).

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/ropls.html
Versions 1.2.14, 1.4.2, 1.4.4
License  CeCILL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ropls
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ropls

and update with::

   conda update bioconductor-ropls



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ropls.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ropls/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ropls/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ropls/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ropls
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ropls/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ropls


