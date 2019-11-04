:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mast'
.. highlight: bash

bioconductor-mast
=================

.. conda:recipe:: bioconductor-mast
   :replaces_section_title:

   Methods and models for handling zero\-inflated single cell assay data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MAST.html
   :license: GPL(>= 2)
   :recipe: /`bioconductor-mast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mast/meta.yaml>`_
   :links: biotools: :biotools:`mast`, doi: :doi:`10.1186/s13059-015-0844-5`

   


.. conda:package:: bioconductor-mast

   |downloads_bioconductor-mast| |docker_bioconductor-mast|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.1-0, 1.6.1-0, 1.4.1-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-singlecellexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-abind: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mast

   and update with::

      conda update bioconductor-mast

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mast:<tag>

   (see `bioconductor-mast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mast
   :alt:   (downloads)
.. |docker_bioconductor-mast| image:: https://quay.io/repository/biocontainers/bioconductor-mast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mast
.. _`bioconductor-mast/tags`: https://quay.io/repository/biocontainers/bioconductor-mast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mast/README.html