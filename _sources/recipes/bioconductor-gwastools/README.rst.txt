:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwastools'
.. highlight: bash

bioconductor-gwastools
======================

.. conda:recipe:: bioconductor-gwastools
   :replaces_section_title:

   Classes for storing very large GWAS data sets and annotation\, and functions for GWAS data cleaning and analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GWASTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gwastools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwastools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwastools/meta.yaml>`_

   


.. conda:package:: bioconductor-gwastools

   |downloads_bioconductor-gwastools| |docker_bioconductor-gwastools|

   :versions: 1.28.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   :depends bioconductor-gdsfmt: >=1.18.0,<1.19.0
   :depends bioconductor-quantsmooth: >=1.48.0,<1.49.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dbi: 
   :depends r-gwasexacthw: 
   :depends r-lmtest: 
   :depends r-logistf: 
   :depends r-rsqlite: 
   :depends r-sandwich: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gwastools

   and update with::

      conda update bioconductor-gwastools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwastools:<tag>

   (see `bioconductor-gwastools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwastools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwastools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gwastools| image:: https://quay.io/repository/biocontainers/bioconductor-gwastools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwastools
.. _`bioconductor-gwastools/tags`: https://quay.io/repository/biocontainers/bioconductor-gwastools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwastools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwastools/README.html