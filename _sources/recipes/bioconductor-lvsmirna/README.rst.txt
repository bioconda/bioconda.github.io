:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lvsmirna'
.. highlight: bash

bioconductor-lvsmirna
=====================

.. conda:recipe:: bioconductor-lvsmirna
   :replaces_section_title:

   Normalization of Agilent miRNA arrays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LVSmiRNA.html
   :license: GPL-2
   :recipe: /`bioconductor-lvsmirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lvsmirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lvsmirna/meta.yaml>`_
   :links: biotools: :biotools:`lvsmirna`, doi: :doi:`10.1261/rna.2345710`

   


.. conda:package:: bioconductor-lvsmirna

   |downloads_bioconductor-lvsmirna| |docker_bioconductor-lvsmirna|

   :versions: 1.32.0-0, 1.30.0-0, 1.28.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-vsn: >=3.50.0,<3.51.0
   
   :depends bioconductor-zlibbioc: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-mass: 
   
   :depends r-quantreg: 
   
   :depends r-sparsem: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lvsmirna

   and update with::

      conda update bioconductor-lvsmirna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lvsmirna:<tag>

   (see `bioconductor-lvsmirna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lvsmirna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lvsmirna.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lvsmirna| image:: https://quay.io/repository/biocontainers/bioconductor-lvsmirna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lvsmirna
.. _`bioconductor-lvsmirna/tags`: https://quay.io/repository/biocontainers/bioconductor-lvsmirna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lvsmirna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lvsmirna/README.html