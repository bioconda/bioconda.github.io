:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.mirnaseq'
.. highlight: bash

bioconductor-rtcga.mirnaseq
===========================

.. conda:recipe:: bioconductor-rtcga.mirnaseq
   :replaces_section_title:

   miRNASeq datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/RTCGA.miRNASeq.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.mirnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mirnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mirnaseq/meta.yaml>`_

   Package provides miRNASeq datasets from The Cancer Genome Atlas Project for all available cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/miRNASeq\#miRNASeq\-DataOverview Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.mirnaseq

   |downloads_bioconductor-rtcga.mirnaseq| |docker_bioconductor-rtcga.mirnaseq|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-1, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-rtcga: >=1.18.0,<1.19.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.mirnaseq

   and update with::

      conda update bioconductor-rtcga.mirnaseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.mirnaseq:<tag>

   (see `bioconductor-rtcga.mirnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.mirnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.mirnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.mirnaseq
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.mirnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.mirnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.mirnaseq
.. _`bioconductor-rtcga.mirnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.mirnaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.mirnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.mirnaseq/README.html