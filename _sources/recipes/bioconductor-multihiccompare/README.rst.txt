:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multihiccompare'
.. highlight: bash

bioconductor-multihiccompare
============================

.. conda:recipe:: bioconductor-multihiccompare
   :replaces_section_title:
   :noindex:

   Normalize and detect differences between Hi\-C datasets when replicates of each experimental condition are available

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/multiHiCcompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-multihiccompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multihiccompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multihiccompare/meta.yaml>`_

   multiHiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. This extension of the original HiCcompare package now allows for Hi\-C experiments with more than 2 groups and multiple samples per group. multiHiCcompare operates on processed Hi\-C data in the form of sparse upper triangular matrices. It accepts four column \(chromosome\, region1\, region2\, IF\) tab\-separated text files storing chromatin interaction matrices. multiHiCcompare provides cyclic loess and fast loess \(fastlo\) methods adapted to jointly normalizing Hi\-C data. Additionally\, it provides a general linear model \(GLM\) framework adapting the edgeR package to detect differences in Hi\-C data in a distance dependent manner.


.. conda:package:: bioconductor-multihiccompare

   |downloads_bioconductor-multihiccompare| |docker_bioconductor-multihiccompare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodbdata: ``>=1.2.0,<1.3.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hiccompare: ``>=1.20.0,<1.21.0``
   :depends r-aggregation: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-pbapply: 
   :depends r-pheatmap: 
   :depends r-qqman: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multihiccompare

   and update with::

      conda update bioconductor-multihiccompare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multihiccompare:<tag>

   (see `bioconductor-multihiccompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multihiccompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multihiccompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multihiccompare
   :alt:   (downloads)
.. |docker_bioconductor-multihiccompare| image:: https://quay.io/repository/biocontainers/bioconductor-multihiccompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multihiccompare
.. _`bioconductor-multihiccompare/tags`: https://quay.io/repository/biocontainers/bioconductor-multihiccompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multihiccompare";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html