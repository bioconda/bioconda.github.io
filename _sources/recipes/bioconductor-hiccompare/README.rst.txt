:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiccompare'
.. highlight: bash

bioconductor-hiccompare
=======================

.. conda:recipe:: bioconductor-hiccompare
   :replaces_section_title:
   :noindex:

   HiCcompare\: Joint normalization and comparative analysis of multiple Hi\-C datasets

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/HiCcompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hiccompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiccompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiccompare/meta.yaml>`_
   :links: biotools: :biotools:`HiCcompare`, doi: :doi:`10.1186/s12859-018-2288-x`

   HiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. HiCcompare operates on processed Hi\-C data in the form of chromosome\-specific chromatin interaction matrices. It accepts three\-column tab\-separated text files storing chromatin interaction matrices in a sparse matrix format which are available from several sources. HiCcompare is designed to give the user the ability to perform a comparative analysis on the 3\-Dimensional structure of the genomes of cells in different biological states.\`HiCcompare\` differs from other packages that attempt to compare Hi\-C data in that it works on processed data in chromatin interaction matrix format instead of pre\-processed sequencing data. In addition\, \`HiCcompare\` provides a non\-parametric method for the joint normalization and removal of biases between two Hi\-C datasets for the purpose of comparative analysis. \`HiCcompare\` also provides a simple yet robust method for detecting differences between Hi\-C datasets.


.. conda:package:: bioconductor-hiccompare

   |downloads_bioconductor-hiccompare| |docker_bioconductor-hiccompare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.1-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-kernsmooth: 
   :depends r-mgcv: 
   :depends r-pheatmap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hiccompare

   and update with::

      conda update bioconductor-hiccompare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hiccompare:<tag>

   (see `bioconductor-hiccompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hiccompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiccompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiccompare
   :alt:   (downloads)
.. |docker_bioconductor-hiccompare| image:: https://quay.io/repository/biocontainers/bioconductor-hiccompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiccompare
.. _`bioconductor-hiccompare/tags`: https://quay.io/repository/biocontainers/bioconductor-hiccompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hiccompare";
        var versions = ["1.22.1","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html