:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biscuiteer'
.. highlight: bash

bioconductor-biscuiteer
=======================

.. conda:recipe:: bioconductor-biscuiteer
   :replaces_section_title:
   :noindex:

   Convenience Functions for Biscuit

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/biscuiteer.html
   :license: GPL-3
   :recipe: /`bioconductor-biscuiteer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteer/meta.yaml>`_

   A test harness for bsseq loading of Biscuit output\, summarization of WGBS data over defined regions and in mappable samples\, with or without imputation\, dropping of mostly\-NA rows\, age estimates\, etc.


.. conda:package:: bioconductor-biscuiteer

   |downloads_bioconductor-biscuiteer| |docker_bioconductor-biscuiteer|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biscuiteerdata: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.12.0,<1.13.0``
   :depends bioconductor-dmrseq: ``>=1.10.0,<1.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-hdf5array: ``>=1.18.0,<1.19.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-impute: ``>=1.64.0,<1.65.0``
   :depends bioconductor-mus.musculus: ``>=1.3.0,<1.4.0``
   :depends bioconductor-qdnaseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-variantannotation: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-gtools: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-qualv: 
   :depends r-r.utils: 
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biscuiteer

   and update with::

      conda update bioconductor-biscuiteer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biscuiteer:<tag>

   (see `bioconductor-biscuiteer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biscuiteer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biscuiteer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biscuiteer
   :alt:   (downloads)
.. |docker_bioconductor-biscuiteer| image:: https://quay.io/repository/biocontainers/bioconductor-biscuiteer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biscuiteer
.. _`bioconductor-biscuiteer/tags`: https://quay.io/repository/biocontainers/bioconductor-biscuiteer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biscuiteer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biscuiteer/README.html