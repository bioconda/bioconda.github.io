:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.cnv'
.. highlight: bash

bioconductor-rtcga.cnv
======================

.. conda:recipe:: bioconductor-rtcga.cnv
   :replaces_section_title:

   Package provides CNV \(based on Merge snp\) datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Retrieving \+Data\+Using\+the\+Data\+Matrix. Data from 2015\-11\-01 snapshot.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RTCGA.CNV.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.cnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.cnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.cnv/meta.yaml>`_

   


.. conda:package:: bioconductor-rtcga.cnv

   |downloads_bioconductor-rtcga.cnv| |docker_bioconductor-rtcga.cnv|

   :versions: 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-rtcga: >=1.14.0,<1.15.0
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.cnv

   and update with::

      conda update bioconductor-rtcga.cnv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.cnv:<tag>

   (see `bioconductor-rtcga.cnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.cnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.cnv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.cnv
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.cnv| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.cnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.cnv
.. _`bioconductor-rtcga.cnv/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.cnv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.cnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.cnv/README.html