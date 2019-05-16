:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linnorm'
.. highlight: bash

bioconductor-linnorm
====================

.. conda:recipe:: bioconductor-linnorm
   :replaces_section_title:

   Linnorm is an R package for the analysis of RNA\-seq\, scRNA\-seq\, ChIP\-seq count data or any large scale count data. It normalizes and performs variance\-stabilizing transformation on such datasets. In addition to the transformtion function \(Linnorm\)\, the following pipelines are implemented\: 1. Library size\/Batch effect normalization \(Linnorm.Norm\)\, 2. Cell subpopluation analysis and visualization using t\-SNE or PCA K\-means clustering or Hierarchical clustering \(Linnorm.tSNE\, Linnorm.PCA\, Linnorm.HClust\)\, 3. Differential expression analysis or differential peak detection using limma \(Linnorm.limma\)\, 4. Highly variable gene discovery and visualization \(Linnorm.HVar\)\, 5. Gene correlation network analysis and visualization \(Linnorm.Cor\)\, 6. Stable gene selection for scRNA\-seq data\; for users without or do not want to rely on spike\-in genes \(Linnorm.SGenes\). 7. Data imputation. \(under development\) \(Linnorm.DataImput\). Linnorm can work with raw count\, CPM\, RPKM\, FPKM and TPM. Additionally\, the RnaXSim function is included for simulating RNA\-seq data for the evaluation of DEG analysis methods.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Linnorm.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-linnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm/meta.yaml>`_

   


.. conda:package:: bioconductor-linnorm

   |downloads_bioconductor-linnorm| |docker_bioconductor-linnorm|

   :versions: 2.8.0-0, 2.6.1-0, 2.6.0-0
   
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-amap: 
   :depends r-apcluster: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ellipse: 
   :depends r-fastcluster: 
   :depends r-fpc: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gmodels: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-rcpp: >=0.12.2
   :depends r-rcpparmadillo: >=0.8.100.1.0
   :depends r-rtsne: 
   :depends r-statmod: 
   :depends r-vegan: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-linnorm

   and update with::

      conda update bioconductor-linnorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-linnorm:<tag>

   (see `bioconductor-linnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-linnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-linnorm
   :alt:   (downloads)
.. |docker_bioconductor-linnorm| image:: https://quay.io/repository/biocontainers/bioconductor-linnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linnorm
.. _`bioconductor-linnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-linnorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linnorm/README.html