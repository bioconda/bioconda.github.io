:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nbamseq'
.. highlight: bash

bioconductor-nbamseq
====================

.. conda:recipe:: bioconductor-nbamseq
   :replaces_section_title:
   :noindex:

   Negative Binomial Additive Model for RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/NBAMSeq.html
   :license: GPL-2
   :recipe: /`bioconductor-nbamseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbamseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbamseq/meta.yaml>`_

   High\-throughput sequencing experiments followed by differential expression analysis is a widely used approach to detect genomic biomarkers. A fundamental step in differential expression analysis is to model the association between gene counts and covariates of interest. NBAMSeq a flexible statistical model based on the generalized additive model and allows for information sharing across genes in variance estimation.


.. conda:package:: bioconductor-nbamseq

   |downloads_bioconductor-nbamseq| |docker_bioconductor-nbamseq|

   :versions:
      
      

      ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-mgcv: ``>=1.8-24``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nbamseq

   and update with::

      conda update bioconductor-nbamseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nbamseq:<tag>

   (see `bioconductor-nbamseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nbamseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nbamseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nbamseq
   :alt:   (downloads)
.. |docker_bioconductor-nbamseq| image:: https://quay.io/repository/biocontainers/bioconductor-nbamseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nbamseq
.. _`bioconductor-nbamseq/tags`: https://quay.io/repository/biocontainers/bioconductor-nbamseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nbamseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nbamseq/README.html