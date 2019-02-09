.. title:: Package Recipe 'bioconductor-cn.farms'
.. highlight: bash


bioconductor-cn.farms
=====================

.. conda:recipe:: bioconductor-cn.farms
   :replaces_section_title:

   This package implements the cn.FARMS algorithm for copy number variation \(CNV\) analysis. cn.FARMS allows to analyze the most common Affymetrix \(250K\-SNP6.0\) array types\, supports high\-performance computing using snow and ff.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cn.farms.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-cn.farms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.farms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.farms/meta.yaml>`_
   :links: biotools: :biotools:`cn.farms`, doi: :doi:`10.1093/nar/gkr197`

   


.. conda:package:: bioconductor-cn.farms

   |downloads_bioconductor-cn.farms| |docker_bioconductor-cn.farms|

   :versions: 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`bioconductor-affxparser` >=1.54.0,<1.55.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-oligo` >=1.46.0,<1.47.0 :conda:package:`bioconductor-oligoclasses` >=1.44.0,<1.45.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-ff`  :conda:package:`r-lattice`  :conda:package:`r-snow`  

   :required~by: |required_by_bioconductor-cn.farms|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cn.farms

   and update with::

      conda update bioconductor-cn.farms

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cn.farms


.. |required_by_bioconductor-cn.farms| conda:required_by:: bioconductor-cn.farms
.. |downloads_bioconductor-cn.farms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cn.farms.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cn.farms| image:: https://quay.io/repository/biocontainers/bioconductor-cn.farms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cn.farms







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cn.farms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cn.farms/README.html

