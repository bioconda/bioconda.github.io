.. title:: Package Recipe 'bioconductor-degreport'
.. highlight: bash


bioconductor-degreport
======================

.. conda:recipe:: bioconductor-degreport
   :replaces_section_title:

   Creation of a HTML report of differential expression analyses of count data. It integrates some of the code mentioned in DESeq2 and edgeR vignettes\, and report a ranked list of genes according to the fold changes mean and variability for each selected gene.

   :homepage: https://bioconductor.org/packages/devel/bioc/html/DEGreport.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-degreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degreport/meta.yaml>`_
   :links: biotools: :biotools:`degreport`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-degreport

   |downloads_bioconductor-degreport| |docker_bioconductor-degreport|

   :versions: 1.19.1, 1.18.0, 1.16.0, 1.14.0, 1.12.0, 1.8.2, 1.7.2

   :depends: :conda:package:`bioconductor-biobase`  :conda:package:`bioconductor-biocgenerics`  :conda:package:`bioconductor-complexheatmap`  :conda:package:`bioconductor-consensusclusterplus`  :conda:package:`bioconductor-deseq2`  :conda:package:`bioconductor-edger`  :conda:package:`bioconductor-s4vectors`  :conda:package:`bioconductor-summarizedexperiment`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-broom`  :conda:package:`r-circlize`  :conda:package:`r-cluster`  :conda:package:`r-cowplot`  :conda:package:`r-dplyr`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-knitr`  :conda:package:`r-lasso2`  :conda:package:`r-logging`  :conda:package:`r-magrittr`  :conda:package:`r-nozzle.r1`  :conda:package:`r-psych`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape`  :conda:package:`r-rlang`  :conda:package:`r-scales`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-degreport|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-degreport

   and update with::

      conda update bioconductor-degreport

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-degreport


.. |required_by_bioconductor-degreport| conda:required_by:: bioconductor-degreport
.. |downloads_bioconductor-degreport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degreport.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-degreport| image:: https://quay.io/repository/biocontainers/bioconductor-degreport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degreport







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degreport/README.html

