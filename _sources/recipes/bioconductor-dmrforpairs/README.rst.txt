.. _`bioconductor-dmrforpairs`:

bioconductor-dmrforpairs
========================

|downloads|

DMRforPairs \(formerly DMR2\+\) allows researchers to compare n\>\=2 unique samples with regard to their methylation profile. The \(pairwise\) comparison of n unique single samples distinguishes DMRforPairs from other existing pipelines as these often compare groups of samples in either single CpG locus or region based analysis. DMRforPairs defines regions of interest as genomic ranges with sufficient probes located in close proximity to each other. Probes in one region are optionally annotated to the same functional class\(es\). Differential methylation is evaluated by comparing the methylation values within each region between individual samples and \(if the difference is sufficiently large\)\, testing this difference formally for statistical significance.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DMRforPairs.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-dmrforpairs/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dmrforpairs

and update with::

   conda update bioconductor-dmrforpairs



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dmrforpairs.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dmrforpairs/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dmrforpairs
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs

