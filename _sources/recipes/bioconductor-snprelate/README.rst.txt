:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snprelate'
.. highlight: bash

bioconductor-snprelate
======================

.. conda:recipe:: bioconductor-snprelate
   :replaces_section_title:

   Genome\-wide association studies \(GWAS\) are widely used to investigate the genetic basis of diseases and traits\, but they pose many computational challenges. We developed an R package SNPRelate to provide a binary format for single\-nucleotide polymorphism \(SNP\) data in GWAS utilizing CoreArray Genomic Data Structure \(GDS\) data files. The GDS format offers the efficient operations specifically designed for integers with two bits\, since a SNP could occupy only two bits. SNPRelate is also designed to accelerate two key computations on SNP data using parallel computing for multi\-core symmetric multiprocessing computer architectures\: Principal Component Analysis \(PCA\) and relatedness analysis using Identity\-By\-Descent measures. The SNP GDS format is also used by the GWASTools package with the support of S4 classes and generic functions. The extended GDS format is implemented in the SeqArray package to support the storage of single nucleotide variations \(SNVs\)\, insertion\/deletion polymorphism \(indel\) and structural variation calls.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SNPRelate.html
   :license: GPL-3
   :recipe: /`bioconductor-snprelate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snprelate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snprelate/meta.yaml>`_

   


.. conda:package:: bioconductor-snprelate

   |downloads_bioconductor-snprelate| |docker_bioconductor-snprelate|

   :versions: 1.18.1-0, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.2-0
   
   :depends bioconductor-gdsfmt: >=1.20.0,<1.21.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snprelate

   and update with::

      conda update bioconductor-snprelate

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snprelate:<tag>

   (see `bioconductor-snprelate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snprelate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snprelate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snprelate
   :alt:   (downloads)
.. |docker_bioconductor-snprelate| image:: https://quay.io/repository/biocontainers/bioconductor-snprelate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snprelate
.. _`bioconductor-snprelate/tags`: https://quay.io/repository/biocontainers/bioconductor-snprelate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snprelate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snprelate/README.html