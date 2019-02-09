.. title:: Package Recipe 'bioconductor-dropletutils'
.. highlight: bash


bioconductor-dropletutils
=========================

.. conda:recipe:: bioconductor-dropletutils
   :replaces_section_title:

   Provides a number of utility functions for handling single\-cell \(RNA\-seq\) data from droplet technologies such as 10X Genomics. This includes data loading\, identification of cells from empty droplets\, removal of barcode\-swapped pseudo\-cells\, and downsampling of the count matrix.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DropletUtils.html
   :license: GPL-3
   :recipe: /`bioconductor-dropletutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dropletutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dropletutils/meta.yaml>`_
   :links: biotools: :biotools:`DropletUtils`

   


.. conda:package:: bioconductor-dropletutils

   |downloads_bioconductor-dropletutils| |docker_bioconductor-dropletutils|

   :versions: 1.2.1, 1.0.3

   :depends: :conda:package:`bioconductor-beachmat` >=1.4.0,<1.5.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-hdf5array` >=1.10.0,<1.11.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`bioconductor-rhdf5lib` >=1.4.0,<1.5.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-dropletutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dropletutils

   and update with::

      conda update bioconductor-dropletutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dropletutils


.. |required_by_bioconductor-dropletutils| conda:required_by:: bioconductor-dropletutils
.. |downloads_bioconductor-dropletutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dropletutils.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dropletutils| image:: https://quay.io/repository/biocontainers/bioconductor-dropletutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dropletutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dropletutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dropletutils/README.html

