:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmappr2data'
.. highlight: bash

bioconductor-mmappr2data
========================

.. conda:recipe:: bioconductor-mmappr2data
   :replaces_section_title:

   Sample Data for MMAPPR2

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/MMAPPR2data.html
   :license: GPL-3
   :recipe: /`bioconductor-mmappr2data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2data/meta.yaml>`_

   Contains data for illustration purposes in the MMAPPR2 package\, namely simulated BAM files containing RNA\-Seq data for a mutation in the slc24a5 gene\, taken from the GRCz11 genome. Also contains reference sequence and annotation files for the region.


.. conda:package:: bioconductor-mmappr2data

   |downloads_bioconductor-mmappr2data| |docker_bioconductor-mmappr2data|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmappr2data

   and update with::

      conda update bioconductor-mmappr2data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmappr2data:<tag>

   (see `bioconductor-mmappr2data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmappr2data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmappr2data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmappr2data
   :alt:   (downloads)
.. |docker_bioconductor-mmappr2data| image:: https://quay.io/repository/biocontainers/bioconductor-mmappr2data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmappr2data
.. _`bioconductor-mmappr2data/tags`: https://quay.io/repository/biocontainers/bioconductor-mmappr2data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmappr2data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmappr2data/README.html