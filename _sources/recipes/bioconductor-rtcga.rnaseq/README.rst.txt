:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.rnaseq'
.. highlight: bash

bioconductor-rtcga.rnaseq
=========================

.. conda:recipe:: bioconductor-rtcga.rnaseq
   :replaces_section_title:
   :noindex:

   Rna\-seq datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/RTCGA.rnaseq.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.rnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rnaseq/meta.yaml>`_

   Package provides rna\-seq datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Rna\-seq data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/RNASeq\+Version\+2. Data source is illumina hiseq Level 3 RSEM normalized expression data. Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.rnaseq

   |downloads_bioconductor-rtcga.rnaseq| |docker_bioconductor-rtcga.rnaseq|

   :versions:
      
      

      ``20151101.20.0-0``,  ``20151101.19.0-0``,  ``20151101.18.0-0``,  ``20151101.16.0-0``,  ``20151101.14.0-1``,  ``20151101.14.0-0``,  ``20151101.12.0-0``

      

   
   :depends bioconductor-rtcga: ``>=1.20.0,<1.21.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.rnaseq

   and update with::

      conda update bioconductor-rtcga.rnaseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.rnaseq:<tag>

   (see `bioconductor-rtcga.rnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.rnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.rnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.rnaseq
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.rnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.rnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.rnaseq
.. _`bioconductor-rtcga.rnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.rnaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.rnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.rnaseq/README.html