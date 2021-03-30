:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-repitools'
.. highlight: bash

bioconductor-repitools
======================

.. conda:recipe:: bioconductor-repitools
   :replaces_section_title:
   :noindex:

   Epigenomic tools

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Repitools.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-repitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repitools/meta.yaml>`_
   :links: biotools: :biotools:`repitools`

   Tools for the analysis of enrichment\-based epigenomic data.  Features include summarization and visualization of epigenomic data across promoters according to gene expression context\, finding regions of differential methylation\/binding\, BayMeth for quantifying methylation etc.


.. conda:package:: bioconductor-repitools

   |downloads_bioconductor-repitools| |docker_bioconductor-repitools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-dnacopy: ``>=1.64.0,<1.65.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-ringo: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-gplots: 
   :depends r-gsmoothr: 
   :depends r-mass: 
   :depends r-rsolnp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-repitools

   and update with::

      conda update bioconductor-repitools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-repitools:<tag>

   (see `bioconductor-repitools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-repitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-repitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-repitools
   :alt:   (downloads)
.. |docker_bioconductor-repitools| image:: https://quay.io/repository/biocontainers/bioconductor-repitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-repitools
.. _`bioconductor-repitools/tags`: https://quay.io/repository/biocontainers/bioconductor-repitools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-repitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-repitools/README.html