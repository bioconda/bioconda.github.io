:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blima'
.. highlight: bash

bioconductor-blima
==================

.. conda:recipe:: bioconductor-blima
   :replaces_section_title:

   Tools for the preprocessing and analysis of the Illumina microarrays on the detector \(bead\) level

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/blima.html
   :license: GPL-3
   :recipe: /`bioconductor-blima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blima/meta.yaml>`_
   :links: biotools: :biotools:`blima`, doi: :doi:`10.1038/nmeth.3252`

   Package blima includes several algorithms for the preprocessing of Illumina microarray data. It focuses to the bead level analysis and provides novel approach to the quantile normalization of the vectors of unequal lengths. It provides variety of the methods for background correction including background subtraction\, RMA like convolution and background outlier removal. It also implements variance stabilizing transformation on the bead level. There are also implemented methods for data summarization. It also provides the methods for performing T\-tests on the detector \(bead\) level and on the probe level for differential expression testing.


.. conda:package:: bioconductor-blima

   |downloads_bioconductor-blima| |docker_bioconductor-blima|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-beadarray: >=2.38.0,<2.39.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-rcpp: >=0.12.8
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-blima

   and update with::

      conda update bioconductor-blima

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-blima:<tag>

   (see `bioconductor-blima/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-blima| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blima.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blima
   :alt:   (downloads)
.. |docker_bioconductor-blima| image:: https://quay.io/repository/biocontainers/bioconductor-blima/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blima
.. _`bioconductor-blima/tags`: https://quay.io/repository/biocontainers/bioconductor-blima?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blima/README.html