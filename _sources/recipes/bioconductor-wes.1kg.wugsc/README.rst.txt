:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wes.1kg.wugsc'
.. highlight: bash

bioconductor-wes.1kg.wugsc
==========================

.. conda:recipe:: bioconductor-wes.1kg.wugsc
   :replaces_section_title:

   The assembled .bam files of whole exome sequencing data from the 1000 Genomes Project. 46 samples sequenced by the Washington University Genome Sequencing Center are included.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/WES.1KG.WUGSC.html
   :license: GPL-2
   :recipe: /`bioconductor-wes.1kg.wugsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wes.1kg.wugsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wes.1kg.wugsc/meta.yaml>`_

   


.. conda:package:: bioconductor-wes.1kg.wugsc

   |downloads_bioconductor-wes.1kg.wugsc| |docker_bioconductor-wes.1kg.wugsc|

   :versions: 1.16.0-0, 1.14.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wes.1kg.wugsc

   and update with::

      conda update bioconductor-wes.1kg.wugsc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wes.1kg.wugsc:<tag>

   (see `bioconductor-wes.1kg.wugsc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wes.1kg.wugsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wes.1kg.wugsc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wes.1kg.wugsc
   :alt:   (downloads)
.. |docker_bioconductor-wes.1kg.wugsc| image:: https://quay.io/repository/biocontainers/bioconductor-wes.1kg.wugsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wes.1kg.wugsc
.. _`bioconductor-wes.1kg.wugsc/tags`: https://quay.io/repository/biocontainers/bioconductor-wes.1kg.wugsc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wes.1kg.wugsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wes.1kg.wugsc/README.html