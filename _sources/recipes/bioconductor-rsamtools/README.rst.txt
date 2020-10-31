:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsamtools'
.. highlight: bash

bioconductor-rsamtools
======================

.. conda:recipe:: bioconductor-rsamtools
   :replaces_section_title:
   :noindex:

   Binary alignment \(BAM\)\, FASTA\, variant call \(BCF\)\, and tabix file import

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Rsamtools.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rsamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsamtools/meta.yaml>`_
   :links: biotools: :biotools:`rsamtools`, doi: :doi:`10.1038/nmeth.3252`

   This package provides an interface to the \'samtools\'\, \'bcftools\'\, and \'tabix\' utilities for manipulating SAM \(Sequence Alignment \/ Map\)\, FASTA\, binary variant call \(BCF\) and compressed indexed tab\-delimited \(tabix\) files.


.. conda:package:: bioconductor-rsamtools

   |downloads_bioconductor-rsamtools| |docker_bioconductor-rsamtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.3-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.1-0</code>,  </span></summary>
      

      ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.34.0-0``,  ``1.32.3-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rhtslib: ``>=1.22.0,<1.23.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-xvector: ``>=0.30.0,<0.31.0``
   :depends bioconductor-zlibbioc: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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