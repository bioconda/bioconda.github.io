:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-signac'
.. highlight: bash

r-signac
========

.. conda:recipe:: r-signac
   :replaces_section_title:
   :noindex:

   A framework for the analysis and exploration of single\-cell chromatin data. The \'Signac\' package contains functions for quantifying single\-cell chromatin data\, computing per\-cell quality control metrics\, dimension reduction and normalization\, visualization\, and DNA sequence motif analysis. Reference\: Stuart and Butler et al. \(2019\) \<doi\:10.1016\/j.cell.2019.05.031\>.

   :homepage: https://github.com/timoast/signac, https://satijalab.org/signac
   :license: MIT / MIT
   :recipe: /`r-signac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-signac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-signac/meta.yaml>`_

   


.. conda:package:: r-signac

   |downloads_r-signac| |docker_r-signac|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-s4vectors: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: ``>=1.0.0``
   :depends r-fastmatch: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggseqlogo: 
   :depends r-irlba: 
   :depends r-lsa: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-pbapply: 
   :depends r-qlcmatrix: 
   :depends r-rcpp: 
   :depends r-rcpproll: 
   :depends r-scales: 
   :depends r-seurat: ``>=4.0.0``
   :depends r-seuratobject: ``>=4.0.0``
   :depends r-stringi: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-signac

   and update with::

      conda update r-signac

   or use the docker container::

      docker pull quay.io/biocontainers/r-signac:<tag>

   (see `r-signac/tags`_ for valid values for ``<tag>``)


.. |downloads_r-signac| image:: https://img.shields.io/conda/dn/bioconda/r-signac.svg?style=flat
   :target: https://anaconda.org/bioconda/r-signac
   :alt:   (downloads)
.. |docker_r-signac| image:: https://quay.io/repository/biocontainers/r-signac/status
   :target: https://quay.io/repository/biocontainers/r-signac
.. _`r-signac/tags`: https://quay.io/repository/biocontainers/r-signac?tab=tags


.. raw:: html

    <script>
        var package = "r-signac";
        var versions = ["1.3.0","1.2.1","1.2.1","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-signac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-signac/README.html