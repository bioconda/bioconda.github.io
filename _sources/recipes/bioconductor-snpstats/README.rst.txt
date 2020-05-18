:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snpstats'
.. highlight: bash

bioconductor-snpstats
=====================

.. conda:recipe:: bioconductor-snpstats
   :replaces_section_title:

   SnpMatrix and XSnpMatrix classes and methods

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/snpStats.html
   :license: GPL-3
   :recipe: /`bioconductor-snpstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpstats/meta.yaml>`_
   :links: biotools: :biotools:`snpstats`, doi: :doi:`10.1038/nmeth.3252`

   Classes and statistical methods for large SNP association studies. This extends the earlier snpMatrix package\, allowing for uncertainty in genotypes.


.. conda:package:: bioconductor-snpstats

   |downloads_bioconductor-snpstats| |docker_bioconductor-snpstats|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-1, 1.32.0-0, 1.30.0-0, 1.28.0-1, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-zlibbioc: >=1.34.0,<1.35.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-matrix: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snpstats

   and update with::

      conda update bioconductor-snpstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snpstats:<tag>

   (see `bioconductor-snpstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snpstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snpstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snpstats
   :alt:   (downloads)
.. |docker_bioconductor-snpstats| image:: https://quay.io/repository/biocontainers/bioconductor-snpstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snpstats
.. _`bioconductor-snpstats/tags`: https://quay.io/repository/biocontainers/bioconductor-snpstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snpstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snpstats/README.html