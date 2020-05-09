:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bcseq'
.. highlight: bash

bioconductor-bcseq
==================

.. conda:recipe:: bioconductor-bcseq
   :replaces_section_title:

   Fast Sequence Mapping in High\-Throughput shRNA and CRISPR Screens

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/bcSeq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcseq/meta.yaml>`_

   This Rcpp\-based package implements a highly efficient data structure and algorithm for performing alignment of short reads from CRISPR or shRNA screens to reference barcode library. Sequencing error are considered and matching qualities are evaluated based on Phred scores. A Bayes\' classifier is employed to predict the originating barcode of a read. The package supports provision of user\-defined probability models for evaluating matching qualities. The package also supports multi\-threading.


.. conda:package:: bioconductor-bcseq

   |downloads_bioconductor-bcseq| |docker_bioconductor-bcseq|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libcxx: >=9.0.1
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-matrix: 
   :depends r-rcpp: >=0.12.12
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcseq/README.html