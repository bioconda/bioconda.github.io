.. title:: Package Recipe 'bioconductor-svaplsseq'
.. highlight: bash


bioconductor-svaplsseq
======================

.. conda:recipe:: bioconductor-svaplsseq
   :replaces_section_title:

   The package contains functions that are intended for extracting the signatures of latent variation in RNAseq data and using them to perform an improved differential expression analysis for a set of features \(genes\, transcripts\) between two specified biological groups.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SVAPLSseq.html
   :license: GPL-3
   :recipe: /`bioconductor-svaplsseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svaplsseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svaplsseq/meta.yaml>`_
   :links: biotools: :biotools:`svaplsseq`, doi: :doi:`10.1101/062125`

   


.. conda:package:: bioconductor-svaplsseq

   |downloads_bioconductor-svaplsseq| |docker_bioconductor-svaplsseq|

   :versions: 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-lmtest`  :conda:package:`r-pls`  

   :required~by: |required_by_bioconductor-svaplsseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-svaplsseq

   and update with::

      conda update bioconductor-svaplsseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-svaplsseq


.. |required_by_bioconductor-svaplsseq| conda:required_by:: bioconductor-svaplsseq
.. |downloads_bioconductor-svaplsseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svaplsseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-svaplsseq| image:: https://quay.io/repository/biocontainers/bioconductor-svaplsseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svaplsseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svaplsseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svaplsseq/README.html

