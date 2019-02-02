.. _`bioconductor-wavcluster`:

bioconductor-wavcluster
=======================

|downloads|

The package provides an integrated pipeline for the analysis of PAR\-CLIP data. PAR\-CLIP\-induced transitions are first discriminated from sequencing errors\, SNPs and additional non\-experimental sources by a non\- parametric mixture model. The protein binding sites \(clusters\) are then resolved at high resolution and cluster statistics are estimated using a rigorous Bayesian framework. Post\-processing of the results\, data export for UCSC genome browser visualization and motif search analysis are provided. In addition\, the package allows to integrate RNA\-Seq data to estimate the False Discovery Rate of cluster detection. Key functions support parallel multicore computing. Note\: while wavClusteR was designed for PAR\-CLIP data analysis\, it can be applied to the analysis of other NGS data obtained from experimental procedures that induce nucleotide substitutions \(e.g. BisSeq\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/wavClusteR.html
Versions      2.16.0, 2.14.0, 2.11.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-wavcluster/meta.yaml



Links         biotools: :biotools:`wavcluster`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-wavcluster

and update with::

   conda update bioconductor-wavcluster



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-wavcluster.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-wavcluster/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-wavcluster/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-wavcluster/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-wavcluster
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-wavcluster/status
                :target: https://quay.io/repository/biocontainers/bioconductor-wavcluster

