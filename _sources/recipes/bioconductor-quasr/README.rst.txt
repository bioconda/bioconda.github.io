:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quasr'
.. highlight: bash

bioconductor-quasr
==================

.. conda:recipe:: bioconductor-quasr
   :replaces_section_title:

   This package provides a framework for the quantification and analysis of Short Reads. It covers a complete workflow starting from raw sequence reads\, over creation of alignments and quality control plots\, to the quantification of genomic regions of interest.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/QuasR.html
   :license: GPL-2
   :recipe: /`bioconductor-quasr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quasr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quasr/meta.yaml>`_
   :links: biotools: :biotools:`quasr`

   


.. conda:package:: bioconductor-quasr

   |downloads_bioconductor-quasr| |docker_bioconductor-quasr|

   :versions: 1.24.2-0, 1.22.1-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicfiles: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rbowtie: >=1.24.0,<1.25.0
   :depends bioconductor-rhisat2: >=1.0.0,<1.1.0
   :depends bioconductor-rhtslib: >=1.16.0,<1.17.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-shortread: >=1.42.0,<1.43.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quasr

   and update with::

      conda update bioconductor-quasr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quasr:<tag>

   (see `bioconductor-quasr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quasr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quasr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quasr
   :alt:   (downloads)
.. |docker_bioconductor-quasr| image:: https://quay.io/repository/biocontainers/bioconductor-quasr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quasr
.. _`bioconductor-quasr/tags`: https://quay.io/repository/biocontainers/bioconductor-quasr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quasr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quasr/README.html