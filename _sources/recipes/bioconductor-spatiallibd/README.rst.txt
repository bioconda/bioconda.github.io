:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatiallibd'
.. highlight: bash

bioconductor-spatiallibd
========================

.. conda:recipe:: bioconductor-spatiallibd
   :replaces_section_title:
   :noindex:

   spatialLIBD\: an R\/Bioconductor package to visualize spatially\-resolved transcriptomics data

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/spatialLIBD.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatiallibd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatiallibd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatiallibd/meta.yaml>`_

   Inspect interactively the spatially\-resolved transcriptomics data from the 10x Genomics Visium platform as well as data from the Maynard\, Collado\-Torres et al\, Nature Neuroscience\, 2021 project analyzed by Lieber Institute for Brain Development \(LIBD\) researchers and collaborators.


.. conda:package:: bioconductor-spatiallibd

   |downloads_bioconductor-spatiallibd| |docker_bioconductor-spatiallibd|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scuttle: ``>=1.10.0,<1.11.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-benchmarkme: 
   :depends r-cowplot: 
   :depends r-dt: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-golem: 
   :depends r-jsonlite: 
   :depends r-magick: 
   :depends r-matrix: 
   :depends r-paletteer: 
   :depends r-plotly: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-sessioninfo: 
   :depends r-shiny: 
   :depends r-shinywidgets: 
   :depends r-statmod: 
   :depends r-tibble: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatiallibd

   and update with::

      conda update bioconductor-spatiallibd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatiallibd:<tag>

   (see `bioconductor-spatiallibd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatiallibd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatiallibd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatiallibd
   :alt:   (downloads)
.. |docker_bioconductor-spatiallibd| image:: https://quay.io/repository/biocontainers/bioconductor-spatiallibd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatiallibd
.. _`bioconductor-spatiallibd/tags`: https://quay.io/repository/biocontainers/bioconductor-spatiallibd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatiallibd";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatiallibd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatiallibd/README.html