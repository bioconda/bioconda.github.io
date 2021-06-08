:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wavcluster'
.. highlight: bash

bioconductor-wavcluster
=======================

.. conda:recipe:: bioconductor-wavcluster
   :replaces_section_title:
   :noindex:

   Sensitive and highly resolved identification of RNA\-protein interaction sites in PAR\-CLIP data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/wavClusteR.html
   :license: GPL-2
   :recipe: /`bioconductor-wavcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavcluster/meta.yaml>`_
   :links: biotools: :biotools:`wavcluster`

   The package provides an integrated pipeline for the analysis of PAR\-CLIP data. PAR\-CLIP\-induced transitions are first discriminated from sequencing errors\, SNPs and additional non\-experimental sources by a non\- parametric mixture model. The protein binding sites \(clusters\) are then resolved at high resolution and cluster statistics are estimated using a rigorous Bayesian framework. Post\-processing of the results\, data export for UCSC genome browser visualization and motif search analysis are provided. In addition\, the package allows to integrate RNA\-Seq data to estimate the False Discovery Rate of cluster detection. Key functions support parallel multicore computing. Note\: while wavClusteR was designed for PAR\-CLIP data analysis\, it can be applied to the analysis of other NGS data obtained from experimental procedures that induce nucleotide substitutions \(e.g. BisSeq\).


.. conda:package:: bioconductor-wavcluster

   |downloads_bioconductor-wavcluster| |docker_bioconductor-wavcluster|

   :versions:
      
      

      ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.11.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-mclust: 
   :depends r-seqinr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wavcluster

   and update with::

      conda update bioconductor-wavcluster

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wavcluster:<tag>

   (see `bioconductor-wavcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wavcluster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wavcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wavcluster
   :alt:   (downloads)
.. |docker_bioconductor-wavcluster| image:: https://quay.io/repository/biocontainers/bioconductor-wavcluster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wavcluster
.. _`bioconductor-wavcluster/tags`: https://quay.io/repository/biocontainers/bioconductor-wavcluster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wavcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wavcluster/README.html