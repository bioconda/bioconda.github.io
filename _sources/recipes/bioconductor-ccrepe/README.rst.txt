.. _`bioconductor-ccrepe`:

bioconductor-ccrepe
===================

|downloads|

The CCREPE \(Compositionality Corrected by REnormalizaion and PErmutation\) package is designed to assess the significance of general similarity measures in compositional datasets.  In microbial abundance data\, for example\, the total abundances of all microbes sum to one\; CCREPE is designed to take this constraint into account when assigning p\-values to similarity measures between the microbes.  The package has two functions\: ccrepe\: Calculates similarity measures\, p\-values and q\-values for relative abundances of bugs in one or two body sites using bootstrap and permutation matrices of the data. nc.score\: Calculates species\-level co\-variation and co\-exclusion patterns based on an extension of the checkerboard score to ordinal data.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ccrepe.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-ccrepe/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ccrepe

and update with::

   conda update bioconductor-ccrepe



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ccrepe.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ccrepe/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ccrepe/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ccrepe/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ccrepe
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ccrepe/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ccrepe

