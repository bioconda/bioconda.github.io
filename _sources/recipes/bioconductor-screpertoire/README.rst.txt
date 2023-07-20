:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screpertoire'
.. highlight: bash

bioconductor-screpertoire
=========================

.. conda:recipe:: bioconductor-screpertoire
   :replaces_section_title:
   :noindex:

   A toolkit for single\-cell immune receptor profiling

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scRepertoire.html
   :license: GPL-2
   :recipe: /`bioconductor-screpertoire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screpertoire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screpertoire/meta.yaml>`_

   scRepertoire was built to process data derived from the 10x Genomics Chromium Immune Profiling for both T\-cell receptor \(TCR\) and immunoglobulin \(Ig\) enrichment workflows and subsequently interacts with the popular Seurat and SingleCellExperiment R packages. It also allows for general analysis of single\-cell clonotype information without the use of expression information. The package functions as a wrapper for Startrac and powerTCR R packages.


.. conda:package:: bioconductor-screpertoire

   |downloads_bioconductor-screpertoire| |docker_bioconductor-screpertoire|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-powertcr: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-ggalluvial: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-seuratobject: 
   :depends r-stringdist: 
   :depends r-stringr: 
   :depends r-tidygraph: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-screpertoire

   and update with::

      conda update bioconductor-screpertoire

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-screpertoire:<tag>

   (see `bioconductor-screpertoire/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-screpertoire| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screpertoire.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screpertoire
   :alt:   (downloads)
.. |docker_bioconductor-screpertoire| image:: https://quay.io/repository/biocontainers/bioconductor-screpertoire/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screpertoire
.. _`bioconductor-screpertoire/tags`: https://quay.io/repository/biocontainers/bioconductor-screpertoire?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-screpertoire";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screpertoire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screpertoire/README.html