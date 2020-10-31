:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dialignr'
.. highlight: bash

bioconductor-dialignr
=====================

.. conda:recipe:: bioconductor-dialignr
   :replaces_section_title:
   :noindex:

   Dynamic Programming Based Alignment of MS2 Chromatograms

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DIAlignR.html
   :license: GPL-3
   :recipe: /`bioconductor-dialignr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dialignr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dialignr/meta.yaml>`_

   To obtain unbiased proteome coverage from a biological sample\, mass\-spectrometer is operated in Data Independent Acquisition \(DIA\) mode. Alignment of these DIA runs establishes consistency and less missing values in complete data\-matrix. This package implements dynamic programming with affine gap penalty based approach for pair\-wise alignment of analytes. A hybrid approach of global alignment \(through MS2 features\) and local alignment \(with MS2 chromatograms\) is implemented in this tool.


.. conda:package:: bioconductor-dialignr

   |downloads_bioconductor-dialignr| |docker_bioconductor-dialignr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.5-0``

      

   
   :depends bioconductor-mzr: ``>=2.24.0,<2.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=9.0.1``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-rsqlite: 
   :depends r-scales: 
   :depends r-signal: 
   :depends r-tidyr: 
   :depends r-zoo: ``>=1.8-3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dialignr

   and update with::

      conda update bioconductor-dialignr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dialignr:<tag>

   (see `bioconductor-dialignr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dialignr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dialignr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dialignr
   :alt:   (downloads)
.. |docker_bioconductor-dialignr| image:: https://quay.io/repository/biocontainers/bioconductor-dialignr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dialignr
.. _`bioconductor-dialignr/tags`: https://quay.io/repository/biocontainers/bioconductor-dialignr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dialignr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dialignr/README.html