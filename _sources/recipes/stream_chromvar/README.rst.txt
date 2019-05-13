:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromvar'
.. highlight: bash

bioconductor-chromvar
=====================

.. conda:recipe:: stream_chromvar
   :replaces_section_title:

   Determine variation in chromatin accessibility across sets of annotations or peaks. Designed primarily for single\-cell or sparse chromatin accessibility data\, e.g. from scATAC\-seq or sparse bulk ATAC or DNAse\-seq experiments.

   :homepage: http://bioconductor.org/packages/3.8/bioc/html/chromVAR.html
   :license: GPL-2
   :recipe: /`stream_chromvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream_chromvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream_chromvar/meta.yaml>`_
   :links: biotools: :biotools:`chromvar`

   


.. conda:package:: bioconductor-chromvar

   |downloads_bioconductor-chromvar| |docker_bioconductor-chromvar|

   :versions: 1.4.1-0, 1.4.0-1, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-tfbstools: >=1.20.0,<1.21.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-miniui: 
   :depends r-nabor: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rtsne: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromvar

   and update with::

      conda update bioconductor-chromvar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromvar:<tag>

   (see `bioconductor-chromvar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromvar
   :alt:   (downloads)
.. |docker_bioconductor-chromvar| image:: https://quay.io/repository/biocontainers/bioconductor-chromvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromvar
.. _`bioconductor-chromvar/tags`: https://quay.io/repository/biocontainers/bioconductor-chromvar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromvar/README.html