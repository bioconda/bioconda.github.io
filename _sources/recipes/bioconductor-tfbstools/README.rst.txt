:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfbstools'
.. highlight: bash

bioconductor-tfbstools
======================

.. conda:recipe:: bioconductor-tfbstools
   :replaces_section_title:

   Software Package for Transcription Factor Binding Site \(TFBS\) Analysis

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/TFBSTools.html
   :license: GPL-2
   :recipe: /`bioconductor-tfbstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfbstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfbstools/meta.yaml>`_
   :links: biotools: :biotools:`tfbstools`

   TFBSTools is a package for the analysis and manipulation of transcription factor binding sites. It includes matrices conversion between Position Frequency Matirx \(PFM\)\, Position Weight Matirx \(PWM\) and Information Content Matrix \(ICM\). It can also scan putative TFBS from sequence\/alignment\, query JASPAR database and provides a wrapper of de novo motif discovery software.


.. conda:package:: bioconductor-tfbstools

   |downloads_bioconductor-tfbstools| |docker_bioconductor-tfbstools|

   :versions: 1.24.0-0, 1.22.0-1, 1.20.0-1, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.15.7-0, 1.14.2-0, 1.12.2-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-cner: >=1.22.0,<1.23.0
   :depends bioconductor-dirichletmultinomial: >=1.28.0,<1.29.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-seqlogo: >=1.52.0,<1.53.0
   :depends bioconductor-xvector: >=0.26.0,<0.27.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-catools: >=1.17.1
   :depends r-dbi: >=0.6
   :depends r-gtools: >=3.5.0
   :depends r-rsqlite: >=1.0.0
   :depends r-tfmpvalue: >=0.0.5
   :depends r-xml: >=3.98-1.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tfbstools

   and update with::

      conda update bioconductor-tfbstools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfbstools:<tag>

   (see `bioconductor-tfbstools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfbstools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfbstools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfbstools
   :alt:   (downloads)
.. |docker_bioconductor-tfbstools| image:: https://quay.io/repository/biocontainers/bioconductor-tfbstools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfbstools
.. _`bioconductor-tfbstools/tags`: https://quay.io/repository/biocontainers/bioconductor-tfbstools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfbstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfbstools/README.html