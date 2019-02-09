.. title:: Package Recipe 'bioconductor-psichomics'
.. highlight: bash


bioconductor-psichomics
=======================

.. conda:recipe:: bioconductor-psichomics
   :replaces_section_title:

   Interactive R package with an intuitive Shiny\-based graphical interface for alternative splicing quantification and integrative analyses of alternative splicing and gene expression based on The Cancer Genome Atlas \(TCGA\)\, the Genotype\-Tissue Expression project \(GTEx\)\, Sequence Read Archive \(SRA\) and user\-provided data. The tool interactively performs survival\, dimensionality reduction and median\- and variance\-based differential splicing and gene expression analyses that benefit from the incorporation of clinical and molecular sample\-associated features \(such as tumour stage or survival\). Interactive visual access to genomic mapping and functional annotation of selected alternative splicing events is also included.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/psichomics.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-psichomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psichomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psichomics/meta.yaml>`_

   


.. conda:package:: bioconductor-psichomics

   |downloads_bioconductor-psichomics| |docker_bioconductor-psichomics|

   :versions: 1.8.1

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-recount` >=1.8.0,<1.9.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-colourpicker`  :conda:package:`r-data.table`  :conda:package:`r-digest`  :conda:package:`r-dplyr`  :conda:package:`r-dt` >=0.2 :conda:package:`r-fastica`  :conda:package:`r-fastmatch`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-highcharter` >=0.5.0 :conda:package:`r-htmltools`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-misctools`  :conda:package:`r-pairsd3`  :conda:package:`r-plyr`  :conda:package:`r-r.utils`  :conda:package:`r-rcpp` >=0.12.14 :conda:package:`r-shiny` >=1.0.3 :conda:package:`r-shinybs`  :conda:package:`r-shinyjs`  :conda:package:`r-stringr`  :conda:package:`r-survival`  :conda:package:`r-xml`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-psichomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-psichomics

   and update with::

      conda update bioconductor-psichomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-psichomics


.. |required_by_bioconductor-psichomics| conda:required_by:: bioconductor-psichomics
.. |downloads_bioconductor-psichomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psichomics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-psichomics| image:: https://quay.io/repository/biocontainers/bioconductor-psichomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psichomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psichomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psichomics/README.html

