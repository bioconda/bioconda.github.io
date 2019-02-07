.. title:: Package Recipe 'bioconductor-narrowpeaks'
.. highlight: bash


bioconductor-narrowpeaks
========================

.. conda:recipe:: bioconductor-narrowpeaks
   :replaces_section_title:

   The package applies a functional version of principal component analysis \(FPCA\) to\: \(1\) Postprocess data in wiggle track format\, commonly produced by generic ChIP\-seq peak callers\, by applying FPCA over a set of read\-enriched regions \(ChIP\-seq peaks\). This is done to study variability of the the peaks\, or to shorten their genomic locations accounting for a given proportion of variation among the enrichment\-score profiles. \(2\) Analyse differential variation between multiple ChIP\-seq samples with replicates. The function \'narrowpeaksDiff\' quantifies differences between the shapes\, and uses Hotelling\'s T2 tests on the functional principal component scores to identify significant differences across conditions. An application of the package for Arabidopsis datasets is described in Mateos\, Madrigal\, et al. \(2015\) Genome Biology\: 16\:31.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NarrowPeaks.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-narrowpeaks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-narrowpeaks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-narrowpeaks/meta.yaml>`_

   


.. conda:package:: bioconductor-narrowpeaks

   |downloads_bioconductor-narrowpeaks| |docker_bioconductor-narrowpeaks|

   :versions: 1.26.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-csar` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fda`  :conda:package:`r-icsnp`  

   :required~by: |required_by_bioconductor-narrowpeaks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-narrowpeaks

   and update with::

      conda update bioconductor-narrowpeaks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-narrowpeaks


.. |required_by_bioconductor-narrowpeaks| conda:required_by:: bioconductor-narrowpeaks
.. |downloads_bioconductor-narrowpeaks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-narrowpeaks.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-narrowpeaks| image:: https://quay.io/repository/biocontainers/bioconductor-narrowpeaks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-narrowpeaks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-narrowpeaks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-narrowpeaks/README.html

