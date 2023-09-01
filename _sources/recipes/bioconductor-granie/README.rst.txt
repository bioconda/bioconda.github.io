:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-granie'
.. highlight: bash

bioconductor-granie
===================

.. conda:recipe:: bioconductor-granie
   :replaces_section_title:
   :noindex:

   GRaNIE\: Reconstruction cell type specific gene regulatory networks including enhancers using chromatin accessibility and RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GRaNIE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-granie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granie/meta.yaml>`_

   Genetic variants associated with diseases often affect non\-coding regions\, thus likely having a regulatory role. To understand the effects of genetic variants in these regulatory regions\, identifying genes that are modulated by specific regulatory elements \(REs\) is crucial. The effect of gene regulatory elements\, such as enhancers\, is often cell\-type specific\, likely because the combinations of transcription factors \(TFs\) that are regulating a given enhancer have celltype specific activity. This TF activity can be quantified with existing tools such as diffTF and captures differences in binding of a TF in open chromatin regions. Collectively\, this forms a gene regulatory network \(GRN\) with cell\-type and data\-specific TF\-RE and RE\-gene links. Here\, we reconstruct such a GRN using bulk RNAseq and open chromatin \(e.g.\, using ATACseq or ChIPseq for open chromatin marks\) and optionally TF activity data. Our network contains different types of links\, connecting TFs to regulatory elements\, the latter of which is connected to genes in the vicinity or within the same chromatin domain \(TAD\). We use a statistical framework to assign empirical FDRs and weights to all links using a permutation\-based approach.


.. conda:package:: bioconductor-granie

   |downloads_bioconductor-granie| |docker_bioconductor-granie|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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
   :depends r-patchwork: 
   :depends r-progress: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-viridis: 
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
        var versions = ["1.4.1","1.2.0"];
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