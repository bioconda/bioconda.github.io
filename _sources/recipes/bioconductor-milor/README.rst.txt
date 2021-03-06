:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-milor'
.. highlight: bash

bioconductor-milor
==================

.. conda:recipe:: bioconductor-milor
   :replaces_section_title:
   :noindex:

   Differential neighbourhood abundance testing on a graph

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/miloR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-milor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-milor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-milor/meta.yaml>`_

   This package performs single\-cell differential abundance testing. Cell states are modelled as representative neighbourhoods on a nearest neighbour graph. Hypothesis testing is performed using a negative bionomial generalized linear model.


.. conda:package:: bioconductor-milor

   |downloads_bioconductor-milor| |docker_bioconductor-milor|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocneighbors: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocsingular: ``>=1.8.0,<1.9.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggrepel: 
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-matrix: ``>=1.3-0``
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-milor

   and update with::

      conda update bioconductor-milor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-milor:<tag>

   (see `bioconductor-milor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-milor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-milor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-milor
   :alt:   (downloads)
.. |docker_bioconductor-milor| image:: https://quay.io/repository/biocontainers/bioconductor-milor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-milor
.. _`bioconductor-milor/tags`: https://quay.io/repository/biocontainers/bioconductor-milor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-milor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-milor/README.html