:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomation'
.. highlight: bash

bioconductor-genomation
=======================

.. conda:recipe:: bioconductor-genomation
   :replaces_section_title:
   :noindex:

   Summary\, annotation and visualization of genomic data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/genomation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomation/meta.yaml>`_
   :links: biotools: :biotools:`genomation`

   A package for summary and annotation of genomic intervals. Users can visualize and quantify genomic intervals over pre\-defined functional regions\, such as promoters\, exons\, introns\, etc. The genomic intervals represent regions with a defined chromosome position\, which may be associated with a score\, such as aligned reads from HT\-seq experiments\, TF binding sites\, methylation scores\, etc. The package can use any tabular genomic feature data as long as it has minimal information on the locations of genomic intervals. In addition\, It can use BAM or BigWig files as input.


.. conda:package:: bioconductor-genomation

   |downloads_bioconductor-genomation| |docker_bioconductor-genomation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-impute: ``>=1.64.0,<1.65.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-seqpattern: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=9.0.1``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-gridbase: 
   :depends r-matrixstats: 
   :depends r-plotrix: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.12.14``
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-runit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomation

   and update with::

      conda update bioconductor-genomation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomation:<tag>

   (see `bioconductor-genomation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomation
   :alt:   (downloads)
.. |docker_bioconductor-genomation| image:: https://quay.io/repository/biocontainers/bioconductor-genomation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomation
.. _`bioconductor-genomation/tags`: https://quay.io/repository/biocontainers/bioconductor-genomation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomation/README.html