:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fem'
.. highlight: bash

bioconductor-fem
================

.. conda:recipe:: bioconductor-fem
   :replaces_section_title:

   The FEM package performs a systems\-level integrative analysis of DNA methylation and gene expression data. It seeks modules of functionally related genes which exhibit differential promoter DNA methylation and differential expression\, where an inverse association between promoter DNA methylation and gene expression is assumed. For full details\, see Jiao et al Bioinformatics 2014.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/FEM.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-fem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fem/meta.yaml>`_

   


.. conda:package:: bioconductor-fem

   |downloads_bioconductor-fem| |docker_bioconductor-fem|

   :versions: 3.14.0-0, 3.12.0-1, 3.10.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-impute: >=1.60.0,<1.61.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-marray: >=1.64.0,<1.65.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-corrplot: 
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fem

   and update with::

      conda update bioconductor-fem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fem:<tag>

   (see `bioconductor-fem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fem
   :alt:   (downloads)
.. |docker_bioconductor-fem| image:: https://quay.io/repository/biocontainers/bioconductor-fem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fem
.. _`bioconductor-fem/tags`: https://quay.io/repository/biocontainers/bioconductor-fem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fem/README.html