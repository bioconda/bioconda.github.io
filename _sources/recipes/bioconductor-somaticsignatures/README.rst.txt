:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-somaticsignatures'
.. highlight: bash

bioconductor-somaticsignatures
==============================

.. conda:recipe:: bioconductor-somaticsignatures
   :replaces_section_title:
   :noindex:

   Somatic Signatures

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SomaticSignatures.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-somaticsignatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somaticsignatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somaticsignatures/meta.yaml>`_
   :links: biotools: :biotools:`somaticsignatures`

   The SomaticSignatures package identifies mutational signatures of single nucleotide variants \(SNVs\).  It provides a infrastructure related to the methodology described in Nik\-Zainal \(2012\, Cell\)\, with flexibility in the matrix decomposition algorithms.


.. conda:package:: bioconductor-somaticsignatures

   |downloads_bioconductor-somaticsignatures| |docker_bioconductor-somaticsignatures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-ggbio: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-pcamethods: ``>=1.84.0,<1.85.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-nmf: 
   :depends r-proxy: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-somaticsignatures

   and update with::

      conda update bioconductor-somaticsignatures

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-somaticsignatures:<tag>

   (see `bioconductor-somaticsignatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-somaticsignatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-somaticsignatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-somaticsignatures
   :alt:   (downloads)
.. |docker_bioconductor-somaticsignatures| image:: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures
.. _`bioconductor-somaticsignatures/tags`: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-somaticsignatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-somaticsignatures/README.html