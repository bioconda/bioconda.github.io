:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snpchip'
.. highlight: bash

bioconductor-snpchip
====================

.. conda:recipe:: bioconductor-snpchip
   :replaces_section_title:

   Visualizations for copy number alterations

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/SNPchip.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-snpchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpchip/meta.yaml>`_
   :links: biotools: :biotools:`snpchip`

   Functions for plotting SNP array data\; maintained for historical reasons


.. conda:package:: bioconductor-snpchip

   |downloads_bioconductor-snpchip| |docker_bioconductor-snpchip|

   :versions: 2.32.0-0, 2.30.0-1, 2.28.0-0, 2.26.0-0, 2.24.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-oligoclasses: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-foreach: 
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snpchip

   and update with::

      conda update bioconductor-snpchip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snpchip:<tag>

   (see `bioconductor-snpchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snpchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snpchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snpchip
   :alt:   (downloads)
.. |docker_bioconductor-snpchip| image:: https://quay.io/repository/biocontainers/bioconductor-snpchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snpchip
.. _`bioconductor-snpchip/tags`: https://quay.io/repository/biocontainers/bioconductor-snpchip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snpchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snpchip/README.html