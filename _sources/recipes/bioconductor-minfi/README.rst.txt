:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minfi'
.. highlight: bash

bioconductor-minfi
==================

.. conda:recipe:: bioconductor-minfi
   :replaces_section_title:
   :noindex:

   Analyze Illumina Infinium DNA methylation arrays

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/minfi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfi/meta.yaml>`_
   :links: biotools: :biotools:`minfi`

   Tools to analyze \& visualize Illumina Infinium methylation arrays.


.. conda:package:: bioconductor-minfi

   |downloads_bioconductor-minfi| |docker_bioconductor-minfi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.2-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.2-0``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.16.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bumphunter: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-genefilter: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-geoquery: ``>=2.60.0,<2.61.0``
   :depends bioconductor-hdf5array: ``>=1.20.0,<1.21.0``
   :depends bioconductor-illuminaio: ``>=0.34.0,<0.35.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-siggenes: ``>=1.66.0,<1.67.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-beanplot: 
   :depends r-data.table: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-nlme: 
   :depends r-nor1mix: 
   :depends r-quadprog: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minfi

   and update with::

      conda update bioconductor-minfi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minfi:<tag>

   (see `bioconductor-minfi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minfi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minfi
   :alt:   (downloads)
.. |docker_bioconductor-minfi| image:: https://quay.io/repository/biocontainers/bioconductor-minfi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfi
.. _`bioconductor-minfi/tags`: https://quay.io/repository/biocontainers/bioconductor-minfi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfi/README.html