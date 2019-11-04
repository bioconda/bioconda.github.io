:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h5vc'
.. highlight: bash

bioconductor-h5vc
=================

.. conda:recipe:: bioconductor-h5vc
   :replaces_section_title:

   This package contains functions to interact with tally data from NGS experiments that is stored in HDF5 files.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/h5vc.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-h5vc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vc/meta.yaml>`_

   


.. conda:package:: bioconductor-h5vc

   |downloads_bioconductor-h5vc| |docker_bioconductor-h5vc|

   :versions: 2.20.0-0, 2.18.0-1, 2.16.0-0
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-h5vcdata: >=2.5.0,<2.6.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rhdf5: >=2.30.0,<2.31.0
   :depends bioconductor-rhtslib: >=1.18.0,<1.19.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-abind: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-batchjobs: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-h5vc

   and update with::

      conda update bioconductor-h5vc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h5vc:<tag>

   (see `bioconductor-h5vc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h5vc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h5vc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h5vc
   :alt:   (downloads)
.. |docker_bioconductor-h5vc| image:: https://quay.io/repository/biocontainers/bioconductor-h5vc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h5vc
.. _`bioconductor-h5vc/tags`: https://quay.io/repository/biocontainers/bioconductor-h5vc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h5vc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h5vc/README.html