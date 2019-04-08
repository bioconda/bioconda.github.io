:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nucler'
.. highlight: bash

bioconductor-nucler
===================

.. conda:recipe:: bioconductor-nucler
   :replaces_section_title:

   Nucleosome positioning for Tiling Arrays and NGS experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/nucleR.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-nucler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucler/meta.yaml>`_
   :links: biotools: :biotools:`nucler`

   


.. conda:package:: bioconductor-nucler

   |downloads_bioconductor-nucler| |docker_bioconductor-nucler|

   :versions: 2.14.0-0, 2.12.1-0, 2.10.0-0, 2.8.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-shortread: >=1.40.0,<1.41.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nucler

   and update with::

      conda update bioconductor-nucler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nucler:<tag>

   (see `bioconductor-nucler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nucler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nucler.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nucler| image:: https://quay.io/repository/biocontainers/bioconductor-nucler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nucler
.. _`bioconductor-nucler/tags`: https://quay.io/repository/biocontainers/bioconductor-nucler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nucler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nucler/README.html