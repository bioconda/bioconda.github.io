.. title:: Package Recipe 'bioconductor-elmer'
.. highlight: bash


bioconductor-elmer
==================

.. conda:recipe:: bioconductor-elmer
   :replaces_section_title:

   ELMER is designed to use DNA methylation and gene expression from a large number of samples to infere regulatory element landscape and transcription factor network in primary tissue.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ELMER.html
   :license: GPL-3
   :recipe: /`bioconductor-elmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer/meta.yaml>`_

   


.. conda:package:: bioconductor-elmer

   |downloads_bioconductor-elmer| |docker_bioconductor-elmer|

   :versions: 2.6.1, 2.4.4

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-elmer.data` >=2.6.0,<2.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-multiassayexperiment` >=1.8.0,<1.9.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-tcgabiolinks` >=2.10.0,<2.11.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-doparallel`  :conda:package:`r-downloader`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-gridextra`  :conda:package:`r-lattice`  :conda:package:`r-magrittr`  :conda:package:`r-matrix`  :conda:package:`r-plotly`  :conda:package:`r-plyr`  :conda:package:`r-readr`  :conda:package:`r-reshape`  :conda:package:`r-rmarkdown`  :conda:package:`r-rvest`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  :conda:package:`r-xml2`  

   :required~by: |required_by_bioconductor-elmer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-elmer

   and update with::

      conda update bioconductor-elmer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-elmer


.. |required_by_bioconductor-elmer| conda:required_by:: bioconductor-elmer
.. |downloads_bioconductor-elmer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-elmer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-elmer| image:: https://quay.io/repository/biocontainers/bioconductor-elmer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-elmer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-elmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-elmer/README.html

