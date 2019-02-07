.. title:: Package Recipe 'bioconductor-quasr'
.. highlight: bash


bioconductor-quasr
==================

.. conda:recipe:: bioconductor-quasr
   :replaces_section_title:

   This package provides a framework for the quantification and analysis of Short Reads. It covers a complete workflow starting from raw sequence reads\, over creation of alignments and quality control plots\, to the quantification of genomic regions of interest.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/QuasR.html
   :license: GPL-2
   :recipe: /`bioconductor-quasr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quasr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quasr/meta.yaml>`_
   :links: biotools: :biotools:`quasr`

   


.. conda:package:: bioconductor-quasr

   |downloads_bioconductor-quasr| |docker_bioconductor-quasr|

   :versions: 1.22.1, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rbowtie` >=1.22.0,<1.23.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  

   :required~by: |required_by_bioconductor-quasr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quasr

   and update with::

      conda update bioconductor-quasr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-quasr


.. |required_by_bioconductor-quasr| conda:required_by:: bioconductor-quasr
.. |downloads_bioconductor-quasr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quasr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-quasr| image:: https://quay.io/repository/biocontainers/bioconductor-quasr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quasr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quasr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quasr/README.html

