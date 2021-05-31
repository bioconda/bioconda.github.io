:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.methylation'
.. highlight: bash

bioconductor-rtcga.methylation
==============================

.. conda:recipe:: bioconductor-rtcga.methylation
   :replaces_section_title:
   :noindex:

   Methylation datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/RTCGA.methylation.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.methylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.methylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.methylation/meta.yaml>`_

   Package provides methylation \(humanmethylation27\) datasets from The Cancer Genome Atlas Project for all available cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/DNA\+methylation Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.methylation

   |downloads_bioconductor-rtcga.methylation| |docker_bioconductor-rtcga.methylation|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-rtcga: ``>=1.22.0,<1.23.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.methylation

   and update with::

      conda update bioconductor-rtcga.methylation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.methylation:<tag>

   (see `bioconductor-rtcga.methylation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.methylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.methylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.methylation
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.methylation| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.methylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.methylation
.. _`bioconductor-rtcga.methylation/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.methylation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.methylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.methylation/README.html