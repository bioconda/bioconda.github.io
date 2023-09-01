:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-benchdamic'
.. highlight: bash

bioconductor-benchdamic
=======================

.. conda:recipe:: bioconductor-benchdamic
   :replaces_section_title:
   :noindex:

   Benchmark of differential abundance methods on microbiome data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/benchdamic.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-benchdamic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchdamic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchdamic/meta.yaml>`_

   Starting from a microbiome dataset \(16S or WMS with absolute count values\) it is possible to perform several analysis to assess the performances of many differential abundance detection methods. A basic and standardized version of the main differential abundance analysis methods is supplied but the user can also add his method to the benchmark. The analyses focus on 4 main aspects\: i\) the goodness of fit of each method\'s distributional assumptions on the observed count data\, ii\) the ability to control the false discovery rate\, iii\) the within and between method concordances\, iv\) the truthfulness of the findings if any apriori knowledge is given. Several graphical functions are available for result visualization.


.. conda:package:: bioconductor-benchdamic

   |downloads_bioconductor-benchdamic| |docker_bioconductor-benchdamic|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-aldex2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-ancombc: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-dearseq: ``>=1.12.0,<1.13.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-mast: ``>=1.26.0,<1.27.0``
   :depends bioconductor-metagenomeseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-noiseq: ``>=2.44.0,<2.45.0``
   :depends bioconductor-phyloseq: ``>=1.44.0,<1.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.8.0,<2.9.0``
   :depends bioconductor-zinbwave: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corncob: 
   :depends r-cowplot: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-lme4: 
   :depends r-mglm: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-seurat: 
   :depends r-tidytext: 
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

      mamba install bioconductor-benchdamic

   and update with::

      mamba update bioconductor-benchdamic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-benchdamic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-benchdamic:<tag>

   (see `bioconductor-benchdamic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-benchdamic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-benchdamic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-benchdamic
   :alt:   (downloads)
.. |docker_bioconductor-benchdamic| image:: https://quay.io/repository/biocontainers/bioconductor-benchdamic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-benchdamic
.. _`bioconductor-benchdamic/tags`: https://quay.io/repository/biocontainers/bioconductor-benchdamic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-benchdamic";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-benchdamic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-benchdamic/README.html