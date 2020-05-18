:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffhic'
.. highlight: bash

bioconductor-diffhic
====================

.. conda:recipe:: bioconductor-diffhic
   :replaces_section_title:

   Differential Analyis of Hi\-C Data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/diffHic.html
   :license: GPL-3
   :recipe: /`bioconductor-diffhic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffhic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffhic/meta.yaml>`_

   Detects differential interactions across biological conditions in a Hi\-C experiment. Methods are provided for read alignment and data pre\-processing into interaction counts. Statistical analysis is based on edgeR and supports normalization and filtering. Several visualization options are also available.


.. conda:package:: bioconductor-diffhic

   |downloads_bioconductor-diffhic| |docker_bioconductor-diffhic|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-1, 1.14.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-csaw: >=1.22.0,<1.23.0
   :depends bioconductor-edger: >=3.30.0,<3.31.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-interactionset: >=1.16.0,<1.17.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-rhdf5: >=2.32.0,<2.33.0
   :depends bioconductor-rhtslib: >=1.20.0,<1.21.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends bioconductor-zlibbioc: >=1.34.0,<1.35.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-locfit: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffhic

   and update with::

      conda update bioconductor-diffhic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffhic:<tag>

   (see `bioconductor-diffhic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffhic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffhic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffhic
   :alt:   (downloads)
.. |docker_bioconductor-diffhic| image:: https://quay.io/repository/biocontainers/bioconductor-diffhic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffhic
.. _`bioconductor-diffhic/tags`: https://quay.io/repository/biocontainers/bioconductor-diffhic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffhic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffhic/README.html