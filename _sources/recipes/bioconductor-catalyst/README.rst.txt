.. _`bioconductor-catalyst`:

bioconductor-catalyst
=====================

|downloads|

Mass cytometry \(CyTOF\) uses heavy metal isotopes rather than fluorescent tags as reporters to label antibodies\, thereby substantially decreasing spectral overlap and allowing for examination of over 50 parameters at the single cell level. While spectral overlap is significantly less pronounced in CyTOF than flow cytometry\, spillover due to detection sensitivity\, isotopic impurities\, and oxide formation can impede data interpretability. We designed CATALYST \(Cytometry dATa anALYSis Tools\) to provide a pipeline for preprocessing of cytometry data\, including i\) normalization using bead standards\, ii\) single\-cell deconvolution\, and iii\) bead\-based compensation.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/CATALYST.html
Versions      
License       GPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-catalyst

and update with::

   conda update bioconductor-catalyst



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-catalyst.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-catalyst/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-catalyst/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-catalyst/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-catalyst
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-catalyst/status
                :target: https://quay.io/repository/biocontainers/bioconductor-catalyst

