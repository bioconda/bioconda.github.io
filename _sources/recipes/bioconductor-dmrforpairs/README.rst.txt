:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrforpairs'
.. highlight: bash

bioconductor-dmrforpairs
========================

.. conda:recipe:: bioconductor-dmrforpairs
   :replaces_section_title:

   DMRforPairs\: identifying Differentially Methylated Regions between unique samples using array based methylation profiles

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DMRforPairs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dmrforpairs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrforpairs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrforpairs/meta.yaml>`_

   DMRforPairs \(formerly DMR2\+\) allows researchers to compare n\>\=2 unique samples with regard to their methylation profile. The \(pairwise\) comparison of n unique single samples distinguishes DMRforPairs from other existing pipelines as these often compare groups of samples in either single CpG locus or region based analysis. DMRforPairs defines regions of interest as genomic ranges with sufficient probes located in close proximity to each other. Probes in one region are optionally annotated to the same functional class\(es\). Differential methylation is evaluated by comparing the methylation values within each region between individual samples and \(if the difference is sufficiently large\)\, testing this difference formally for statistical significance.


.. conda:package:: bioconductor-dmrforpairs

   |downloads_bioconductor-dmrforpairs| |docker_bioconductor-dmrforpairs|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-1, 1.18.0-0
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-gviz: >=1.32.0,<1.33.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-r2html: >=2.2.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmrforpairs

   and update with::

      conda update bioconductor-dmrforpairs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmrforpairs:<tag>

   (see `bioconductor-dmrforpairs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmrforpairs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrforpairs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrforpairs
   :alt:   (downloads)
.. |docker_bioconductor-dmrforpairs| image:: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs
.. _`bioconductor-dmrforpairs/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html