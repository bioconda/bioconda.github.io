:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xbseq'
.. highlight: bash

bioconductor-xbseq
==================

.. conda:recipe:: bioconductor-xbseq
   :replaces_section_title:

   We developed a novel algorithm\, XBSeq\, where a statistical model was established based on the assumption that observed signals are the convolution of true expression signals and sequencing noises. The mapped reads in non\-exonic regions are considered as sequencing noises\, which follows a Poisson distribution. Given measureable observed and noise signals from RNA\-seq data\, true expression signals\, assuming governed by the negative binomial distribution\, can be delineated and thus the accurate detection of differential expressed genes.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/XBSeq.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-xbseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xbseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xbseq/meta.yaml>`_
   :links: biotools: :biotools:`xbseq`, doi: :doi:`10.1186/1471-2164-16-S7-S14`

   


.. conda:package:: bioconductor-xbseq

   |downloads_bioconductor-xbseq| |docker_bioconductor-xbseq|

   :versions: 1.14.0-0, 1.12.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   :depends bioconductor-roar: >=1.18.0,<1.19.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-locfit: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-pracma: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xbseq

   and update with::

      conda update bioconductor-xbseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xbseq:<tag>

   (see `bioconductor-xbseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xbseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xbseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xbseq
   :alt:   (downloads)
.. |docker_bioconductor-xbseq| image:: https://quay.io/repository/biocontainers/bioconductor-xbseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xbseq
.. _`bioconductor-xbseq/tags`: https://quay.io/repository/biocontainers/bioconductor-xbseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xbseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xbseq/README.html