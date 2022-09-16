:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bcseq'
.. highlight: bash

bioconductor-bcseq
==================

.. conda:recipe:: bioconductor-bcseq
   :replaces_section_title:
   :noindex:

   Fast Sequence Mapping in High\-Throughput shRNA and CRISPR Screens

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/bcSeq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcseq/meta.yaml>`_

   This Rcpp\-based package implements a highly efficient data structure and algorithm for performing alignment of short reads from CRISPR or shRNA screens to reference barcode library. Sequencing error are considered and matching qualities are evaluated based on Phred scores. A Bayes\' classifier is employed to predict the originating barcode of a read. The package supports provision of user\-defined probability models for evaluating matching qualities. The package also supports multi\-threading.


.. conda:package:: bioconductor-bcseq

   |downloads_bioconductor-bcseq| |docker_bioconductor-bcseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.12.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bcseq

   and update with::

      conda update bioconductor-bcseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bcseq:<tag>

   (see `bioconductor-bcseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bcseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bcseq
   :alt:   (downloads)
.. |docker_bioconductor-bcseq| image:: https://quay.io/repository/biocontainers/bioconductor-bcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bcseq
.. _`bioconductor-bcseq/tags`: https://quay.io/repository/biocontainers/bioconductor-bcseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bcseq";
        var versions = ["1.16.0","1.16.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcseq/README.html