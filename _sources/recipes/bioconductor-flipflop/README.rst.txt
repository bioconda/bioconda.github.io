:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flipflop'
.. highlight: bash

bioconductor-flipflop
=====================

.. conda:recipe:: bioconductor-flipflop
   :replaces_section_title:

   Flipflop discovers which isoforms of a gene are expressed in a given sample together with their abundances\, based on RNA\-Seq read data. It takes an alignment file in SAM format as input. It can also discover transcripts from several samples simultaneously\, increasing statistical power.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flipflop.html
   :license: GPL-3
   :recipe: /`bioconductor-flipflop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flipflop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flipflop/meta.yaml>`_
   :links: biotools: :biotools:`flipflop`

   


.. conda:package:: bioconductor-flipflop

   |downloads_bioconductor-flipflop| |docker_bioconductor-flipflop|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.1-0
   
   :depends bioconductor-genomicranges: >=1.32.7,<1.34.0
   
   :depends bioconductor-iranges: >=2.14.12,<2.16.0
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-matrix: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flipflop

   and update with::

      conda update bioconductor-flipflop

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flipflop:<tag>

   (see `bioconductor-flipflop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flipflop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flipflop.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flipflop| image:: https://quay.io/repository/biocontainers/bioconductor-flipflop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flipflop
.. _`bioconductor-flipflop/tags`: https://quay.io/repository/biocontainers/bioconductor-flipflop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flipflop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flipflop/README.html