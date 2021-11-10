:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aspediafi'
.. highlight: bash

bioconductor-aspediafi
======================

.. conda:recipe:: bioconductor-aspediafi
   :replaces_section_title:
   :noindex:

   ASpedia\-FI\: Functional Interaction Analysis of Alternative Splicing Events

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ASpediaFI.html
   :license: GPL-3
   :recipe: /`bioconductor-aspediafi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspediafi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspediafi/meta.yaml>`_

   This package provides functionalities for a systematic and integrative analysis of alternative splicing events and their functional interactions.


.. conda:package:: bioconductor-aspediafi

   |downloads_bioconductor-aspediafi| |docker_bioconductor-aspediafi|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-fgsea: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gviz: ``>=1.38.0,<1.39.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-ivas: ``>=2.14.0,<2.15.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-drawr: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-mgsz: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aspediafi

   and update with::

      conda update bioconductor-aspediafi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aspediafi:<tag>

   (see `bioconductor-aspediafi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aspediafi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aspediafi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aspediafi
   :alt:   (downloads)
.. |docker_bioconductor-aspediafi| image:: https://quay.io/repository/biocontainers/bioconductor-aspediafi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aspediafi
.. _`bioconductor-aspediafi/tags`: https://quay.io/repository/biocontainers/bioconductor-aspediafi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aspediafi";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aspediafi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aspediafi/README.html