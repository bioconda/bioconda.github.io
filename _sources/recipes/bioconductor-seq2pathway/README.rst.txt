:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seq2pathway'
.. highlight: bash

bioconductor-seq2pathway
========================

.. conda:recipe:: bioconductor-seq2pathway
   :replaces_section_title:
   :noindex:

   a novel tool for functional gene\-set \(or termed as pathway\) analysis of next\-generation sequencing data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/seq2pathway.html
   :license: GPL-2
   :recipe: /`bioconductor-seq2pathway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway/meta.yaml>`_
   :links: biotools: :biotools:`seq2pathway`

   Seq2pathway is a novel tool for functional gene\-set \(or termed as pathway\) analysis of next\-generation sequencing data\, consisting of \"seq2gene\" and \"gene2path\" components. The seq2gene links sequence\-level measurements of genomic regions \(including SNPs or point mutation coordinates\) to gene\-level scores\, and the gene2pathway summarizes gene scores to pathway\-scores for each sample. The seq2gene has the feasibility to assign both coding and non\-exon regions to a broader range of neighboring genes than only the nearest one\, thus facilitating the study of functional non\-coding regions. The gene2pathway takes into account the quantity of significance for gene members within a pathway compared those outside a pathway. The output of seq2pathway is a general structure of quantitative pathway\-level scores\, thus allowing one to functional interpret such datasets as RNA\-seq\, ChIP\-seq\, GWAS\, and derived from other next generational sequencing experiments.


.. conda:package:: bioconductor-seq2pathway

   |downloads_bioconductor-seq2pathway| |docker_bioconductor-seq2pathway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-1</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-seq2pathway.data: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gsa: 
   :depends r-nnet: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seq2pathway

   and update with::

      conda update bioconductor-seq2pathway

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seq2pathway:<tag>

   (see `bioconductor-seq2pathway/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seq2pathway| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seq2pathway.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seq2pathway
   :alt:   (downloads)
.. |docker_bioconductor-seq2pathway| image:: https://quay.io/repository/biocontainers/bioconductor-seq2pathway/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seq2pathway
.. _`bioconductor-seq2pathway/tags`: https://quay.io/repository/biocontainers/bioconductor-seq2pathway?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seq2pathway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seq2pathway/README.html