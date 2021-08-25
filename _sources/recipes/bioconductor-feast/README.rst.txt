:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-feast'
.. highlight: bash

bioconductor-feast
==================

.. conda:recipe:: bioconductor-feast
   :replaces_section_title:
   :noindex:

   FEAture SelcTion \(FEAST\) for Single\-cell clustering

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/FEAST.html
   :license: GPL-2
   :recipe: /`bioconductor-feast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-feast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-feast/meta.yaml>`_

   Cell clustering is one of the most important and commonly performed tasks in single\-cell RNA sequencing \(scRNA\-seq\) data analysis. An important step in cell clustering is to select a subset of genes \(referred to as “features”\)\, whose expression patterns will then be used for downstream clustering. A good set of features should include the ones that distinguish different cell types\, and the quality of such set could have significant impact on the clustering accuracy. FEAST is an R library for selecting most representative features before performing the core of scRNA\-seq clustering. It can be used as a plug\-in for the etablished clustering algorithms such as SC3\, TSCAN\, SHARP\, SIMLR\, and Seurat. The core of FEAST algorithm includes three steps\: 1. consensus clustering\; 2. gene\-level significance inference\; 3. validation of an optimized feature set.


.. conda:package:: bioconductor-feast

   |downloads_bioconductor-feast| |docker_bioconductor-feast|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-sc3: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-tscan: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-irlba: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-feast

   and update with::

      conda update bioconductor-feast

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-feast:<tag>

   (see `bioconductor-feast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-feast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-feast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-feast
   :alt:   (downloads)
.. |docker_bioconductor-feast| image:: https://quay.io/repository/biocontainers/bioconductor-feast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-feast
.. _`bioconductor-feast/tags`: https://quay.io/repository/biocontainers/bioconductor-feast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-feast";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-feast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-feast/README.html