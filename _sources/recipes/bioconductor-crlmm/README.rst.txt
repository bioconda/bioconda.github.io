:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crlmm'
.. highlight: bash

bioconductor-crlmm
==================

.. conda:recipe:: bioconductor-crlmm
   :replaces_section_title:

   Faster implementation of CRLMM specific to SNP 5.0 and 6.0 arrays\, as well as a copy number tool specific to 5.0\, 6.0\, and Illumina platforms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/crlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-crlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crlmm/meta.yaml>`_
   :links: biotools: :biotools:`crlmm`

   


.. conda:package:: bioconductor-crlmm

   |downloads_bioconductor-crlmm| |docker_bioconductor-crlmm|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends bioconductor-affyio: >=1.52.0,<1.53.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-illuminaio: >=0.24.0,<0.25.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   :depends bioconductor-snpchip: >=2.28.0,<2.29.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-beanplot: 
   :depends r-ellipse: 
   :depends r-ff: 
   :depends r-foreach: 
   :depends r-lattice: 
   :depends r-matrixstats: 
   :depends r-mvtnorm: 
   :depends r-rcppeigen: >=0.3.1.2.1
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crlmm

   and update with::

      conda update bioconductor-crlmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crlmm:<tag>

   (see `bioconductor-crlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crlmm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-crlmm| image:: https://quay.io/repository/biocontainers/bioconductor-crlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crlmm
.. _`bioconductor-crlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-crlmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crlmm/README.html