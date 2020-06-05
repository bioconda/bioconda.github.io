:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scclassify'
.. highlight: bash

bioconductor-scclassify
=======================

.. conda:recipe:: bioconductor-scclassify
   :replaces_section_title:
   :noindex:

   scClassify\: single\-cell Hierarchical Classification

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/scClassify.html
   :license: GPL-3
   :recipe: /`bioconductor-scclassify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassify/meta.yaml>`_

   scClassify is a multiscale classification framework for single\-cell RNA\-seq data based on ensemble learning and cell type hierarchies\, enabling sample size estimation required for accurate cell type classification and joint classification of cells using multiple references.


.. conda:package:: bioconductor-scclassify

   |downloads_bioconductor-scclassify| |docker_bioconductor-scclassify|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-hopach: ``>=2.48.0,<2.49.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-diptest: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-minpack.lm: 
   :depends r-mixtools: 
   :depends r-proxy: 
   :depends r-proxyc: 
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scclassify

   and update with::

      conda update bioconductor-scclassify

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scclassify:<tag>

   (see `bioconductor-scclassify/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scclassify| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scclassify.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scclassify
   :alt:   (downloads)
.. |docker_bioconductor-scclassify| image:: https://quay.io/repository/biocontainers/bioconductor-scclassify/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scclassify
.. _`bioconductor-scclassify/tags`: https://quay.io/repository/biocontainers/bioconductor-scclassify?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scclassify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scclassify/README.html