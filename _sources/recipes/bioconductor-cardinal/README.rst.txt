:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cardinal'
.. highlight: bash

bioconductor-cardinal
=====================

.. conda:recipe:: bioconductor-cardinal
   :replaces_section_title:

   Implements statistical \& computational tools for analyzing mass spectrometry imaging datasets\, including methods for efficient pre\-processing\, spatial segmentation\, and classification.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Cardinal.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cardinal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinal/meta.yaml>`_
   :links: biotools: :biotools:`cardinal`

   


.. conda:package:: bioconductor-cardinal

   |downloads_bioconductor-cardinal| |docker_bioconductor-cardinal|

   :versions: 2.0.4-0, 2.0.2-0, 1.12.1-1, 1.12.1-0, 1.10.0-0, 1.8.0-0, 1.7.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-ebimage: >=4.24.0,<4.25.0
   :depends bioconductor-matter: >=1.8.0,<1.9.0
   :depends bioconductor-protgenerics: >=1.14.0,<1.15.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-irlba: 
   :depends r-lattice: 
   :depends r-magrittr: 
   :depends r-signal: 
   :depends r-sp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cardinal

   and update with::

      conda update bioconductor-cardinal

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cardinal:<tag>

   (see `bioconductor-cardinal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cardinal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardinal.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cardinal| image:: https://quay.io/repository/biocontainers/bioconductor-cardinal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardinal
.. _`bioconductor-cardinal/tags`: https://quay.io/repository/biocontainers/bioconductor-cardinal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardinal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardinal/README.html