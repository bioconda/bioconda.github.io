:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomemarker'
.. highlight: bash

bioconductor-microbiomemarker
=============================

.. conda:recipe:: bioconductor-microbiomemarker
   :replaces_section_title:
   :noindex:

   microbiome biomarker analysis toolkit

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/microbiomeMarker.html
   :license: GPL-3
   :recipe: /`bioconductor-microbiomemarker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomemarker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomemarker/meta.yaml>`_

   To date\, a number of methods have been developed for microbiome marker discovery based on metagenomic profiles\, e.g. LEfSe. However\, all of these methods have its own advantages and disadvantages\, and none of them is considered standard or universal. Moreover\, different programs or softwares may be development using different programming languages\, even in different operating systems. Here\, we have developed an all\-in\-one R package microbiomeMarker that integrates commonly used differential analysis methods as well as three machine learning\-based approaches\, including Logistic regression\, Random forest\, and Support vector machine\, to facilitate the identification of microbiome markers.


.. conda:package:: bioconductor-microbiomemarker

   |downloads_bioconductor-microbiomemarker| |docker_bioconductor-microbiomemarker|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-aldex2: ``>=1.26.0,<1.27.0``
   :depends bioconductor-ancombc: ``>=1.4.0,<1.5.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biomformat: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-deseq2: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-ggtree: ``>=3.2.0,<3.3.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-metagenomeseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-multtest: ``>=2.50.0,<2.51.0``
   :depends bioconductor-phyloseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-coin: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggsignif: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-patchwork: 
   :depends r-plotroc: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidytree: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiomemarker

   and update with::

      conda update bioconductor-microbiomemarker

   or use the docker container::

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
        var versions = ["1.0.0"];
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