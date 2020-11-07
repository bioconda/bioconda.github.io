:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosim'
.. highlight: bash

bioconductor-gosim
==================

.. conda:recipe:: bioconductor-gosim
   :replaces_section_title:
   :noindex:

   Computation of functional similarities between GO terms and gene products\; GO enrichment analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GOSim.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosim/meta.yaml>`_

   This package implements several functions useful for computing similarities between GO terms and gene products based on their GO annotation. Moreover it allows for computing a GO enrichment analysis


.. conda:package:: bioconductor-gosim

   |downloads_bioconductor-gosim| |docker_bioconductor-gosim|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-go.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-rbgl: ``>=1.66.0,<1.67.0``
   :depends bioconductor-topgo: ``>=2.42.0,<2.43.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-corpcor: 
   :depends r-flexmix: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gosim

   and update with::

      conda update bioconductor-gosim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gosim:<tag>

   (see `bioconductor-gosim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gosim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosim
   :alt:   (downloads)
.. |docker_bioconductor-gosim| image:: https://quay.io/repository/biocontainers/bioconductor-gosim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosim
.. _`bioconductor-gosim/tags`: https://quay.io/repository/biocontainers/bioconductor-gosim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosim/README.html