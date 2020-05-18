:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iggeneusage'
.. highlight: bash

bioconductor-iggeneusage
========================

.. conda:recipe:: bioconductor-iggeneusage
   :replaces_section_title:

   Differential gene usage in immune repertoires

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/IgGeneUsage.html
   :license: file LICENSE
   :recipe: /`bioconductor-iggeneusage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iggeneusage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iggeneusage/meta.yaml>`_

   Decoding the properties of immune repertoires is key in understanding the response of adaptive immunity to challenges such as viral infection. One important task in immune repertoire profiling is the detection of biases in Ig gene usage between biological conditions. IgGeneUsage is a computational tool for the analysis of differential gene usage in immune repertoires. It employs Bayesian hierarchical models to fit complex gene usage data from immune repertoire sequencing experiments and quantifies Ig gene usage biases as probabilities.


.. conda:package:: bioconductor-iggeneusage

   |downloads_bioconductor-iggeneusage| |docker_bioconductor-iggeneusage|

   :versions: 1.2.1-0, 1.0.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-rcpp: >=0.12.0
   :depends r-reshape2: >=1.4.3
   :depends r-rstan: >=2.19.2
   :depends r-stanheaders: >2.18.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iggeneusage

   and update with::

      conda update bioconductor-iggeneusage

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iggeneusage:<tag>

   (see `bioconductor-iggeneusage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iggeneusage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iggeneusage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iggeneusage
   :alt:   (downloads)
.. |docker_bioconductor-iggeneusage| image:: https://quay.io/repository/biocontainers/bioconductor-iggeneusage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iggeneusage
.. _`bioconductor-iggeneusage/tags`: https://quay.io/repository/biocontainers/bioconductor-iggeneusage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iggeneusage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iggeneusage/README.html