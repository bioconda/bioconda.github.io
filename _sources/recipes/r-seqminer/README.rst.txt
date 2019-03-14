:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seqminer'
.. highlight: bash

r-seqminer
==========

.. conda:recipe:: r-seqminer
   :replaces_section_title:

   Integrate sequencing data \(Variant call format\, e.g. VCF or BCF\) or meta\-analysis results in R. This package can help you \(1\) read VCF\/BCF files by chromosomal ranges \(e.g. 1\:100\-200\)\; \(2\) read RareMETAL summary statistics files\; \(3\) read tables from a tabix\-indexed files\; \(4\) annotate VCF\/BCF files\; \(5\) create customized workflow based on Makefile.

   :homepage: http://seqminer.genomic.codes
   :license: GPL / GPL
   :recipe: /`r-seqminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqminer/meta.yaml>`_

   


.. conda:package:: r-seqminer

   |downloads_r-seqminer| |docker_r-seqminer|

   :versions: 6.1-2, 6.1-1, 6.1-0, 6.0-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-seqminer

   and update with::

      conda update r-seqminer

   or use the docker container::

      docker pull quay.io/biocontainers/r-seqminer:<tag>

   (see `r-seqminer/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seqminer| image:: https://img.shields.io/conda/dn/bioconda/r-seqminer.svg?style=flat
   :alt:   (downloads)
.. |docker_r-seqminer| image:: https://quay.io/repository/biocontainers/r-seqminer/status
   :target: https://quay.io/repository/biocontainers/r-seqminer
.. _`r-seqminer/tags`: https://quay.io/repository/biocontainers/r-seqminer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seqminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seqminer/README.html