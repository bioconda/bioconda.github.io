.. _`bioconductor-biosigner`:

bioconductor-biosigner
======================

|downloads|

Feature selection is critical in omics data analysis to extract restricted and meaningful molecular signatures from complex and high-dimension data, and to build robust classifiers. This package implements a new method to assess the relevance of the variables for the prediction performances of the classifier. The approach can be run in parallel with the PLS-DA, Random Forest, and SVM binary classifiers. The signatures and the corresponding 'restricted' models are returned, enabling future predictions on new datasets. A Galaxy implementation of the package is available within the Workflow4metabolomics.org online infrastructure for computational metabolomics.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/biosigner.html
Versions 1.0.6, 1.1.10
License  CeCILL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosigner
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-biosigner

and update with::

   conda update bioconductor-biosigner



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-biosigner.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-biosigner/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-biosigner/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-biosigner/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-biosigner
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-biosigner/status
                :target: https://quay.io/repository/biocontainers/bioconductor-biosigner


