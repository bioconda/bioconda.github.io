.. _`bioconductor-pi`:

bioconductor-pi
===============

|downloads|

Priority index or Pi is developed as a genomic\-led target prioritisation system\, with the focus on leveraging human genetic data to prioritise potential drug targets at the gene\, pathway and network level. The long term goal is to use such information to enhance early\-stage target validation. Based on evidence of disease association from genome\-wide association studies \(GWAS\)\, this prioritisation system is able to generate evidence to support identification of the specific modulated genes \(seed genes\) that are responsible for the genetic association signal by utilising knowledge of linkage disequilibrium \(co\-inherited genetic variants\)\, distance of associated variants from the gene\, evidence of independent genetic association with gene expression in disease\-relevant tissues\, cell types and states\, and evidence of physical interactions between disease\-associated genetic variants and gene promoters based on genome\-wide capture HiC\-generated promoter interactomes in primary blood cell types. Seed genes are scored in an integrative way\, quantifying the genetic influence. Scored seed genes are subsequently used as baits to rank seed genes plus additional \(non\-seed\) genes\; this is achieved by iteratively exploring the global connectivity of a gene interaction network. Genes with the highest priority are further used to identify\/prioritise pathways that are significantly enriched with highly prioritised genes. Prioritised genes are also used to identify a gene network interconnecting highly prioritised genes and a minimal number of less prioritised genes \(which act as linkers bringing together highly prioritised genes\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/Pi.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-pi/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pi

and update with::

   conda update bioconductor-pi



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pi.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pi/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pi/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pi/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pi
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pi/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pi

