:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nastiseq'
.. highlight: bash

r-nastiseq
==========

.. conda:recipe:: r-nastiseq
   :replaces_section_title:

   Pairs of RNA molecules transcribed from partially or entirely complementary loci are called cis\-natural antisense transcripts \(cis\-NATs\)\, and they play key roles in the regulation of gene expression in many organisms. A promising experimental tool for profiling sense and antisense transcription is strand\-specific RNA sequencing \(ssRNA\-seq\). To identify cis\-NATs using ssRNA\-seq\, we developed a new computational method based on model comparison that incorporates the inherent variable efficiency of generating perfectly strand\-specific libraries. Applying the method to new ssRNA\-seq data from whole root and cell\-type specific Arabidopsis libraries confirmed most of the known cis\-NAT pairs and identified hundreds of additional cis\-NAT pairs.

   :homepage: https://ohlerlab.mdc-berlin.de/software/NASTIseq_104/
   :license: GPL-2.0
   :recipe: /`r-nastiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nastiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nastiseq/meta.yaml>`_
   :links: biotools: :biotools:`nastiseq`, doi: :doi:`10.1101/gr.149310.112`

   


.. conda:package:: r-nastiseq

   |downloads_r-nastiseq| |docker_r-nastiseq|

   :versions: 1.0-0
   
   :depends bioconductor-deseq: 
   :depends r: 3.3.1*
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nastiseq

   and update with::

      conda update r-nastiseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-nastiseq:<tag>

   (see `r-nastiseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nastiseq| image:: https://img.shields.io/conda/dn/bioconda/r-nastiseq.svg?style=flat
   :alt:   (downloads)
.. |docker_r-nastiseq| image:: https://quay.io/repository/biocontainers/r-nastiseq/status
   :target: https://quay.io/repository/biocontainers/r-nastiseq
.. _`r-nastiseq/tags`: https://quay.io/repository/biocontainers/r-nastiseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nastiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nastiseq/README.html