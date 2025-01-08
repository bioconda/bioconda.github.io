:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epimix'
.. highlight: bash

bioconductor-epimix
===================

.. conda:recipe:: bioconductor-epimix
   :replaces_section_title:
   :noindex:

   EpiMix\: an integrative tool for the population\-level analysis of DNA methylation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EpiMix.html
   :license: GPL-3
   :recipe: /`bioconductor-epimix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimix/meta.yaml>`_

   EpiMix is a comprehensive tool for the integrative analysis of high\-throughput DNA methylation data and gene expression data. EpiMix enables automated data downloading \(from TCGA or GEO\)\, preprocessing\, methylation modeling\, interactive visualization and functional annotation.To identify hypo\- or hypermethylated CpG sites across physiological or pathological conditions\, EpiMix uses a beta mixture modeling to identify the methylation states of each CpG probe and compares the methylation of the experimental group to the control group.The output from EpiMix is the functional DNA methylation that is predictive of gene expression. EpiMix incorporates specialized algorithms to identify functional DNA methylation at various genetic elements\, including proximal cis\-regulatory elements of protein\-coding genes\, distal enhancers\, and genes encoding microRNAs and lncRNAs.


.. conda:package:: bioconductor-epimix

   |downloads_bioconductor-epimix| |docker_bioconductor-epimix|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.1.2-0``,  ``0.99.16-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-elmer.data: ``>=2.30.0,<2.31.0``
   :depends bioconductor-epimix.data: ``>=1.8.0,<1.9.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-r.matlab: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-rlang: 
   :depends r-rpmm: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-epimix

   and update with::

      mamba update bioconductor-epimix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epimix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epimix:<tag>

   (see `bioconductor-epimix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epimix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epimix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epimix
   :alt:   (downloads)
.. |docker_bioconductor-epimix| image:: https://quay.io/repository/biocontainers/bioconductor-epimix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epimix
.. _`bioconductor-epimix/tags`: https://quay.io/repository/biocontainers/bioconductor-epimix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epimix";
        var versions = ["1.8.0","1.4.0","1.1.2","0.99.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epimix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epimix/README.html