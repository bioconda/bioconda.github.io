:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-granie'
.. highlight: bash

bioconductor-granie
===================

.. conda:recipe:: bioconductor-granie
   :replaces_section_title:
   :noindex:

   GRaNIE\: Reconstruction cell type specific gene regulatory networks including enhancers using single\-cell or bulk chromatin accessibility and RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GRaNIE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-granie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granie/meta.yaml>`_

   Genetic variants associated with diseases often affect non\-coding regions\, thus likely having a regulatory role. To understand the effects of genetic variants in these regulatory regions\, identifying genes that are modulated by specific regulatory elements \(REs\) is crucial. The effect of gene regulatory elements\, such as enhancers\, is often cell\-type specific\, likely because the combinations of transcription factors \(TFs\) that are regulating a given enhancer have cell\-type specific activity. This TF activity can be quantified with existing tools such as diffTF and captures differences in binding of a TF in open chromatin regions. Collectively\, this forms a gene regulatory network \(GRN\) with cell\-type and data\-specific TF\-RE and RE\-gene links. Here\, we reconstruct such a GRN using single\-cell or bulk RNAseq and open chromatin \(e.g.\, using ATACseq or ChIPseq for open chromatin marks\) and optionally \(Capture\) Hi\-C data. Our network contains different types of links\, connecting TFs to regulatory elements\, the latter of which is connected to genes in the vicinity or within the same chromatin domain \(TAD\). We use a statistical framework to assign empirical FDRs and weights to all links using a permutation\-based approach.


.. conda:package:: bioconductor-granie

   |downloads_bioconductor-granie| |docker_bioconductor-granie|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-topgo: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-circlize: 
   :depends r-colorspace: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-patchwork: ``>=1.2.0``
   :depends r-progress: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: ``>=1.3.0``
   :depends r-tidyselect: 
   :depends r-viridis: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-granie

   and update with::

      mamba update bioconductor-granie

  To create a new environment, run::

      mamba create --name myenvname bioconductor-granie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-granie:<tag>

   (see `bioconductor-granie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-granie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-granie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-granie
   :alt:   (downloads)
.. |docker_bioconductor-granie| image:: https://quay.io/repository/biocontainers/bioconductor-granie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-granie
.. _`bioconductor-granie/tags`: https://quay.io/repository/biocontainers/bioconductor-granie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-granie";
        var versions = ["1.10.0","1.6.1","1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-granie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-granie/README.html