.. _`bioconductor-ledpred`:

bioconductor-ledpred
====================

|downloads|

This package aims at creating a predictive model of regulatory sequences used to score unknown sequences based on the content of DNA motifs\, next\-generation sequencing \(NGS\) peaks and signals and other numerical scores of the sequences using supervised classification. The package contains a workflow based on the support vector machine \(SVM\) algorithm that maps features to sequences\, optimize SVM parameters and feature number and creates a model that can be stored and used to score the regulatory potential of unknown sequences.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/LedPred.html
Versions      
License       MIT | file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ledpred



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ledpred

and update with::

   conda update bioconductor-ledpred



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ledpred.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ledpred/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ledpred/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ledpred/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ledpred
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ledpred/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ledpred

