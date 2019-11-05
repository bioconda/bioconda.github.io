:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffbind'
.. highlight: bash

bioconductor-diffbind
=====================

.. conda:recipe:: bioconductor-diffbind
   :replaces_section_title:

   Compute differentially bound sites from multiple ChIP\-seq experiments using affinity \(quantitative\) data. Also enables occupancy \(overlap\) analysis and plotting functions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DiffBind.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-diffbind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffbind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffbind/meta.yaml>`_
   :links: biotools: :biotools:`diffbind`

   


.. conda:package:: bioconductor-diffbind

   |downloads_bioconductor-diffbind| |docker_bioconductor-diffbind|

   :versions: 2.14.0-0, 2.12.0-1, 2.10.0-1, 2.10.0-0, 2.8.0-0, 2.6.6-0, 2.6.5-0, 2.6.0-0, 2.4.8-16, 2.2.12-1, 2.2.12-0, 2.0.9-3, 2.0.9-2, 1.16.3-0
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-rhtslib: >=1.18.0,<1.19.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-systempiper: >=1.20.0,<1.21.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-amap: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-lattice: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffbind

   and update with::

      conda update bioconductor-diffbind

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffbind:<tag>

   (see `bioconductor-diffbind/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffbind| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffbind.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffbind
   :alt:   (downloads)
.. |docker_bioconductor-diffbind| image:: https://quay.io/repository/biocontainers/bioconductor-diffbind/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffbind
.. _`bioconductor-diffbind/tags`: https://quay.io/repository/biocontainers/bioconductor-diffbind?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffbind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffbind/README.html