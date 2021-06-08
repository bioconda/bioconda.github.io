:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qdnaseq'
.. highlight: bash

bioconductor-qdnaseq
====================

.. conda:recipe:: bioconductor-qdnaseq
   :replaces_section_title:
   :noindex:

   Quantitative DNA Sequencing for Chromosomal Aberrations

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/QDNAseq.html
   :license: GPL
   :recipe: /`bioconductor-qdnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq/meta.yaml>`_
   :links: biotools: :biotools:`qdnaseq`

   Quantitative DNA sequencing for chromosomal aberrations. The genome is divided into non\-overlapping fixed\-sized bins\, number of sequence reads in each counted\, adjusted with a simultaneous two\-dimensional loess correction for sequence mappability and GC content\, and filtered to remove spurious regions in the genome. Downstream steps of segmentation and calling are also implemented via packages DNAcopy and CGHcall\, respectively.


.. conda:package:: bioconductor-qdnaseq

   |downloads_bioconductor-qdnaseq| |docker_bioconductor-qdnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-cghbase: ``>=1.52.0,<1.53.0``
   :depends bioconductor-cghcall: ``>=2.54.0,<2.55.0``
   :depends bioconductor-dnacopy: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-future: ``>=1.14.0``
   :depends r-future.apply: ``>=1.3.0``
   :depends r-matrixstats: ``>=0.54.0``
   :depends r-r.utils: ``>=2.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qdnaseq

   and update with::

      conda update bioconductor-qdnaseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qdnaseq:<tag>

   (see `bioconductor-qdnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qdnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qdnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qdnaseq
   :alt:   (downloads)
.. |docker_bioconductor-qdnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-qdnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qdnaseq
.. _`bioconductor-qdnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-qdnaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html