.. title:: Package Recipe 'bioconductor-shortread'
.. highlight: bash


bioconductor-shortread
======================

.. conda:recipe:: bioconductor-shortread
   :replaces_section_title:

   This package implements sampling\, iteration\, and input of FASTQ files. The package includes functions for filtering and trimming reads\, and for generating a quality assessment report. Data are represented as DNAStringSet\-derived objects\, and easily manipulated for a diversity of purposes.  The package also contains legacy support for early single\-end\, ungapped alignment formats.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ShortRead.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-shortread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shortread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shortread/meta.yaml>`_
   :links: biotools: :biotools:`shortread`

   


.. conda:package:: bioconductor-shortread

   |downloads_bioconductor-shortread| |docker_bioconductor-shortread|

   :versions: 1.40.0, 1.38.0, 1.36.0, 1.34.2, 1.32.0, 1.28.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hwriter`  :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  

   :required~by: |required_by_bioconductor-shortread|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shortread

   and update with::

      conda update bioconductor-shortread

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-shortread


.. |required_by_bioconductor-shortread| conda:required_by:: bioconductor-shortread
.. |downloads_bioconductor-shortread| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shortread.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-shortread| image:: https://quay.io/repository/biocontainers/bioconductor-shortread/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shortread







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shortread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shortread/README.html

