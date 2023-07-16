:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionero'
.. highlight: bash

bioconductor-bionero
====================

.. conda:recipe:: bioconductor-bionero
   :replaces_section_title:
   :noindex:

   Biological Network Reconstruction Omnibus

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BioNERO.html
   :license: GPL-3
   :recipe: /`bioconductor-bionero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionero/meta.yaml>`_

   BioNERO aims to integrate all aspects of biological network inference in a single package\, including data preprocessing\, exploratory analyses\, network inference\, and analyses for biological interpretations. BioNERO can be used to infer gene coexpression networks \(GCNs\) and gene regulatory networks \(GRNs\) from gene expression data. Additionally\, it can be used to explore topological properties of protein\-protein interaction \(PPI\) networks. GCN inference relies on the popular WGCNA algorithm. GRN inference is based on the \"wisdom of the crowds\" principle\, which consists in inferring GRNs with multiple algorithms \(here\, CLR\, GENIE3 and ARACNE\) and calculating the average rank for each interaction pair. As all steps of network analyses are included in this package\, BioNERO makes users avoid having to learn the syntaxes of several packages and how to communicate between them. Finally\, users can also identify consensus modules across independent expression sets and calculate intra and interspecies module preservation statistics between different networks.


.. conda:package:: bioconductor-bionero

   |downloads_bioconductor-bionero| |docker_bioconductor-bionero|

   :versions:
      
      

      ``1.8.5-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genie3: ``>=1.22.0,<1.23.0``
   :depends bioconductor-minet: ``>=3.58.0,<3.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dynamictreecut: 
   :depends r-ggdendro: 
   :depends r-ggnetwork: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-intergraph: 
   :depends r-matrixstats: 
   :depends r-netrep: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bionero

   and update with::

      conda update bioconductor-bionero

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bionero:<tag>

   (see `bioconductor-bionero/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bionero| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionero.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bionero
   :alt:   (downloads)
.. |docker_bioconductor-bionero| image:: https://quay.io/repository/biocontainers/bioconductor-bionero/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionero
.. _`bioconductor-bionero/tags`: https://quay.io/repository/biocontainers/bioconductor-bionero?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bionero";
        var versions = ["1.8.5","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionero/README.html