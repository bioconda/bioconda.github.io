:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cn.mops'
.. highlight: bash

bioconductor-cn.mops
====================

.. conda:recipe:: bioconductor-cn.mops
   :replaces_section_title:

   cn.mops \(Copy Number estimation by a Mixture Of PoissonS\) is a data processing pipeline for copy number variations and aberrations \(CNVs and CNAs\) from next generation sequencing \(NGS\) data. The package supplies functions to convert BAM files into read count matrices or genomic ranges objects\, which are the input objects for cn.mops. cn.mops models the depths of coverage across samples at each genomic position. Therefore\, it does not suffer from read count biases along chromosomes. Using a Bayesian approach\, cn.mops decomposes read variations across samples into integer copy numbers and noise by its mixture components and Poisson distributions\, respectively. cn.mops guarantees a low FDR because wrong detections are indicated by high noise and filtered out. cn.mops is very fast and written in C\+\+.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/cn.mops.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-cn.mops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.mops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.mops/meta.yaml>`_
   :links: biotools: :biotools:`cn.mops`

   


.. conda:package:: bioconductor-cn.mops

   |downloads_bioconductor-cn.mops| |docker_bioconductor-cn.mops|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0, 1.18.0-1, 1.18.0-0, 1.16.2-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-exomecopy: >=1.28.0,<1.29.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cn.mops

   and update with::

      conda update bioconductor-cn.mops

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cn.mops:<tag>

   (see `bioconductor-cn.mops/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cn.mops| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cn.mops.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cn.mops
   :alt:   (downloads)
.. |docker_bioconductor-cn.mops| image:: https://quay.io/repository/biocontainers/bioconductor-cn.mops/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cn.mops
.. _`bioconductor-cn.mops/tags`: https://quay.io/repository/biocontainers/bioconductor-cn.mops?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html