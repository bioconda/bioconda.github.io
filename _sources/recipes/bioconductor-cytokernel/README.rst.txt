:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytokernel'
.. highlight: bash

bioconductor-cytokernel
=======================

.. conda:recipe:: bioconductor-cytokernel
   :replaces_section_title:
   :noindex:

   Differential expression using kernel\-based score test

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cytoKernel.html
   :license: GPL-3
   :recipe: /`bioconductor-cytokernel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytokernel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytokernel/meta.yaml>`_

   cytoKernel implements a kernel\-based score test to identify differentially expressed features in high\-dimensional biological experiments. This approach can be applied across many different high\-dimensional biological data including gene expression data and dimensionally reduced cytometry\-based marker expression data. In this R package\, we implement functions that compute the feature\-wise p values and their corresponding adjusted p values. Additionally\, it also computes the feature\-wise shrunk effect sizes and their corresponding shrunken effect size. Further\, it calculates the percent of differentially expressed features and plots user\-friendly heatmap of the top differentially expressed features on the rows and samples on the columns.


.. conda:package:: bioconductor-cytokernel

   |downloads_bioconductor-cytokernel| |docker_bioconductor-cytokernel|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14.0.4``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-ashr: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytokernel

   and update with::

      conda update bioconductor-cytokernel

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytokernel:<tag>

   (see `bioconductor-cytokernel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytokernel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytokernel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytokernel
   :alt:   (downloads)
.. |docker_bioconductor-cytokernel| image:: https://quay.io/repository/biocontainers/bioconductor-cytokernel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytokernel
.. _`bioconductor-cytokernel/tags`: https://quay.io/repository/biocontainers/bioconductor-cytokernel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytokernel";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytokernel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytokernel/README.html