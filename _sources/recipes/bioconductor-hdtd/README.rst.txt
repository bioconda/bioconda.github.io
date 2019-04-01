:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdtd'
.. highlight: bash

bioconductor-hdtd
=================

.. conda:recipe:: bioconductor-hdtd
   :replaces_section_title:

   Characterization of intra\-individual variability using physiologically relevant measurements provides important insights into fundamental biological questions ranging from cell type identity to tumor development. For each individual\, the data measurements can be written as a matrix with the different subsamples of the individual recorded in the columns and the different phenotypic units recorded in the rows. Datasets of this type are called high\-dimensional transposable data. The HDTD package provides functions for conducting statistical inference for the mean relationship between the row and column variables and for the covariance structure within and between the row and column variables.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HDTD.html
   :license: GPL-3
   :recipe: /`bioconductor-hdtd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdtd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdtd/meta.yaml>`_

   


.. conda:package:: bioconductor-hdtd

   |downloads_bioconductor-hdtd| |docker_bioconductor-hdtd|

   :versions: 1.16.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: >=0.12.13
   
   :depends r-rcpparmadillo: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hdtd

   and update with::

      conda update bioconductor-hdtd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdtd:<tag>

   (see `bioconductor-hdtd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdtd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdtd.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hdtd| image:: https://quay.io/repository/biocontainers/bioconductor-hdtd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdtd
.. _`bioconductor-hdtd/tags`: https://quay.io/repository/biocontainers/bioconductor-hdtd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdtd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdtd/README.html