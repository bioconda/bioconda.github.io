.. title:: Package Recipe 'bioconductor-pathwaysplice'
.. highlight: bash


bioconductor-pathwaysplice
==========================

.. conda:recipe:: bioconductor-pathwaysplice
   :replaces_section_title:

   Pathway analysis of alternative splicing would be biased without accounting for the different number of exons associated with each gene\, because genes with higher number of exons are more likely to be included in the \'significant\' gene list in alternative splicing. PathwaySplice is an R package that\: \(1\) performs pathway analysis that explicitly adjusts for the number of exons associated with each gene \(2\) visualizes selection bias due to different number of exons for each gene \(3\) formally tests for presence of bias using logistic regression \(4\) supports gene sets based on the Gene Ontology terms\, as well as more broadly defined gene sets \(e.g. MSigDB\) or user defined gene sets \(5\) identifies the significant genes driving pathway significance \(6\) organizes significant pathways with an enrichment map\, where pathways with large number of overlapping genes are grouped together in a network graph

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PathwaySplice.html
   :license: LGPL(>=2)
   :recipe: /`bioconductor-pathwaysplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathwaysplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathwaysplice/meta.yaml>`_

   


.. conda:package:: bioconductor-pathwaysplice

   |downloads_bioconductor-pathwaysplice| |docker_bioconductor-pathwaysplice|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-enrichmentbrowser` >=2.12.0,<2.13.0 :conda:package:`bioconductor-ensembldb` >=2.6.0,<2.7.0 :conda:package:`bioconductor-genelendatabase` >=1.18.0,<1.19.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-goseq` >=1.34.0,<1.35.0 :conda:package:`bioconductor-junctionseq` >=1.12.0,<1.13.0 :conda:package:`bioconductor-keggrest` >=1.22.0,<1.23.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biasedurn`  :conda:package:`r-dplyr`  :conda:package:`r-gdata`  :conda:package:`r-gplots`  :conda:package:`r-gridextra`  :conda:package:`r-htmlwidgets`  :conda:package:`r-igraph`  :conda:package:`r-mgcv`  :conda:package:`r-plotly`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-tibble`  :conda:package:`r-venndiagram`  :conda:package:`r-webshot`  

   :required~by: |required_by_bioconductor-pathwaysplice|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathwaysplice

   and update with::

      conda update bioconductor-pathwaysplice

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pathwaysplice


.. |required_by_bioconductor-pathwaysplice| conda:required_by:: bioconductor-pathwaysplice
.. |downloads_bioconductor-pathwaysplice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathwaysplice.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pathwaysplice| image:: https://quay.io/repository/biocontainers/bioconductor-pathwaysplice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathwaysplice







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathwaysplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathwaysplice/README.html

