:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionero'
.. highlight: bash

bioconductor-bionero
====================

.. conda:recipe:: bioconductor-bionero
   :replaces_section_title:
   :noindex:

   Biological Network Reconstruction Omnibus

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BioNERO.html
   :license: GPL-3
   :recipe: /`bioconductor-bionero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionero/meta.yaml>`_

   BioNERO aims to integrate all aspects of biological network inference in a single package\, including data preprocessing\, exploratory analyses\, network inference\, and analyses for biological interpretations. BioNERO can be used to infer gene coexpression networks \(GCNs\) and gene regulatory networks \(GRNs\) from gene expression data. Additionally\, it can be used to explore topological properties of protein\-protein interaction \(PPI\) networks. GCN inference relies on the popular WGCNA algorithm. GRN inference is based on the \"wisdom of the crowds\" principle\, which consists in inferring GRNs with multiple algorithms \(here\, CLR\, GENIE3 and ARACNE\) and calculating the average rank for each interaction pair. As all steps of network analyses are included in this package\, BioNERO makes users avoid having to learn the syntaxes of several packages and how to communicate between them. Finally\, users can also identify consensus modules across independent expression sets and calculate intra and interspecies module preservation statistics between different networks.


.. conda:package:: bioconductor-bionero

   |downloads_bioconductor-bionero| |docker_bioconductor-bionero|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.5-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-genie3: ``>=1.24.0,<1.25.0``
   :depends bioconductor-minet: ``>=3.60.0,<3.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-bionero

   and update with::

      mamba update bioconductor-bionero

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bionero

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.10.0","1.8.5","1.6.0","1.2.0","1.0.0"];
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