:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topdownr'
.. highlight: bash

bioconductor-topdownr
=====================

.. conda:recipe:: bioconductor-topdownr
   :replaces_section_title:

   The topdownr package allows automatic and systemic investigation of fragment conditions. It creates Thermo Orbitrap Fusion Lumos method files to test hundreds of fragmentation conditions. Additionally it provides functions to analyse and process the generated MS data and determine the best conditions to maximise overall fragment coverage.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/topdownr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-topdownr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownr/meta.yaml>`_

   


.. conda:package:: bioconductor-topdownr

   |downloads_bioconductor-topdownr| |docker_bioconductor-topdownr|

   :versions: 1.4.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-msnbase: >=2.8.0,<2.9.0
   
   :depends bioconductor-mzr: >=2.16.0,<2.17.0
   
   :depends bioconductor-protgenerics: >=1.14.0,<1.15.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: >=2.2.1
   
   :depends r-matrix: >=1.2.10
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-topdownr

   and update with::

      conda update bioconductor-topdownr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topdownr:<tag>

   (see `bioconductor-topdownr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topdownr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topdownr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-topdownr| image:: https://quay.io/repository/biocontainers/bioconductor-topdownr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topdownr
.. _`bioconductor-topdownr/tags`: https://quay.io/repository/biocontainers/bioconductor-topdownr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topdownr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topdownr/README.html