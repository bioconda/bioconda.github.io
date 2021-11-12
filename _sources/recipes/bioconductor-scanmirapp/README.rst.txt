:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scanmirapp'
.. highlight: bash

bioconductor-scanmirapp
=======================

.. conda:recipe:: bioconductor-scanmirapp
   :replaces_section_title:
   :noindex:

   scanMiR shiny application

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/scanMiRApp.html
   :license: GPL-3
   :recipe: /`bioconductor-scanmirapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmirapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmirapp/meta.yaml>`_

   A shiny interface to the scanMiR package. The application enables the scanning of transcripts and custom sequences for miRNA binding sites\, the visualization of KdModels and binding results\, as well as browsing predicted repression data. In addition contains the IndexedFst class for fast indexed reading of large GenomicRanges or data.frames\, and some utilities for facilitating scans and identifying enriched miRNA\-target pairs.


.. conda:package:: bioconductor-scanmirapp

   |downloads_bioconductor-scanmirapp| |docker_bioconductor-scanmirapp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationfilter: ``>=1.18.0,<1.19.0``
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-ensembldb: ``>=2.18.0,<2.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-scanmir: ``>=1.0.0,<1.1.0``
   :depends bioconductor-scanmirdata: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dt: 
   :depends r-fst: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-matrix: 
   :depends r-plotly: 
   :depends r-rintrojs: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-waiter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scanmirapp

   and update with::

      conda update bioconductor-scanmirapp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scanmirapp:<tag>

   (see `bioconductor-scanmirapp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scanmirapp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scanmirapp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scanmirapp
   :alt:   (downloads)
.. |docker_bioconductor-scanmirapp| image:: https://quay.io/repository/biocontainers/bioconductor-scanmirapp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scanmirapp
.. _`bioconductor-scanmirapp/tags`: https://quay.io/repository/biocontainers/bioconductor-scanmirapp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scanmirapp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scanmirapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scanmirapp/README.html