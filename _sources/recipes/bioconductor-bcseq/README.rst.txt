.. title:: Package Recipe 'bioconductor-bcseq'
.. highlight: bash


bioconductor-bcseq
==================

.. conda:recipe:: bioconductor-bcseq
   :replaces_section_title:

   This Rcpp\-based package implements a highly efficient data structure and algorithm for performing alignment of short reads from CRISPR or shRNA screens to reference barcode library. Sequencing error are considered and matching qualities are evaluated based on Phred scores. A Bayes\' classifier is employed to predict the originating barcode of a read. The package supports provision of user\-defined probability models for evaluating matching qualities. The package also supports multi\-threading.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bcSeq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcseq/meta.yaml>`_

   


.. conda:package:: bioconductor-bcseq

   |downloads_bioconductor-bcseq| |docker_bioconductor-bcseq|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-rcpp` >=0.12.12 

   :required~by: |required_by_bioconductor-bcseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bcseq

   and update with::

      conda update bioconductor-bcseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bcseq


.. |required_by_bioconductor-bcseq| conda:required_by:: bioconductor-bcseq
.. |downloads_bioconductor-bcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bcseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bcseq| image:: https://quay.io/repository/biocontainers/bioconductor-bcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bcseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcseq/README.html

