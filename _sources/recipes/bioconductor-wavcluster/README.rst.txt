.. title:: Package Recipe 'bioconductor-wavcluster'
.. highlight: bash


bioconductor-wavcluster
=======================

.. conda:recipe:: bioconductor-wavcluster
   :replaces_section_title:

   The package provides an integrated pipeline for the analysis of PAR\-CLIP data. PAR\-CLIP\-induced transitions are first discriminated from sequencing errors\, SNPs and additional non\-experimental sources by a non\- parametric mixture model. The protein binding sites \(clusters\) are then resolved at high resolution and cluster statistics are estimated using a rigorous Bayesian framework. Post\-processing of the results\, data export for UCSC genome browser visualization and motif search analysis are provided. In addition\, the package allows to integrate RNA\-Seq data to estimate the False Discovery Rate of cluster detection. Key functions support parallel multicore computing. Note\: while wavClusteR was designed for PAR\-CLIP data analysis\, it can be applied to the analysis of other NGS data obtained from experimental procedures that induce nucleotide substitutions \(e.g. BisSeq\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/wavClusteR.html
   :license: GPL-2
   :recipe: /`bioconductor-wavcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavcluster/meta.yaml>`_
   :links: biotools: :biotools:`wavcluster`

   


.. conda:package:: bioconductor-wavcluster

   |downloads_bioconductor-wavcluster| |docker_bioconductor-wavcluster|

   :versions: 2.16.0, 2.14.0, 2.11.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-hmisc`  :conda:package:`r-mclust`  :conda:package:`r-seqinr`  :conda:package:`r-stringr`  :conda:package:`r-wmtsa`  

   :required~by: |required_by_bioconductor-wavcluster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wavcluster

   and update with::

      conda update bioconductor-wavcluster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-wavcluster


.. |required_by_bioconductor-wavcluster| conda:required_by:: bioconductor-wavcluster
.. |downloads_bioconductor-wavcluster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wavcluster.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-wavcluster| image:: https://quay.io/repository/biocontainers/bioconductor-wavcluster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wavcluster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wavcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wavcluster/README.html

