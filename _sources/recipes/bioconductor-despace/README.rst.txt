:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-despace'
.. highlight: bash

bioconductor-despace
====================

.. conda:recipe:: bioconductor-despace
   :replaces_section_title:
   :noindex:

   DESpace\: a framework to discover spatially variable genes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DESpace.html
   :license: GPL-3
   :recipe: /`bioconductor-despace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-despace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-despace/meta.yaml>`_

   Intuitive framework for identifying spatially variable genes \(SVGs\) via edgeR\, a popular method for performing differential expression analyses. Based on pre\-annotated spatial clusters as summarized spatial information\, DESpace models gene expression using a negative binomial \(NB\)\, via edgeR\, with spatial clusters as covariates. SVGs are then identified by testing the significance of spatial clusters. The method is flexible and robust\, and is faster than the most SV methods. Furthermore\, to the best of our knowledge\, it is the only SV approach that allows\: \- performing a SV test on each individual spatial cluster\, hence identifying the key regions of the tissue affected by spatial variability\; \- jointly fitting multiple samples\, targeting genes with consistent spatial patterns across replicates.


.. conda:package:: bioconductor-despace

   |downloads_bioconductor-despace| |docker_bioconductor-despace|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-despace

   and update with::

      conda update bioconductor-despace

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-despace:<tag>

   (see `bioconductor-despace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-despace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-despace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-despace
   :alt:   (downloads)
.. |docker_bioconductor-despace| image:: https://quay.io/repository/biocontainers/bioconductor-despace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-despace
.. _`bioconductor-despace/tags`: https://quay.io/repository/biocontainers/bioconductor-despace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-despace";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-despace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-despace/README.html