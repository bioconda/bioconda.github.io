:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variantexperiment'
.. highlight: bash

bioconductor-variantexperiment
==============================

.. conda:recipe:: bioconductor-variantexperiment
   :replaces_section_title:
   :noindex:

   A RangedSummarizedExperiment Container for VCF\/GDS Data with GDS Backend

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/VariantExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-variantexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantexperiment/meta.yaml>`_

   VariantExperiment is a Bioconductor package for saving data in VCF\/GDS format into RangedSummarizedExperiment object. The high\-throughput genetic\/genomic data are saved in GDSArray objects. The annotation data for features\/samples are saved in DelayedDataFrame format with mono\-dimensional GDSArray in each column. The on\-disk representation of both assay data and annotation data achieves on\-disk reading and processing and saves memory space significantly. The interface of RangedSummarizedExperiment data format enables easy and common manipulations for high\-throughput genetic\/genomic data with common SummarizedExperiment metaphor in R and Bioconductor.


.. conda:package:: bioconductor-variantexperiment

   |downloads_bioconductor-variantexperiment| |docker_bioconductor-variantexperiment|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayeddataframe: ``>=1.8.0,<1.9.0``
   :depends bioconductor-gdsarray: ``>=1.12.0,<1.13.0``
   :depends bioconductor-gdsfmt: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-seqarray: ``>=1.32.0,<1.33.0``
   :depends bioconductor-seqvartools: ``>=1.30.0,<1.31.0``
   :depends bioconductor-snprelate: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-variantexperiment

   and update with::

      conda update bioconductor-variantexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-variantexperiment:<tag>

   (see `bioconductor-variantexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-variantexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variantexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variantexperiment
   :alt:   (downloads)
.. |docker_bioconductor-variantexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-variantexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variantexperiment
.. _`bioconductor-variantexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-variantexperiment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variantexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variantexperiment/README.html