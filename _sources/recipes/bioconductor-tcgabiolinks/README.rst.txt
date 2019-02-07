.. title:: Package Recipe 'bioconductor-tcgabiolinks'
.. highlight: bash


bioconductor-tcgabiolinks
=========================

.. conda:recipe:: bioconductor-tcgabiolinks
   :replaces_section_title:

   The aim of TCGAbiolinks is \: i\) facilitate the GDC open\-access data retrieval\, ii\) prepare the data using the appropriate pre\-processing strategies\, iii\) provide the means to carry out different standard analyses and iv\) to easily reproduce earlier research results. In more detail\, the package provides multiple methods for analysis \(e.g.\, differential expression analysis\, identifying differentially methylated regions\) and methods for visualization \(e.g.\, survival plots\, volcano plots\, starburst plots\) in order to easily develop complete analysis pipelines.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TCGAbiolinks.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tcgabiolinks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinks/meta.yaml>`_
   :links: biotools: :biotools:`tcgabiolinks`, doi: :doi:`10.1093/nar/gkv1507`

   


.. conda:package:: bioconductor-tcgabiolinks

   |downloads_bioconductor-tcgabiolinks| |docker_bioconductor-tcgabiolinks|

   :versions: 2.10.0, 2.8.4, 2.6.11

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-consensusclusterplus` >=1.46.0,<1.47.0 :conda:package:`bioconductor-edaseq` >=2.16.0,<2.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-data.table`  :conda:package:`r-doparallel`  :conda:package:`r-downloader` >=0.4 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel` >=0.6.3 :conda:package:`r-ggthemes`  :conda:package:`r-gridextra`  :conda:package:`r-httr` >=1.2.1 :conda:package:`r-jsonlite` >=1.0.0 :conda:package:`r-knitr`  :conda:package:`r-matlab`  :conda:package:`r-plyr`  :conda:package:`r-r.utils`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-readr`  :conda:package:`r-rvest` >=0.3.0 :conda:package:`r-scales`  :conda:package:`r-selectr`  :conda:package:`r-stringr` >=1.0.0 :conda:package:`r-survival`  :conda:package:`r-survminer`  :conda:package:`r-tibble`  :conda:package:`r-xml` >=3.98.0 :conda:package:`r-xml2`  

   :required~by: |required_by_bioconductor-tcgabiolinks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgabiolinks

   and update with::

      conda update bioconductor-tcgabiolinks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tcgabiolinks


.. |required_by_bioconductor-tcgabiolinks| conda:required_by:: bioconductor-tcgabiolinks
.. |downloads_bioconductor-tcgabiolinks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgabiolinks.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tcgabiolinks| image:: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgabiolinks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgabiolinks/README.html

