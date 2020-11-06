:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtracklayer'
.. highlight: bash

bioconductor-rtracklayer
========================

.. conda:recipe:: bioconductor-rtracklayer
   :replaces_section_title:
   :noindex:

   R interface to genome annotation files and the UCSC genome browser

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/rtracklayer.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-rtracklayer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtracklayer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtracklayer/meta.yaml>`_
   :links: biotools: :biotools:`rtracklayer`

   Extensible framework for interacting with multiple genome browsers \(currently UCSC built\-in\) and manipulating annotation tracks in various formats \(currently GFF\, BED\, bedGraph\, BED15\, WIG\, BigWig and 2bit built\-in\). The user may export\/import tracks to\/from the supported browsers\, as well as query and modify the browser state\, such as the current viewport.


.. conda:package:: bioconductor-rtracklayer

   |downloads_bioconductor-rtracklayer| |docker_bioconductor-rtracklayer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.2-1</code>,  <code>1.44.2-0</code>,  <code>1.44.0-1</code>,  <code>1.42.1-1</code>,  <code>1.42.1-0</code>,  </span></summary>
      

      ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.2-1``,  ``1.44.2-0``,  ``1.44.0-1``,  ``1.42.1-1``,  ``1.42.1-0``,  ``1.40.6-0``,  ``1.38.3-0``,  ``1.38.0-0``,  ``1.36.6-0``,  ``1.34.2-1``,  ``1.34.1-0``,  ``1.32.2-1``,  ``1.30.1-0``,  ``1.30.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-xvector: ``>=0.30.0,<0.31.0``
   :depends bioconductor-zlibbioc: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends openssl: ``>=1.1.1h,<1.1.2a``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcurl: ``>=1.4-2``
   :depends r-xml: ``>=1.98-0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtracklayer

   and update with::

      conda update bioconductor-rtracklayer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtracklayer:<tag>

   (see `bioconductor-rtracklayer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtracklayer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtracklayer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtracklayer
   :alt:   (downloads)
.. |docker_bioconductor-rtracklayer| image:: https://quay.io/repository/biocontainers/bioconductor-rtracklayer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtracklayer
.. _`bioconductor-rtracklayer/tags`: https://quay.io/repository/biocontainers/bioconductor-rtracklayer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtracklayer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtracklayer/README.html