:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oveseg'
.. highlight: bash

bioconductor-oveseg
===================

.. conda:recipe:: bioconductor-oveseg
   :replaces_section_title:

   OVESEG\-test to detect tissue\/cell\-specific markers

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/OVESEG.html
   :license: GPL-2
   :recipe: /`bioconductor-oveseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oveseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oveseg/meta.yaml>`_

   An R package for multiple\-group comparison to detect tissue\/cell\-specific marker genes among subtypes. It provides functions to compute OVESEG\-test statistics\, derive component weights in the mixture null distribution model and estimate p\-values from weightedly aggregated permutations. Obtained posterior probabilities of component null hypotheses can also portrait all kinds of upregulation patterns among subtypes.


.. conda:package:: bioconductor-oveseg

   |downloads_bioconductor-oveseg| |docker_bioconductor-oveseg|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-fdrtool: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oveseg

   and update with::

      conda update bioconductor-oveseg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oveseg:<tag>

   (see `bioconductor-oveseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oveseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oveseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oveseg
   :alt:   (downloads)
.. |docker_bioconductor-oveseg| image:: https://quay.io/repository/biocontainers/bioconductor-oveseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oveseg
.. _`bioconductor-oveseg/tags`: https://quay.io/repository/biocontainers/bioconductor-oveseg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oveseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oveseg/README.html