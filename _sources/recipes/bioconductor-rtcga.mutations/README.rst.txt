:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.mutations'
.. highlight: bash

bioconductor-rtcga.mutations
============================

.. conda:recipe:: bioconductor-rtcga.mutations
   :replaces_section_title:

   Package provides mutations datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Mutations data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Mutation\+Annotation\+Format\+\(MAF\)\+Specification. There is extra one column with patients\' barcodes. Data from 2015\-11\-01 snapshot.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/RTCGA.mutations.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.mutations <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mutations>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mutations/meta.yaml>`_

   


.. conda:package:: bioconductor-rtcga.mutations

   |downloads_bioconductor-rtcga.mutations| |docker_bioconductor-rtcga.mutations|

   :versions: 20151101.15.0-0, 20151101.14.0-1, 20151101.14.0-0, 20151101.12.0-0
   
   :depends bioconductor-rtcga: >=1.16.0,<1.17.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.mutations

   and update with::

      conda update bioconductor-rtcga.mutations

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.mutations:<tag>

   (see `bioconductor-rtcga.mutations/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.mutations| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.mutations.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.mutations
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.mutations| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.mutations/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.mutations
.. _`bioconductor-rtcga.mutations/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.mutations?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.mutations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.mutations/README.html