:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wgsmapp'
.. highlight: bash

bioconductor-wgsmapp
====================

.. conda:recipe:: bioconductor-wgsmapp
   :replaces_section_title:

   Mappability tracks of Whole\-genome Sequencing from the ENCODE Project

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/WGSmapp.html
   :license: GPL-2
   :recipe: /`bioconductor-wgsmapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wgsmapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wgsmapp/meta.yaml>`_

   This package provides whole\-genome mappability tracks on human hg19\/hg38 assembly. We employed the 100\-mers mappability track from the ENCODE Project and computed weighted average of the mappability scores if multiple ENCODE regions overlap with the same bin. “Blacklist” bins\, including segmental duplication regions and gaps in reference assembly from telomere\, centromere\, and\/or heterochromatin regions are included. The dataset consists of three assembled .bam files of single\-cell whole genome sequencing from 10X for illustration purposes.


.. conda:package:: bioconductor-wgsmapp

   |downloads_bioconductor-wgsmapp| |docker_bioconductor-wgsmapp|

   :versions: 1.0.0-0
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wgsmapp

   and update with::

      conda update bioconductor-wgsmapp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wgsmapp:<tag>

   (see `bioconductor-wgsmapp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wgsmapp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wgsmapp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wgsmapp
   :alt:   (downloads)
.. |docker_bioconductor-wgsmapp| image:: https://quay.io/repository/biocontainers/bioconductor-wgsmapp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wgsmapp
.. _`bioconductor-wgsmapp/tags`: https://quay.io/repository/biocontainers/bioconductor-wgsmapp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wgsmapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wgsmapp/README.html