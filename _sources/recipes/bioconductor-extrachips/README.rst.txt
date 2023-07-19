:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-extrachips'
.. highlight: bash

bioconductor-extrachips
=======================

.. conda:recipe:: bioconductor-extrachips
   :replaces_section_title:
   :noindex:

   Additional functions for working with ChIP\-Seq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/extraChIPs.html
   :license: GPL-3
   :recipe: /`bioconductor-extrachips <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-extrachips>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-extrachips/meta.yaml>`_

   This package builds on existing tools and adds some simple but extremely useful capabilities for working with ChIP\-Seq data. The focus is on detecting differential binding windows\/regions. One set of functions focusses on set\-operations retaining mcols for GRanges objects\, whilst another group of functions are to aid visualisation of results. Coercion to tibble objects is also included.


.. conda:package:: bioconductor-extrachips

   |downloads_bioconductor-extrachips| |docker_bioconductor-extrachips|

   :versions:
      
      

      ``1.4.5-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocio: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-csaw: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-enrichedheatmap: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicinteractions: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-complexupset: 
   :depends r-dplyr: ``>=1.1.0``
   :depends r-forcats: 
   :depends r-ggforce: 
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-ggrepel: 
   :depends r-ggside: 
   :depends r-glue: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-vctrs: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-extrachips

   and update with::

      conda update bioconductor-extrachips

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-extrachips:<tag>

   (see `bioconductor-extrachips/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-extrachips| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-extrachips.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-extrachips
   :alt:   (downloads)
.. |docker_bioconductor-extrachips| image:: https://quay.io/repository/biocontainers/bioconductor-extrachips/status
   :target: https://quay.io/repository/biocontainers/bioconductor-extrachips
.. _`bioconductor-extrachips/tags`: https://quay.io/repository/biocontainers/bioconductor-extrachips?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-extrachips";
        var versions = ["1.4.5","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-extrachips/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-extrachips/README.html