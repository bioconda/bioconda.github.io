:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orthogene'
.. highlight: bash

bioconductor-orthogene
======================

.. conda:recipe:: bioconductor-orthogene
   :replaces_section_title:
   :noindex:

   Interspecies gene mapping

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/orthogene.html
   :license: GPL-3
   :recipe: /`bioconductor-orthogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthogene/meta.yaml>`_

   orthogene is an R package for easy mapping of orthologous genes across hundreds of species. It pulls up\-to\-date interspecies gene ortholog mappings across 700\+ organisms. It also provides various utility functions to map common objects \(e.g. data.frames\, gene expression matrices\, lists\) onto 1\:1 gene orthologs from any other species.


.. conda:package:: bioconductor-orthogene

   |downloads_bioconductor-orthogene| |docker_bioconductor-orthogene|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.20.0,<0.21.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomeinfodbdata: ``>=1.2.0,<1.3.0``
   :depends r-babelgene: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gprofiler2: 
   :depends r-grr: 
   :depends r-homologene: 
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-matrix.utils: 
   :depends r-patchwork: 
   :depends r-repmis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-orthogene

   and update with::

      conda update bioconductor-orthogene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orthogene:<tag>

   (see `bioconductor-orthogene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orthogene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orthogene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orthogene
   :alt:   (downloads)
.. |docker_bioconductor-orthogene| image:: https://quay.io/repository/biocontainers/bioconductor-orthogene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orthogene
.. _`bioconductor-orthogene/tags`: https://quay.io/repository/biocontainers/bioconductor-orthogene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-orthogene";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orthogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orthogene/README.html