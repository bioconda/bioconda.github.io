:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celaref'
.. highlight: bash

bioconductor-celaref
====================

.. conda:recipe:: bioconductor-celaref
   :replaces_section_title:

   After the clustering step of a single\-cell RNAseq experiment\, this package aims to suggest labels\/cell types for the clusters\, on the basis of similarity to a reference dataset. It requires a table of read counts per cell per gene\, and a list of the cells belonging to each of the clusters\, \(for both test and reference data\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/celaref.html
   :license: GPL-3
   :recipe: /`bioconductor-celaref <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celaref>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celaref/meta.yaml>`_

   


.. conda:package:: bioconductor-celaref

   |downloads_bioconductor-celaref| |docker_bioconductor-celaref|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-mast: >=1.8.0,<1.9.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celaref

   and update with::

      conda update bioconductor-celaref

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celaref:<tag>

   (see `bioconductor-celaref/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celaref| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celaref.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celaref
   :alt:   (downloads)
.. |docker_bioconductor-celaref| image:: https://quay.io/repository/biocontainers/bioconductor-celaref/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celaref
.. _`bioconductor-celaref/tags`: https://quay.io/repository/biocontainers/bioconductor-celaref?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celaref/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celaref/README.html