:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shortread'
.. highlight: bash

bioconductor-shortread
======================

.. conda:recipe:: bioconductor-shortread
   :replaces_section_title:
   :noindex:

   FASTQ input and manipulation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ShortRead.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-shortread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shortread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shortread/meta.yaml>`_
   :links: biotools: :biotools:`shortread`

   This package implements sampling\, iteration\, and input of FASTQ files. The package includes functions for filtering and trimming reads\, and for generating a quality assessment report. Data are represented as DNAStringSet\-derived objects\, and easily manipulated for a diversity of purposes.  The package also contains legacy support for early single\-end\, ungapped alignment formats.


.. conda:package:: bioconductor-shortread

   |downloads_bioconductor-shortread| |docker_bioconductor-shortread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.2-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.2-0``,  ``1.32.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rhtslib: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-xvector: ``>=0.30.0,<0.31.0``
   :depends bioconductor-zlibbioc: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-hwriter: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shortread

   and update with::

      conda update bioconductor-shortread

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shortread:<tag>

   (see `bioconductor-shortread/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shortread| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shortread.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shortread
   :alt:   (downloads)
.. |docker_bioconductor-shortread| image:: https://quay.io/repository/biocontainers/bioconductor-shortread/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shortread
.. _`bioconductor-shortread/tags`: https://quay.io/repository/biocontainers/bioconductor-shortread?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shortread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shortread/README.html