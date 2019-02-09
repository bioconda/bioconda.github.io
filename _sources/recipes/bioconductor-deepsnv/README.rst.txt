.. title:: Package Recipe 'bioconductor-deepsnv'
.. highlight: bash


bioconductor-deepsnv
====================

.. conda:recipe:: bioconductor-deepsnv
   :replaces_section_title:

   This package provides provides quantitative variant callers for detecting subclonal mutations in ultra\-deep \(\>\=100x coverage\) sequencing experiments. The deepSNV algorithm is used for a comparative setup with a control experiment of the same loci and uses a beta\-binomial model and a likelihood ratio test to discriminate sequencing errors and subclonal SNVs. The shearwater algorithm computes a Bayes classifier based on a beta\-binomial model for variant calling with multiple samples for precisely estimating model parameters \- such as local error rates and dispersion \- and prior knowledge\, e.g. from variation data bases such as COSMIC.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/deepSNV.html
   :license: GPL-3
   :recipe: /`bioconductor-deepsnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepsnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepsnv/meta.yaml>`_
   :links: biotools: :biotools:`deepsnv`

   


.. conda:package:: bioconductor-deepsnv

   |downloads_bioconductor-deepsnv| |docker_bioconductor-deepsnv|

   :versions: 1.28.0, 1.26.1, 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rhtslib` >=1.14.0,<1.15.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-vgam`  

   :required~by: |required_by_bioconductor-deepsnv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deepsnv

   and update with::

      conda update bioconductor-deepsnv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-deepsnv


.. |required_by_bioconductor-deepsnv| conda:required_by:: bioconductor-deepsnv
.. |downloads_bioconductor-deepsnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deepsnv.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-deepsnv| image:: https://quay.io/repository/biocontainers/bioconductor-deepsnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deepsnv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html

