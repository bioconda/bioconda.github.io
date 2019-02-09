.. title:: Package Recipe 'bioconductor-bitseq'
.. highlight: bash


bioconductor-bitseq
===================

.. conda:recipe:: bioconductor-bitseq
   :replaces_section_title:

   The BitSeq package is targeted for transcript expression analysis and differential expression analysis of RNA\-seq data in two stage process. In the first stage it uses Bayesian inference methodology to infer expression of individual transcripts from individual RNA\-seq experiments. The second stage of BitSeq embraces the differential expression analysis of transcript expression. Providing expression estimates from replicates of multiple conditions\, Log\-Normal model of the estimates is used for inferring the condition mean transcript expression and ranking the transcripts based on the likelihood of differential expression.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BitSeq.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-bitseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bitseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bitseq/meta.yaml>`_
   :links: biotools: :biotools:`bitseq`

   


.. conda:package:: bioconductor-bitseq

   |downloads_bioconductor-bitseq| |docker_bioconductor-bitseq|

   :versions: 1.26.0, 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-bitseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bitseq

   and update with::

      conda update bioconductor-bitseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bitseq


.. |required_by_bioconductor-bitseq| conda:required_by:: bioconductor-bitseq
.. |downloads_bioconductor-bitseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bitseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bitseq| image:: https://quay.io/repository/biocontainers/bioconductor-bitseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bitseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bitseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bitseq/README.html

