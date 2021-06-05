:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interest'
.. highlight: bash

bioconductor-interest
=====================

.. conda:recipe:: bioconductor-interest
   :replaces_section_title:
   :noindex:

   Intron\-Exon Retention Estimator

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/IntEREst.html
   :license: GPL-2
   :recipe: /`bioconductor-interest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interest/meta.yaml>`_
   :links: doi: :doi:`10.18129/B9.bioc.IntEREst`

   This package performs Intron\-Exon Retention analysis on RNA\-seq data \(.bam files\).


.. conda:package:: bioconductor-interest

   |downloads_bioconductor-interest| |docker_bioconductor-interest|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.2-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-dexseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-seqlogo: ``>=1.58.0,<1.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-rmysql: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interest

   and update with::

      conda update bioconductor-interest

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interest:<tag>

   (see `bioconductor-interest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interest
   :alt:   (downloads)
.. |docker_bioconductor-interest| image:: https://quay.io/repository/biocontainers/bioconductor-interest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interest
.. _`bioconductor-interest/tags`: https://quay.io/repository/biocontainers/bioconductor-interest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interest/README.html