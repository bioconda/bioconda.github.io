.. _`bioconductor-tronco`:

bioconductor-tronco
===================

|downloads|

The TRONCO \(TRanslational ONCOlogy\) R package collects algorithms to infer progression models via the approach of Suppes\-Bayes Causal Network\, both from an ensemble of tumors \(cross\-sectional samples\) and within an individual patient \(multi\-region or single\-cell samples\). The package provides parallel implementation of algorithms that process binary matrices where each row represents a tumor sample and each column a single\-nucleotide or a structural variant driving the progression\; a 0\/1 value models the absence\/presence of that alteration in the sample. The tool can import data from plain\, MAF or GISTIC format files\, and can fetch it from the cBioPortal for cancer genomics. Functions for data manipulation and visualization are provided\, as well as functions to import\/export such data to other bioinformatics tools for\, e.g\, clustering or detection of mutually exclusive alterations. Inferred models can be visualized and tested for their confidence via bootstrap and cross\-validation. TRONCO is used for the implementation of the Pipeline for Cancer Inference \(PICNIC\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/TRONCO.html
Versions      
License       file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-tronco/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tronco

and update with::

   conda update bioconductor-tronco



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tronco.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tronco/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tronco/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tronco/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tronco
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tronco/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tronco

