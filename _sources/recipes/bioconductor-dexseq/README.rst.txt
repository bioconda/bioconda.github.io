:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexseq'
.. highlight: bash

bioconductor-dexseq
===================

.. conda:recipe:: bioconductor-dexseq
   :replaces_section_title:

   Inference of differential exon usage in RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DEXSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-dexseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexseq/meta.yaml>`_
   :links: biotools: :biotools:`dexseq`

   The package is focused on finding differential exon usage using RNA\-seq exon counts between samples with different experimental designs. It provides functions that allows the user to make the necessary statistical tests based on a model that uses the negative binomial distribution to estimate the variance between biological replicates and generalized linear models for testing. The package also provides functions for the visualization and exploration of the results.


.. conda:package:: bioconductor-dexseq

   |downloads_bioconductor-dexseq| |docker_bioconductor-dexseq|

   :versions: 1.34.0-0, 1.32.0-0, 1.30.0-1, 1.28.1-1, 1.28.1-0, 1.28.0-0, 1.26.0-2, 1.26.0-1, 1.26.0-0, 1.24.0-3, 1.24.0-1, 1.24.0-0, 1.22.0-0, 1.20.1-2, 1.20.1-1, 1.20.1-0, 1.18.4-1, 1.16.6-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-deseq2: >=1.28.0,<1.29.0
   :depends bioconductor-genefilter: >=1.70.0,<1.71.0
   :depends bioconductor-geneplotter: >=1.66.0,<1.67.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-hwriter: 
   :depends r-rcolorbrewer: 
   :depends r-statmod: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dexseq

   and update with::

      conda update bioconductor-dexseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dexseq:<tag>

   (see `bioconductor-dexseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dexseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexseq
   :alt:   (downloads)
.. |docker_bioconductor-dexseq| image:: https://quay.io/repository/biocontainers/bioconductor-dexseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexseq
.. _`bioconductor-dexseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dexseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexseq/README.html