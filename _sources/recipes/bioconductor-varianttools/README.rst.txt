:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-varianttools'
.. highlight: bash

bioconductor-varianttools
=========================

.. conda:recipe:: bioconductor-varianttools
   :replaces_section_title:
   :noindex:

   Tools for Exploratory Analysis of Variant Calls

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/VariantTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-varianttools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varianttools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varianttools/meta.yaml>`_
   :links: biotools: :biotools:`varianttools`, doi: :doi:`10.1101/027227`

   Explore\, diagnose\, and compare variant calls using filters.


.. conda:package:: bioconductor-varianttools

   |downloads_bioconductor-varianttools| |docker_bioconductor-varianttools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-varianttools

   and update with::

      conda update bioconductor-varianttools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-varianttools:<tag>

   (see `bioconductor-varianttools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-varianttools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-varianttools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-varianttools
   :alt:   (downloads)
.. |docker_bioconductor-varianttools| image:: https://quay.io/repository/biocontainers/bioconductor-varianttools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-varianttools
.. _`bioconductor-varianttools/tags`: https://quay.io/repository/biocontainers/bioconductor-varianttools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-varianttools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-varianttools/README.html