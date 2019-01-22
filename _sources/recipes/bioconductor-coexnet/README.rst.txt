.. _`bioconductor-coexnet`:

bioconductor-coexnet
====================

|downloads|

Extracts the gene expression matrix from GEO DataSets \(.CEL files\) as a AffyBatch object. Additionally\, can make the normalization process using two different methods \(vsn and rma\). The summarization \(pass from multi\-probe to one gene\) uses two different criteria \(Maximum value and Median of the samples expression data\) and the process of gene differentially expressed analisys using two methods \(sam and acde\). The construction of the co\-expression network can be conduced using two different methods\, Pearson Correlation Coefficient \(PCC\) or Mutual Information \(MI\) and choosing a threshold value using a graph theory approach.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/coexnet.html
Versions      
License       LGPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coexnet



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-coexnet

and update with::

   conda update bioconductor-coexnet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-coexnet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-coexnet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-coexnet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-coexnet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-coexnet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-coexnet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-coexnet

