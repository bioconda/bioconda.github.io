:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splatter'
.. highlight: bash

bioconductor-splatter
=====================

.. conda:recipe:: bioconductor-splatter
   :replaces_section_title:

   Splatter is a package for the simulation of single\-cell RNA sequencing count data. It provides a simple interface for creating complex simulations that are reproducible and well\-documented. Parameters can be estimated from real data and functions are provided for comparing real and simulated datasets.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/splatter.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-splatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splatter/meta.yaml>`_

   


.. conda:package:: bioconductor-splatter

   |downloads_bioconductor-splatter| |docker_bioconductor-splatter|

   :versions: 1.8.0-1, 1.6.1-0, 1.4.3-0, 1.2.1-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends bioconductor-scater: >=1.12.0,<1.13.0
   :depends bioconductor-singlecellexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-akima: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-checkmate: 
   :depends r-crayon: 
   :depends r-fitdistrplus: 
   :depends r-ggplot2: 
   :depends r-locfit: 
   :depends r-matrixstats: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splatter

   and update with::

      conda update bioconductor-splatter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splatter:<tag>

   (see `bioconductor-splatter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splatter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splatter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splatter
   :alt:   (downloads)
.. |docker_bioconductor-splatter| image:: https://quay.io/repository/biocontainers/bioconductor-splatter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splatter
.. _`bioconductor-splatter/tags`: https://quay.io/repository/biocontainers/bioconductor-splatter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splatter/README.html