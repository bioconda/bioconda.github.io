:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m3c'
.. highlight: bash

bioconductor-m3c
================

.. conda:recipe:: bioconductor-m3c
   :replaces_section_title:

   Genome\-wide data is used to stratify large complex datasets into classes using class discovery algorithms. A widely applied technique is consensus clustering\, however\; the approach is prone to overfitting and false positives. These issues arise from not considering reference distributions while selecting the number of classes \(K\). As a solution\, we developed Monte Carlo reference\-based consensus clustering \(M3C\). M3C uses a multi\-core enabled Monte Carlo simulation to generate null distributions along the range of K which are used to select its value. Using a reference\, that maintains the correlation structure of the input features\, eliminates the limitations of consensus clustering. M3C uses the Relative Cluster Stability Index \(RCSI\) and p values to decide on the value of K and reject the null hypothesis\, K\=1. M3C can also quantify structural relationships between clusters\, and uses spectral clustering to deal with non\-Gaussian and complex structures. M3C can automatically analyse biological or clinical data with respect to the discovered classes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/M3C.html
   :license: AGPL-3
   :recipe: /`bioconductor-m3c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3c/meta.yaml>`_

   


.. conda:package:: bioconductor-m3c

   |downloads_bioconductor-m3c| |docker_bioconductor-m3c|

   :versions: 1.6.0-0, 1.4.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :depends r-corpcor: 
   :depends r-dendextend: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixcalc: 
   :depends r-nmf: 
   :depends r-rcolorbrewer: 
   :depends r-rtsne: 
   :depends r-sigclust: 
   :depends r-survival: 
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