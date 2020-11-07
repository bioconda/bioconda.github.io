:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcas'
.. highlight: bash

bioconductor-rcas
=================

.. conda:recipe:: bioconductor-rcas
   :replaces_section_title:
   :noindex:

   RNA Centric Annotation System

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RCAS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rcas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcas/meta.yaml>`_
   :links: biotools: :biotools:`rcas`

   RCAS is an R\/Bioconductor package designed as a generic reporting tool for the functional analysis of transcriptome\-wide regions of interest detected by high\-throughput experiments. Such transcriptomic regions could be\, for instance\, signal peaks detected by CLIP\-Seq analysis for protein\-RNA interaction sites\, RNA modification sites \(alias the epitranscriptome\)\, CAGE\-tag locations\, or any other collection of query regions at the level of the transcriptome. RCAS produces in\-depth annotation summaries and coverage profiles based on the distribution of the query regions with respect to transcript features \(exons\, introns\, 5\'\/3\' UTR regions\, exon\-intron boundaries\, promoter regions\). Moreover\, RCAS can carry out functional enrichment analyses and discriminative motif discovery.


.. conda:package:: bioconductor-rcas

   |downloads_bioconductor-rcas| |docker_bioconductor-rcas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.4-2</code>,  <code>1.5.4-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.5.4-2``,  ``1.5.4-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.0.0-0``,  ``1.0.0.dev75225b9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomation: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends pandoc: ``>=1.12.3``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dt: ``>=0.2``
   :depends r-ggplot2: 
   :depends r-ggseqlogo: 
   :depends r-gprofiler2: 
   :depends r-knitr: ``>=1.12.3``
   :depends r-pbapply: 
   :depends r-pheatmap: 
   :depends r-plotly: ``>=4.5.2``
   :depends r-plotrix: 
   :depends r-proxy: 
   :depends r-ranger: 
   :depends r-rmarkdown: ``>=0.9.5``
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcas

   and update with::

      conda update bioconductor-rcas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcas:<tag>

   (see `bioconductor-rcas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcas
   :alt:   (downloads)
.. |docker_bioconductor-rcas| image:: https://quay.io/repository/biocontainers/bioconductor-rcas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcas
.. _`bioconductor-rcas/tags`: https://quay.io/repository/biocontainers/bioconductor-rcas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcas/README.html