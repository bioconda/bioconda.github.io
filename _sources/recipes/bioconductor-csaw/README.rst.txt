:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-csaw'
.. highlight: bash

bioconductor-csaw
=================

.. conda:recipe:: bioconductor-csaw
   :replaces_section_title:

   Detection of differentially bound regions in ChIP\-seq data with sliding windows\, with methods for normalization and proper FDR control.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/csaw.html
   :license: GPL-3
   :recipe: /`bioconductor-csaw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csaw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csaw/meta.yaml>`_
   :links: biotools: :biotools:`csaw`

   


.. conda:package:: bioconductor-csaw

   |downloads_bioconductor-csaw| |docker_bioconductor-csaw|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.1-0, 1.16.0-0, 1.14.1-0, 1.12.0-0, 1.10.0-0, 1.6.1-0, 1.4.1-0, 1.4.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-rhtslib: >=1.18.0,<1.19.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-zlibbioc: >=1.32.0,<1.33.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-csaw

   and update with::

      conda update bioconductor-csaw

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-csaw:<tag>

   (see `bioconductor-csaw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-csaw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-csaw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-csaw
   :alt:   (downloads)
.. |docker_bioconductor-csaw| image:: https://quay.io/repository/biocontainers/bioconductor-csaw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-csaw
.. _`bioconductor-csaw/tags`: https://quay.io/repository/biocontainers/bioconductor-csaw?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-csaw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-csaw/README.html