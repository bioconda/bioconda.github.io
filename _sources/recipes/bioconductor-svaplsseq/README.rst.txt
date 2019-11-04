:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svaplsseq'
.. highlight: bash

bioconductor-svaplsseq
======================

.. conda:recipe:: bioconductor-svaplsseq
   :replaces_section_title:

   The package contains functions that are intended for extracting the signatures of latent variation in RNAseq data and using them to perform an improved differential expression analysis for a set of features \(genes\, transcripts\) between two specified biological groups.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SVAPLSseq.html
   :license: GPL-3
   :recipe: /`bioconductor-svaplsseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svaplsseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svaplsseq/meta.yaml>`_
   :links: biotools: :biotools:`svaplsseq`, doi: :doi:`10.1101/062125`

   


.. conda:package:: bioconductor-svaplsseq

   |downloads_bioconductor-svaplsseq| |docker_bioconductor-svaplsseq|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.1-0, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-lmtest: 
   :depends r-pls: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-svaplsseq

   and update with::

      conda update bioconductor-svaplsseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-svaplsseq:<tag>

   (see `bioconductor-svaplsseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-svaplsseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svaplsseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-svaplsseq
   :alt:   (downloads)
.. |docker_bioconductor-svaplsseq| image:: https://quay.io/repository/biocontainers/bioconductor-svaplsseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svaplsseq
.. _`bioconductor-svaplsseq/tags`: https://quay.io/repository/biocontainers/bioconductor-svaplsseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svaplsseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svaplsseq/README.html