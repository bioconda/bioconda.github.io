.. _`bioconductor-cellscore`:

bioconductor-cellscore
======================

|downloads|

The CellScore package contains functions to evaluate the cell identity of a test sample\, given a cell transition defined with a starting \(donor\) cell type and a desired target cell type. The evaluation is based upon a scoring system\, which uses a set of standard samples of known cell types\, as the reference set. The functions have been carried out on a large set of microarray data from one platform \(Affymetrix Human Genome U133 Plus 2.0\). In principle\, the method could be applied to any expression dataset\, provided that there are a sufficient number of standard samples and that the data are normalized.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/CellScore.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscore



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cellscore

and update with::

   conda update bioconductor-cellscore



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cellscore.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cellscore/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cellscore/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cellscore/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cellscore
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cellscore/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cellscore

