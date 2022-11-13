:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-protgear'
.. highlight: bash

bioconductor-protgear
=====================

.. conda:recipe:: bioconductor-protgear
   :replaces_section_title:
   :noindex:

   Protein Micro Array Data Management and Interactive Visualization

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/protGear.html
   :license: GPL-3
   :recipe: /`bioconductor-protgear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgear/meta.yaml>`_

   A generic three\-step pre\-processing package for protein microarray data. This package contains different data pre\-processing procedures to allow comparison of their performance.These steps are background correction\, the coefficient of variation \(CV\) based filtering\, batch correction and normalization.


.. conda:package:: bioconductor-protgear

   |downloads_bioconductor-protgear| |docker_bioconductor-protgear|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genefilter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-vsn: ``>=3.66.0,<3.67.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: ``>=1.14.0``
   :depends r-dplyr: ``>=0.8.0``
   :depends r-factoextra: ``>=1.0.7``
   :depends r-factominer: ``>=2.4``
   :depends r-flexdashboard: ``>=0.5.2``
   :depends r-ggally: ``>=2.1.2``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-ggpubr: ``>=0.4.0``
   :depends r-gtools: ``>=3.8.2``
   :depends r-htmltools: ``>=0.4.0``
   :depends r-kableextra: ``>=1.3.4``
   :depends r-kendall: ``>=2.2``
   :depends r-knitr: ``>=1.33``
   :depends r-magrittr: ``>=1.5``
   :depends r-mass: ``>=7.3``
   :depends r-pheatmap: ``>=1.0.12``
   :depends r-plotly: ``>=4.9.0``
   :depends r-plyr: ``>=1.8.6``
   :depends r-purrr: ``>=0.3.4``
   :depends r-readr: ``>=2.0.1``
   :depends r-remotes: ``>=2.4.0``
   :depends r-rlang: ``>=0.4.11``
   :depends r-rmarkdown: ``>=2.9``
   :depends r-shiny: ``>=1.0.0``
   :depends r-shinydashboard: ``>=0.7.1``
   :depends r-styler: ``>=1.6.1``
   :depends r-tibble: ``>=3.1.0``
   :depends r-tidyr: ``>=1.1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-protgear

   and update with::

      conda update bioconductor-protgear

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-protgear:<tag>

   (see `bioconductor-protgear/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-protgear| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-protgear.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-protgear
   :alt:   (downloads)
.. |docker_bioconductor-protgear| image:: https://quay.io/repository/biocontainers/bioconductor-protgear/status
   :target: https://quay.io/repository/biocontainers/bioconductor-protgear
.. _`bioconductor-protgear/tags`: https://quay.io/repository/biocontainers/bioconductor-protgear?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-protgear";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-protgear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-protgear/README.html