:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-escape'
.. highlight: bash

bioconductor-escape
===================

.. conda:recipe:: bioconductor-escape
   :replaces_section_title:
   :noindex:

   Easy single cell analysis platform for enrichment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/escape.html
   :license: GPL-2
   :recipe: /`bioconductor-escape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escape/meta.yaml>`_

   A bridging R package to facilitate gene set enrichment analysis \(GSEA\) in the context of single\-cell RNA sequencing. Using raw count information\, Seurat objects\, or SingleCellExperiment format\, users can perform and visualize GSEA across individual cells.


.. conda:package:: bioconductor-escape

   |downloads_bioconductor-escape| |docker_bioconductor-escape|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-gsva: ``>=1.48.0,<1.49.0``
   :depends bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-ucell: ``>=2.4.0,<2.5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-matrix: 
   :depends r-msigdbr: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-escape

   and update with::

      conda update bioconductor-escape

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-escape:<tag>

   (see `bioconductor-escape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-escape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-escape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-escape
   :alt:   (downloads)
.. |docker_bioconductor-escape| image:: https://quay.io/repository/biocontainers/bioconductor-escape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-escape
.. _`bioconductor-escape/tags`: https://quay.io/repository/biocontainers/bioconductor-escape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-escape";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-escape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-escape/README.html