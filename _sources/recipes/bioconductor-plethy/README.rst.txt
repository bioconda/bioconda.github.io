:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plethy'
.. highlight: bash

bioconductor-plethy
===================

.. conda:recipe:: bioconductor-plethy
   :replaces_section_title:

   This package provides the infrastructure and tools to import\, query and perform basic analysis of whole body plethysmography and metabolism data.  Currently support is limited to data derived from Buxco respirometry instruments as exported by their FinePointe software.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/plethy.html
   :license: GPL-3
   :recipe: /`bioconductor-plethy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plethy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plethy/meta.yaml>`_
   :links: biotools: :biotools:`plethy`, doi: :doi:`10.1186/s12859-015-0547-7`

   


.. conda:package:: bioconductor-plethy

   |downloads_bioconductor-plethy| |docker_bioconductor-plethy|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-streamer: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: >=0.5-1
   
   :depends r-ggplot2: 
   
   :depends r-plyr: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-reshape2: 
   
   :depends r-rsqlite: >=1.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plethy

   and update with::

      conda update bioconductor-plethy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-plethy:<tag>

   (see `bioconductor-plethy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plethy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plethy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-plethy| image:: https://quay.io/repository/biocontainers/bioconductor-plethy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plethy
.. _`bioconductor-plethy/tags`: https://quay.io/repository/biocontainers/bioconductor-plethy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plethy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plethy/README.html