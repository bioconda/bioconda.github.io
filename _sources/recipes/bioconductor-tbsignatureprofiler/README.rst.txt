:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tbsignatureprofiler'
.. highlight: bash

bioconductor-tbsignatureprofiler
================================

.. conda:recipe:: bioconductor-tbsignatureprofiler
   :replaces_section_title:
   :noindex:

   Profile RNA\-Seq Data Using TB Pathway Signatures

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/TBSignatureProfiler.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tbsignatureprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbsignatureprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbsignatureprofiler/meta.yaml>`_

   Gene signatures of TB progression\, TB disease\, and other TB disease states have been validated and published previously. This package aggregates known signatures and provides computational tools to enlist their usage on other datasets. The TBSignatureProfiler makes it easy to profile RNA\-Seq data using these signatures and includes common signature profiling tools including ASSIGN\, GSVA\, and ssGSEA. Original models for some gene signatures are also available.  A shiny app provides some functionality alongside for detailed command line accessibility.


.. conda:package:: bioconductor-tbsignatureprofiler

   |downloads_bioconductor-tbsignatureprofiler| |docker_bioconductor-tbsignatureprofiler|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-assign: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-gsva: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singscore: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-gdata: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rocit: 
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
        var versions = ["1.12.0","1.10.0","1.6.0","1.2.0","1.2.0"];
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