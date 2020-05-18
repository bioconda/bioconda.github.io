:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cn.farms'
.. highlight: bash

bioconductor-cn.farms
=====================

.. conda:recipe:: bioconductor-cn.farms
   :replaces_section_title:

   cn.FARMS \- factor analysis for copy number estimation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cn.farms.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-cn.farms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.farms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.farms/meta.yaml>`_
   :links: biotools: :biotools:`cn.farms`, doi: :doi:`10.1093/nar/gkr197`

   This package implements the cn.FARMS algorithm for copy number variation \(CNV\) analysis. cn.FARMS allows to analyze the most common Affymetrix \(250K\-SNP6.0\) array types\, supports high\-performance computing using snow and ff.


.. conda:package:: bioconductor-cn.farms

   |downloads_bioconductor-cn.farms| |docker_bioconductor-cn.farms|

   :versions: 1.36.0-0, 1.34.0-0, 1.32.0-1, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-affxparser: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-dnacopy: >=1.62.0,<1.63.0
   :depends bioconductor-oligo: >=1.52.0,<1.53.0
   :depends bioconductor-oligoclasses: >=1.50.0,<1.51.0
   :depends bioconductor-preprocesscore: >=1.50.0,<1.51.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dbi: 
   :depends r-ff: 
   :depends r-lattice: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cn.farms

   and update with::

      conda update bioconductor-cn.farms

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cn.farms:<tag>

   (see `bioconductor-cn.farms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cn.farms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cn.farms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cn.farms
   :alt:   (downloads)
.. |docker_bioconductor-cn.farms| image:: https://quay.io/repository/biocontainers/bioconductor-cn.farms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cn.farms
.. _`bioconductor-cn.farms/tags`: https://quay.io/repository/biocontainers/bioconductor-cn.farms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cn.farms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cn.farms/README.html