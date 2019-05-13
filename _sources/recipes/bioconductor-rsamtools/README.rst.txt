:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsamtools'
.. highlight: bash

bioconductor-rsamtools
======================

.. conda:recipe:: bioconductor-rsamtools
   :replaces_section_title:

   This package provides an interface to the \'samtools\'\, \'bcftools\'\, and \'tabix\' utilities \(see \'LICENCE\'\) for manipulating SAM \(Sequence Alignment \/ Map\)\, FASTA\, binary variant call \(BCF\) and compressed indexed tab\-delimited \(tabix\) files.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rsamtools.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rsamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsamtools/meta.yaml>`_
   :links: biotools: :biotools:`rsamtools`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rsamtools

   |downloads_bioconductor-rsamtools| |docker_bioconductor-rsamtools|

   :versions: 1.34.0-0, 1.32.3-0, 1.30.0-0, 1.28.0-0, 1.26.1-0, 1.24.0-0, 1.22.0-1, 1.22.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-xvector: >=0.22.0,<0.23.0
   :depends bioconductor-zlibbioc: >=1.28.0,<1.29.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bitops: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rsamtools

   and update with::

      conda update bioconductor-rsamtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsamtools:<tag>

   (see `bioconductor-rsamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsamtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsamtools
   :alt:   (downloads)
.. |docker_bioconductor-rsamtools| image:: https://quay.io/repository/biocontainers/bioconductor-rsamtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsamtools
.. _`bioconductor-rsamtools/tags`: https://quay.io/repository/biocontainers/bioconductor-rsamtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsamtools/README.html