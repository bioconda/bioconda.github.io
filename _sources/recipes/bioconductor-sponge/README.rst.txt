:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sponge'
.. highlight: bash

bioconductor-sponge
===================

.. conda:recipe:: bioconductor-sponge
   :replaces_section_title:
   :noindex:

   Sparse Partial Correlations On Gene Expression

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SPONGE.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-sponge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sponge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sponge/meta.yaml>`_

   This package provides methods to efficiently detect competitive endogeneous RNA interactions between two genes. Such interactions are mediated by one or several miRNAs such that both gene and miRNA expression data for a larger number of samples is needed as input.


.. conda:package:: bioconductor-sponge

   |downloads_bioconductor-sponge| |docker_bioconductor-sponge|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dorng: 
   :depends r-expm: 
   :depends r-foreach: 
   :depends r-glmnet: 
   :depends r-grbase: 
   :depends r-igraph: 
   :depends r-iterators: 
   :depends r-logging: 
   :depends r-mass: 
   :depends r-ppcor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sponge

   and update with::

      conda update bioconductor-sponge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sponge:<tag>

   (see `bioconductor-sponge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sponge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sponge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sponge
   :alt:   (downloads)
.. |docker_bioconductor-sponge| image:: https://quay.io/repository/biocontainers/bioconductor-sponge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sponge
.. _`bioconductor-sponge/tags`: https://quay.io/repository/biocontainers/bioconductor-sponge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sponge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sponge/README.html