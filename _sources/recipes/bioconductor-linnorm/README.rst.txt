:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linnorm'
.. highlight: bash

bioconductor-linnorm
====================

.. conda:recipe:: bioconductor-linnorm
   :replaces_section_title:
   :noindex:

   Linear model and normality based normalization and transformation method \(Linnorm\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/Linnorm.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-linnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm/meta.yaml>`_

   Linnorm is an algorithm for normalizing and transforming RNA\-seq\, single cell RNA\-seq\, ChIP\-seq count data or any large scale count data. It has been independently reviewed by Tian et al. on Nature Methods \(https\:\/\/doi.org\/10.1038\/s41592\-019\-0425\-8\). Linnorm can work with raw count\, CPM\, RPKM\, FPKM and TPM.


.. conda:package:: bioconductor-linnorm

   |downloads_bioconductor-linnorm| |docker_bioconductor-linnorm|

   :versions:
      
      

      ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.6.0-0``

      

   
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-amap: 
   :depends r-apcluster: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ellipse: 
   :depends r-fastcluster: 
   :depends r-fpc: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gmodels: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-rcpp: ``>=0.12.2``
   :depends r-rcpparmadillo: ``>=0.8.100.1.0``
   :depends r-rtsne: 
   :depends r-statmod: 
   :depends r-vegan: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-linnorm

   and update with::

      conda update bioconductor-linnorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-linnorm:<tag>

   (see `bioconductor-linnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-linnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-linnorm
   :alt:   (downloads)
.. |docker_bioconductor-linnorm| image:: https://quay.io/repository/biocontainers/bioconductor-linnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linnorm
.. _`bioconductor-linnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-linnorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linnorm/README.html