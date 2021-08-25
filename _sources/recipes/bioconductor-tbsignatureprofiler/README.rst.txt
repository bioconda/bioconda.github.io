:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tbsignatureprofiler'
.. highlight: bash

bioconductor-tbsignatureprofiler
================================

.. conda:recipe:: bioconductor-tbsignatureprofiler
   :replaces_section_title:
   :noindex:

   Profile RA\-Seq Data Using TB Pathway Signatures

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/TBSignatureProfiler.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tbsignatureprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbsignatureprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbsignatureprofiler/meta.yaml>`_

   Signatures of TB progression\, TB disease\, and other TB disease states have been created. This package makes it easy to profile RNA\-Seq data using these signatures and common signature profiling tools including ASSIGN\, GSVA\, and ssGSEA.


.. conda:package:: bioconductor-tbsignatureprofiler

   |downloads_bioconductor-tbsignatureprofiler| |docker_bioconductor-tbsignatureprofiler|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-assign: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biodist: ``>=1.62.0,<1.63.0``
   :depends bioconductor-complexheatmap: ``>=2.6.0,<2.7.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-gsva: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singscore: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-boot: 
   :depends r-caret: 
   :depends r-circlize: 
   :depends r-dt: 
   :depends r-e1071: 
   :depends r-gdata: 
   :depends r-ggfortify: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rocit: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tbsignatureprofiler

   and update with::

      conda update bioconductor-tbsignatureprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tbsignatureprofiler:<tag>

   (see `bioconductor-tbsignatureprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tbsignatureprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tbsignatureprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tbsignatureprofiler
   :alt:   (downloads)
.. |docker_bioconductor-tbsignatureprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-tbsignatureprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tbsignatureprofiler
.. _`bioconductor-tbsignatureprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-tbsignatureprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tbsignatureprofiler";
        var versions = ["1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tbsignatureprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tbsignatureprofiler/README.html