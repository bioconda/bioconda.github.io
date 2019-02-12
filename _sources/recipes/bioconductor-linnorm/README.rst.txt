.. title:: Package Recipe 'bioconductor-linnorm'
.. highlight: bash


bioconductor-linnorm
====================

.. conda:recipe:: bioconductor-linnorm
   :replaces_section_title:

   Linnorm is an R package for the analysis of RNA\-seq\, scRNA\-seq\, ChIP\-seq count data or any large scale count data. It transforms such datasets for parametric tests. In addition to the transformtion function \(Linnorm\)\, the following pipelines are implemented\: 1. Library size\/Batch effect normalization \(Linnorm.Norm\)\, 2. Cell subpopluation analysis and visualization using t\-SNE or PCA K\-means clustering or Hierarchical clustering \(Linnorm.tSNE\, Linnorm.PCA\, Linnorm.HClust\)\, 3. Differential expression analysis or differential peak detection using limma \(Linnorm.limma\)\, 4. Highly variable gene discovery and visualization \(Linnorm.HVar\)\, 5. Gene correlation network analysis and visualization \(Linnorm.Cor\)\, 6. Stable gene selection for scRNA\-seq data\; for users without or do not want to rely on spike\-in genes \(Linnorm.SGenes\). 7. Data imputation. \(under development\) \(Linnorm.DataImput\). Linnorm can work with raw count\, CPM\, RPKM\, FPKM and TPM. Additionally\, the RnaXSim function is included for simulating RNA\-seq data for the evaluation of DEG analysis methods.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Linnorm.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-linnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm/meta.yaml>`_

   


.. conda:package:: bioconductor-linnorm

   |downloads_bioconductor-linnorm| |docker_bioconductor-linnorm|

   :versions: 2.6.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-amap`  :conda:package:`r-apcluster`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ellipse`  :conda:package:`r-fastcluster`  :conda:package:`r-fpc`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-gmodels`  :conda:package:`r-igraph`  :conda:package:`r-mass`  :conda:package:`r-mclust`  :conda:package:`r-rcpp` >=0.12.2 :conda:package:`r-rcpparmadillo` >=0.8.100.1.0 :conda:package:`r-rtsne`  :conda:package:`r-statmod`  :conda:package:`r-vegan`  :conda:package:`r-zoo`  

   :required~by: |required_by_bioconductor-linnorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-linnorm

   and update with::

      conda update bioconductor-linnorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-linnorm


.. |required_by_bioconductor-linnorm| conda:required_by:: bioconductor-linnorm
.. |downloads_bioconductor-linnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linnorm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-linnorm| image:: https://quay.io/repository/biocontainers/bioconductor-linnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linnorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linnorm/README.html

