:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-narrowpeaks'
.. highlight: bash

bioconductor-narrowpeaks
========================

.. conda:recipe:: bioconductor-narrowpeaks
   :replaces_section_title:

   Shape\-based Analysis of Variation in ChIP\-seq using Functional PCA

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/NarrowPeaks.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-narrowpeaks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-narrowpeaks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-narrowpeaks/meta.yaml>`_

   The package applies a functional version of principal component analysis \(FPCA\) to\: \(1\) Postprocess data in wiggle track format\, commonly produced by generic ChIP\-seq peak callers\, by applying FPCA over a set of read\-enriched regions \(ChIP\-seq peaks\). This is done to study variability of the the peaks\, or to shorten their genomic locations accounting for a given proportion of variation among the enrichment\-score profiles. \(2\) Analyse differential variation between multiple ChIP\-seq samples with replicates. The function \'narrowpeaksDiff\' quantifies differences between the shapes\, and uses Hotelling\'s T2 tests on the functional principal component scores to identify significant differences across conditions. An application of the package for Arabidopsis datasets is described in Mateos\, Madrigal\, et al. \(2015\) Genome Biology\: 16\:31.


.. conda:package:: bioconductor-narrowpeaks

   |downloads_bioconductor-narrowpeaks| |docker_bioconductor-narrowpeaks|

   :versions: 1.31.0-0, 1.30.0-0, 1.28.0-1, 1.26.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-csar: >=1.40.0,<1.41.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-fda: 
   :depends r-icsnp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-narrowpeaks

   and update with::

      conda update bioconductor-narrowpeaks

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-narrowpeaks:<tag>

   (see `bioconductor-narrowpeaks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-narrowpeaks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-narrowpeaks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-narrowpeaks
   :alt:   (downloads)
.. |docker_bioconductor-narrowpeaks| image:: https://quay.io/repository/biocontainers/bioconductor-narrowpeaks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-narrowpeaks
.. _`bioconductor-narrowpeaks/tags`: https://quay.io/repository/biocontainers/bioconductor-narrowpeaks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-narrowpeaks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-narrowpeaks/README.html