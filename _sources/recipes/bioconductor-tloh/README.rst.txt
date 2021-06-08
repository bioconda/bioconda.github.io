:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tloh'
.. highlight: bash

bioconductor-tloh
=================

.. conda:recipe:: bioconductor-tloh
   :replaces_section_title:
   :noindex:

   Assessment of evidence for LOH in spatial transcriptomics pre\-processed data using Bayes factor calculations

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/tLOH.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tloh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tloh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tloh/meta.yaml>`_

   tLOH\, or transcriptomicsLOH\, assesses evidence for loss of heterozygosity \(LOH\) in pre\-processed spatial transcriptomics data. This tool requires spatial transcriptomics cluster and allele count information at likely heterozygous single\-nucleotide polymorphism \(SNP\) positions in VCF format. Bayes factors are calculated at each SNP to determine likelihood of potential loss of heterozygosity event. Two plotting functions are included to visualize allele fraction and aggregated Bayes factor per chromosome. Data generated with the 10X Genomics Visium Spatial Gene Expression platform must be pre\-processed to obtain an individual sample VCF with columns for each cluster. Required fields are allele depth \(AD\) with counts for reference\/alternative alleles and read depth \(DP\).


.. conda:package:: bioconductor-tloh

   |downloads_bioconductor-tloh| |docker_bioconductor-tloh|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-matrixgenerics: ``>=1.4.0,<1.5.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-purrr: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tloh

   and update with::

      conda update bioconductor-tloh

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tloh:<tag>

   (see `bioconductor-tloh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tloh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tloh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tloh
   :alt:   (downloads)
.. |docker_bioconductor-tloh| image:: https://quay.io/repository/biocontainers/bioconductor-tloh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tloh
.. _`bioconductor-tloh/tags`: https://quay.io/repository/biocontainers/bioconductor-tloh?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tloh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tloh/README.html