:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scanmirapp'
.. highlight: bash

bioconductor-scanmirapp
=======================

.. conda:recipe:: bioconductor-scanmirapp
   :replaces_section_title:
   :noindex:

   scanMiR shiny application

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scanMiRApp.html
   :license: GPL-3
   :recipe: /`bioconductor-scanmirapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmirapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmirapp/meta.yaml>`_

   A shiny interface to the scanMiR package. The application enables the scanning of transcripts and custom sequences for miRNA binding sites\, the visualization of KdModels and binding results\, as well as browsing predicted repression data. In addition contains the IndexedFst class for fast indexed reading of large GenomicRanges or data.frames\, and some utilities for facilitating scans and identifying enriched miRNA\-target pairs.


.. conda:package:: bioconductor-scanmirapp

   |downloads_bioconductor-scanmirapp| |docker_bioconductor-scanmirapp|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationfilter: ``>=1.30.0,<1.31.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scanmir: ``>=1.12.0,<1.13.0``
   :depends bioconductor-scanmirdata: ``>=1.12.0,<1.13.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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
   :depends r-shinyjqui: 
   :depends r-waiter: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scanmirapp

   and update with::

      mamba update bioconductor-scanmirapp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scanmirapp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
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