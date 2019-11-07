:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnits'
.. highlight: bash

bioconductor-rnits
==================

.. conda:recipe:: bioconductor-rnits
   :replaces_section_title:

   R Normalization and Inference of Time Series data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/Rnits.html
   :license: GPL-3
   :recipe: /`bioconductor-rnits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnits/meta.yaml>`_
   :links: biotools: :biotools:`rnits`, doi: :doi:`10.1038/nmeth.3252`

   R\/Bioconductor package for normalization\, curve registration and inference in time course gene expression data.


.. conda:package:: bioconductor-rnits

   |downloads_bioconductor-rnits| |docker_bioconductor-rnits|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.11.0-0, 1.10.0-0
   
   :depends bioconductor-affy: >=1.64.0,<1.65.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-impute: >=1.60.0,<1.61.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-qvalue: >=2.18.0,<2.19.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-boot: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnits

   and update with::

      conda update bioconductor-rnits

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnits:<tag>

   (see `bioconductor-rnits/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnits| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnits.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnits
   :alt:   (downloads)
.. |docker_bioconductor-rnits| image:: https://quay.io/repository/biocontainers/bioconductor-rnits/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnits
.. _`bioconductor-rnits/tags`: https://quay.io/repository/biocontainers/bioconductor-rnits?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnits/README.html