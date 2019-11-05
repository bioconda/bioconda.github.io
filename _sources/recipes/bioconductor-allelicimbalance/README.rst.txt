:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-allelicimbalance'
.. highlight: bash

bioconductor-allelicimbalance
=============================

.. conda:recipe:: bioconductor-allelicimbalance
   :replaces_section_title:

   Provides a framework for allelic specific expression investigation using RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/AllelicImbalance.html
   :license: GPL-3
   :recipe: /`bioconductor-allelicimbalance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allelicimbalance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allelicimbalance/meta.yaml>`_

   


.. conda:package:: bioconductor-allelicimbalance

   |downloads_bioconductor-allelicimbalance| |docker_bioconductor-allelicimbalance|

   :versions: 1.24.0-0, 1.22.0-1, 1.20.0-1, 1.20.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-nlme: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-allelicimbalance

   and update with::

      conda update bioconductor-allelicimbalance

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-allelicimbalance:<tag>

   (see `bioconductor-allelicimbalance/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-allelicimbalance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-allelicimbalance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-allelicimbalance
   :alt:   (downloads)
.. |docker_bioconductor-allelicimbalance| image:: https://quay.io/repository/biocontainers/bioconductor-allelicimbalance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-allelicimbalance
.. _`bioconductor-allelicimbalance/tags`: https://quay.io/repository/biocontainers/bioconductor-allelicimbalance?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-allelicimbalance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-allelicimbalance/README.html