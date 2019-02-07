.. title:: Package Recipe 'bioconductor-pi'
.. highlight: bash


bioconductor-pi
===============

.. conda:recipe:: bioconductor-pi
   :replaces_section_title:

   Priority index or Pi is developed as a genomic\-led target prioritisation system\, with the focus on leveraging human genetic data to prioritise potential drug targets at the gene\, pathway and network level. The long term goal is to use such information to enhance early\-stage target validation. Based on evidence of disease association from genome\-wide association studies \(GWAS\)\, this prioritisation system is able to generate evidence to support identification of the specific modulated genes \(seed genes\) that are responsible for the genetic association signal by utilising knowledge of linkage disequilibrium \(co\-inherited genetic variants\)\, distance of associated variants from the gene\, evidence of independent genetic association with gene expression in disease\-relevant tissues\, cell types and states\, and evidence of physical interactions between disease\-associated genetic variants and gene promoters based on genome\-wide capture HiC\-generated promoter interactomes in primary blood cell types. Seed genes are scored in an integrative way\, quantifying the genetic influence. Scored seed genes are subsequently used as baits to rank seed genes plus additional \(non\-seed\) genes\; this is achieved by iteratively exploring the global connectivity of a gene interaction network. Genes with the highest priority are further used to identify\/prioritise pathways that are significantly enriched with highly prioritised genes. Prioritised genes are also used to identify a gene network interconnecting highly prioritised genes and a minimal number of less prioritised genes \(which act as linkers bringing together highly prioritised genes\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Pi.html
   :license: GPL-3
   :recipe: /`bioconductor-pi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pi/meta.yaml>`_

   


.. conda:package:: bioconductor-pi

   |downloads_bioconductor-pi| |docker_bioconductor-pi|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-suprahex` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-caret`  :conda:package:`r-dnet`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-glmnet`  :conda:package:`r-igraph`  :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-matrix`  :conda:package:`r-plot3d`  :conda:package:`r-randomforest`  :conda:package:`r-rocr`  :conda:package:`r-scales`  :conda:package:`r-xgr`  

   :required~by: |required_by_bioconductor-pi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pi

   and update with::

      conda update bioconductor-pi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pi


.. |required_by_bioconductor-pi| conda:required_by:: bioconductor-pi
.. |downloads_bioconductor-pi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pi| image:: https://quay.io/repository/biocontainers/bioconductor-pi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pi/README.html

