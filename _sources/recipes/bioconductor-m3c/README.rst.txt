:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m3c'
.. highlight: bash

bioconductor-m3c
================

.. conda:recipe:: bioconductor-m3c
   :replaces_section_title:
   :noindex:

   Monte Carlo Reference\-based Consensus Clustering

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/M3C.html
   :license: AGPL-3
   :recipe: /`bioconductor-m3c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3c/meta.yaml>`_

   M3C is a consensus clustering algorithm that uses a Monte Carlo simulation to eliminate overestimation of K and can reject the null hypothesis K\=1.


.. conda:package:: bioconductor-m3c

   |downloads_bioconductor-m3c| |docker_bioconductor-m3c|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-corpcor: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixcalc: 
   :depends r-rtsne: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-m3c

   and update with::

      conda update bioconductor-m3c

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-m3c:<tag>

   (see `bioconductor-m3c/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m3c| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m3c.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m3c
   :alt:   (downloads)
.. |docker_bioconductor-m3c| image:: https://quay.io/repository/biocontainers/bioconductor-m3c/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m3c
.. _`bioconductor-m3c/tags`: https://quay.io/repository/biocontainers/bioconductor-m3c?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m3c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m3c/README.html