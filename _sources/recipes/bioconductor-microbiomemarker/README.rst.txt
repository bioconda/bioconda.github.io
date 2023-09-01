:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomemarker'
.. highlight: bash

bioconductor-microbiomemarker
=============================

.. conda:recipe:: bioconductor-microbiomemarker
   :replaces_section_title:
   :noindex:

   microbiome biomarker analysis toolkit

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/microbiomeMarker.html
   :license: GPL-3
   :recipe: /`bioconductor-microbiomemarker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomemarker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomemarker/meta.yaml>`_

   To date\, a number of methods have been developed for microbiome marker discovery based on metagenomic profiles\, e.g. LEfSe. However\, all of these methods have its own advantages and disadvantages\, and none of them is considered standard or universal. Moreover\, different programs or softwares may be development using different programming languages\, even in different operating systems. Here\, we have developed an all\-in\-one R package microbiomeMarker that integrates commonly used differential analysis methods as well as three machine learning\-based approaches\, including Logistic regression\, Random forest\, and Support vector machine\, to facilitate the identification of microbiome markers.


.. conda:package:: bioconductor-microbiomemarker

   |downloads_bioconductor-microbiomemarker| |docker_bioconductor-microbiomemarker|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-aldex2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-ancombc: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biomformat: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-ggtree: ``>=3.8.0,<3.9.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-metagenomeseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends bioconductor-phyloseq: ``>=1.44.0,<1.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-coin: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggsignif: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-patchwork: 
   :depends r-plotroc: 
   :depends r-proc: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidytree: 
   :depends r-vegan: 
   :depends r-yaml: 
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

      mamba install bioconductor-microbiomemarker

   and update with::

      mamba update bioconductor-microbiomemarker

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microbiomemarker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomemarker:<tag>

   (see `bioconductor-microbiomemarker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomemarker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomemarker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomemarker
   :alt:   (downloads)
.. |docker_bioconductor-microbiomemarker| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomemarker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomemarker
.. _`bioconductor-microbiomemarker/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomemarker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomemarker";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomemarker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomemarker/README.html