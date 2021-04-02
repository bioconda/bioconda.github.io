:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deseq2'
.. highlight: bash

bioconductor-deseq2
===================

.. conda:recipe:: bioconductor-deseq2
   :replaces_section_title:
   :noindex:

   Differential gene expression analysis based on the negative binomial distribution

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DESeq2.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-deseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq2/meta.yaml>`_
   :links: biotools: :biotools:`deseq2`, doi: :doi:`10.1186/s13059-014-0550-8`, usegalaxy-eu: :usegalaxy-eu:`deseq2`

   Estimate variance\-mean dependence in count data from high\-throughput sequencing assays and test for differential expression based on a model using the negative binomial distribution.


.. conda:package:: bioconductor-deseq2

   |downloads_bioconductor-deseq2| |docker_bioconductor-deseq2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.1-1``,  ``1.18.0-0``,  ``1.16.1-3``,  ``1.16.1-2``,  ``1.16.1-0``,  ``1.14.1-0``,  ``1.12.4-5``,  ``1.12.4-4``,  ``1.12.4-3``,  ``1.12.4-2``,  ``1.12.4-1``,  ``1.10.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends bioconductor-geneplotter: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-locfit: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deseq2

   and update with::

      conda update bioconductor-deseq2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deseq2:<tag>

   (see `bioconductor-deseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deseq2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deseq2
   :alt:   (downloads)
.. |docker_bioconductor-deseq2| image:: https://quay.io/repository/biocontainers/bioconductor-deseq2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deseq2
.. _`bioconductor-deseq2/tags`: https://quay.io/repository/biocontainers/bioconductor-deseq2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deseq2/README.html