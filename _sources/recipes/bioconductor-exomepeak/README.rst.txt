:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exomepeak'
.. highlight: bash

bioconductor-exomepeak
======================

.. conda:recipe:: bioconductor-exomepeak
   :replaces_section_title:

   The package is developed for the analysis of affinity\-based epitranscriptome shortgun sequencing data from MeRIP\-seq \(maA\-seq\). It was built on the basis of the exomePeak MATLAB package \(Meng\, Jia\, et al. \"Exome\-based analysis for RNA epigenome sequencing data.\" Bioinformatics 29.12 \(2013\)\: 1565\-1567.\) with new functions for differential analysis of two experimental conditions to unveil the dynamics in post\-transcriptional regulation of the RNA methylome. The exomePeak R\-package accepts and statistically supports multiple biological replicates\, internally removes PCR artifacts and multi\-mapping reads\, outputs exome\-based binding sites \(RNA methylation sites\) and detects differential post\-transcriptional RNA modification sites between two experimental conditions in term of percentage rather the absolute amount. The package is still under active development\, and we welcome all biology and computation scientist for all kinds of collaborations and communications. Please feel free to contact Dr. Jia Meng \<jia.meng\@hotmail.com\> if you have any questions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/exomePeak.html
   :license: GPL-2
   :recipe: /`bioconductor-exomepeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak/meta.yaml>`_
   :links: biotools: :biotools:`exomepeak`

   


.. conda:package:: bioconductor-exomepeak

   |downloads_bioconductor-exomepeak| |docker_bioconductor-exomepeak|

   :versions: 2.16.0-0, 2.14.0-0, 2.13.2-0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-exomepeak

   and update with::

      conda update bioconductor-exomepeak

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-exomepeak:<tag>

   (see `bioconductor-exomepeak/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-exomepeak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-exomepeak.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-exomepeak| image:: https://quay.io/repository/biocontainers/bioconductor-exomepeak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-exomepeak
.. _`bioconductor-exomepeak/tags`: https://quay.io/repository/biocontainers/bioconductor-exomepeak?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-exomepeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-exomepeak/README.html