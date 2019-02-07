.. title:: Package Recipe 'bioconductor-primirtss'
.. highlight: bash


bioconductor-primirtss
======================

.. conda:recipe:: bioconductor-primirtss
   :replaces_section_title:

   A fast\, convenient tool to identify the TSSs of miRNAs by integrating the data of H3K4me3 and Pol II as well as combining the conservation level and sequence feature\, provided within both command\-line and graphical interfaces\, which achieves a better performance than the previous non\-cell\-specific methods on miRNA TSSs.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/primirTSS.html
   :license: GPL-2
   :recipe: /`bioconductor-primirtss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primirtss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primirtss/meta.yaml>`_

   


.. conda:package:: bioconductor-primirtss

   |downloads_bioconductor-primirtss| |docker_bioconductor-primirtss|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg38` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicscores` >=1.6.0,<1.7.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-jaspar2018` >=1.1.0,<1.2.0 :conda:package:`bioconductor-phastcons100way.ucsc.hg38` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-tfbstools` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr` >=0.7.6 :conda:package:`r-purrr` >=0.2.5 :conda:package:`r-r.utils` >=2.6.0 :conda:package:`r-shiny` >=1.0.5 :conda:package:`r-stringr` >=1.3.1 :conda:package:`r-tibble` >=1.4.2 :conda:package:`r-tidyr` >=0.8.1 

   :required~by: |required_by_bioconductor-primirtss|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-primirtss

   and update with::

      conda update bioconductor-primirtss

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-primirtss


.. |required_by_bioconductor-primirtss| conda:required_by:: bioconductor-primirtss
.. |downloads_bioconductor-primirtss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-primirtss.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-primirtss| image:: https://quay.io/repository/biocontainers/bioconductor-primirtss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-primirtss







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-primirtss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-primirtss/README.html

