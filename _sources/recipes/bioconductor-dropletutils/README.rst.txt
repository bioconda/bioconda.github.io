:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dropletutils'
.. highlight: bash

bioconductor-dropletutils
=========================

.. conda:recipe:: bioconductor-dropletutils
   :replaces_section_title:

   Provides a number of utility functions for handling single\-cell \(RNA\-seq\) data from droplet technologies such as 10X Genomics. This includes data loading from count matrices or molecule information files\, identification of cells from empty droplets\, removal of barcode\-swapped pseudo\-cells\, and downsampling of the count matrix.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DropletUtils.html
   :license: GPL-3
   :recipe: /`bioconductor-dropletutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dropletutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dropletutils/meta.yaml>`_
   :links: biotools: :biotools:`DropletUtils`

   


.. conda:package:: bioconductor-dropletutils

   |downloads_bioconductor-dropletutils| |docker_bioconductor-dropletutils|

   :versions: 1.4.2-0, 1.2.1-0, 1.0.3-0
   
   :depends bioconductor-beachmat: >=2.0.0,<2.1.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends bioconductor-hdf5array: >=1.12.0,<1.13.0
   :depends bioconductor-rhdf5: >=2.28.0,<2.29.0
   :depends bioconductor-rhdf5lib: >=1.6.0,<1.7.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-singlecellexperiment: >=1.6.0,<1.7.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bh: 
   :depends r-dqrng: 
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dropletutils

   and update with::

      conda update bioconductor-dropletutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dropletutils:<tag>

   (see `bioconductor-dropletutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dropletutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dropletutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dropletutils
   :alt:   (downloads)
.. |docker_bioconductor-dropletutils| image:: https://quay.io/repository/biocontainers/bioconductor-dropletutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dropletutils
.. _`bioconductor-dropletutils/tags`: https://quay.io/repository/biocontainers/bioconductor-dropletutils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dropletutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dropletutils/README.html