:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-samexplorer'
.. highlight: bash

bioconductor-samexplorer
========================

.. conda:recipe:: bioconductor-samexplorer
   :replaces_section_title:

   samExploreR package high\-performance read summarisation to count vectors with avaliability of sequencing depth reduction simulation

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/samExploreR.html
   :license: GPL-3
   :recipe: /`bioconductor-samexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-samexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-samexplorer/meta.yaml>`_

   This R package is designed for subsampling procedure to simulate sequencing experiments with reduced sequencing depth. This package can be used to anlayze data generated from all major sequencing platforms such as Illumina GA\, HiSeq\, MiSeq\, Roche GS\-FLX\, ABI SOLiD and LifeTech Ion PGM Proton sequencers. It supports multiple operating systems incluidng Linux\, Mac OS X\, FreeBSD and Solaris. Was developed with usage of Rsubread.


.. conda:package:: bioconductor-samexplorer

   |downloads_bioconductor-samexplorer| |docker_bioconductor-samexplorer|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.0-1, 1.8.0-0, 1.6.1-0, 1.6.0-0
   
   :depends bioconductor-edger: >=3.30.0,<3.31.0
   :depends bioconductor-rnaseqdata.hnrnpc.bam.chr14: >=0.26.0,<0.27.0
   :depends bioconductor-rsubread: >=2.2.0,<2.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-samexplorer

   and update with::

      conda update bioconductor-samexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-samexplorer:<tag>

   (see `bioconductor-samexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-samexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-samexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-samexplorer
   :alt:   (downloads)
.. |docker_bioconductor-samexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-samexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-samexplorer
.. _`bioconductor-samexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-samexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-samexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-samexplorer/README.html