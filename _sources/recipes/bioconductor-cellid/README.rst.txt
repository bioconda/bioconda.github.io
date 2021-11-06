:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellid'
.. highlight: bash

bioconductor-cellid
===================

.. conda:recipe:: bioconductor-cellid
   :replaces_section_title:
   :noindex:

   Unbiased Extraction of Single Cell gene signatures using Multiple Correspondence Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CelliD.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cellid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellid/meta.yaml>`_

   CelliD is a clustering\-free multivariate statistical method for the robust extraction of per\-cell gene signatures from single\-cell RNA\-seq. CelliD allows unbiased cell identity recognition across different donors\, tissues\-of\-origin\, model organisms and single\-cell omics protocols. The package can also be used to explore functional pathways enrichment in single cell data.


.. conda:package:: bioconductor-cellid

   |downloads_bioconductor-cellid| |docker_bioconductor-cellid|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-fgsea: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scater: ``>=1.22.0,<1.23.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-fastmatch: 
   :depends r-ggplot2: 
   :depends r-glue: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-pbapply: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-reticulate: 
   :depends r-rtsne: 
   :depends r-seurat: ``>=4.0.1``
   :depends r-stringr: 
   :depends r-tictoc: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellid

   and update with::

      conda update bioconductor-cellid

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellid:<tag>

   (see `bioconductor-cellid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellid
   :alt:   (downloads)
.. |docker_bioconductor-cellid| image:: https://quay.io/repository/biocontainers/bioconductor-cellid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellid
.. _`bioconductor-cellid/tags`: https://quay.io/repository/biocontainers/bioconductor-cellid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellid";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellid/README.html