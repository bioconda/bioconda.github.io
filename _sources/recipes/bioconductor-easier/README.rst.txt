:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easier'
.. highlight: bash

bioconductor-easier
===================

.. conda:recipe:: bioconductor-easier
   :replaces_section_title:
   :noindex:

   Estimate Systems Immune Response from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/easier.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-easier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easier/meta.yaml>`_

   This package provides a workflow for the use of EaSIeR tool\, developed to assess patients\' likelihood to respond to ICB therapies providing just the patients\' RNA\-seq data as input. We integrate RNA\-seq data with different types of prior knowledge to extract quantitative descriptors of the tumor microenvironment from several points of view\, including composition of the immune repertoire\, and activity of intra\- and extra\-cellular communications. Then\, we use multi\-task machine learning trained in TCGA data to identify how these descriptors can simultaneously predict several state\-of\-the\-art hallmarks of anti\-cancer immune response. In this way we derive cancer\-specific models and identify cancer\-specific systems biomarkers of immune response. These biomarkers have been experimentally validated in the literature and the performance of EaSIeR predictions has been validated using independent datasets form four different cancer types with patients treated with anti\-PD1 or anti\-PDL1 therapy.


.. conda:package:: bioconductor-easier

   |downloads_bioconductor-easier| |docker_bioconductor-easier|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-deseq2: ``>=1.34.0,<1.35.0``
   :depends bioconductor-dorothea: ``>=1.6.0,<1.7.0``
   :depends bioconductor-easierdata: ``>=1.0.0,<1.1.0``
   :depends bioconductor-progeny: ``>=1.16.0,<1.17.0``
   :depends bioconductor-quantiseqr: ``>=1.2.0,<1.3.0``
   :depends r-arules: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-coin: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rocr: 
   :depends r-rstatix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-easier

   and update with::

      conda update bioconductor-easier

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-easier:<tag>

   (see `bioconductor-easier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-easier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easier
   :alt:   (downloads)
.. |docker_bioconductor-easier| image:: https://quay.io/repository/biocontainers/bioconductor-easier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easier
.. _`bioconductor-easier/tags`: https://quay.io/repository/biocontainers/bioconductor-easier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easier";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easier/README.html