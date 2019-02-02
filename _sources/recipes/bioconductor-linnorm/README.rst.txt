.. _`bioconductor-linnorm`:

bioconductor-linnorm
====================

|downloads|

Linnorm is an R package for the analysis of RNA\-seq\, scRNA\-seq\, ChIP\-seq count data or any large scale count data. It transforms such datasets for parametric tests. In addition to the transformtion function \(Linnorm\)\, the following pipelines are implemented\: 1. Library size\/Batch effect normalization \(Linnorm.Norm\)\, 2. Cell subpopluation analysis and visualization using t\-SNE or PCA K\-means clustering or Hierarchical clustering \(Linnorm.tSNE\, Linnorm.PCA\, Linnorm.HClust\)\, 3. Differential expression analysis or differential peak detection using limma \(Linnorm.limma\)\, 4. Highly variable gene discovery and visualization \(Linnorm.HVar\)\, 5. Gene correlation network analysis and visualization \(Linnorm.Cor\)\, 6. Stable gene selection for scRNA\-seq data\; for users without or do not want to rely on spike\-in genes \(Linnorm.SGenes\). 7. Data imputation. \(under development\) \(Linnorm.DataImput\). Linnorm can work with raw count\, CPM\, RPKM\, FPKM and TPM. Additionally\, the RnaXSim function is included for simulating RNA\-seq data for the evaluation of DEG analysis methods.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/Linnorm.html
Versions      2.6.0
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-linnorm/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-linnorm

and update with::

   conda update bioconductor-linnorm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-linnorm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-linnorm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-linnorm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-linnorm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-linnorm
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-linnorm/status
                :target: https://quay.io/repository/biocontainers/bioconductor-linnorm

