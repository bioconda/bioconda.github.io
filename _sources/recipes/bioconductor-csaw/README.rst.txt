:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-csaw'
.. highlight: bash

bioconductor-csaw
=================

.. conda:recipe:: bioconductor-csaw
   :replaces_section_title:
   :noindex:

   ChIP\-Seq Analysis with Windows

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/csaw.html
   :license: GPL-3
   :recipe: /`bioconductor-csaw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csaw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csaw/meta.yaml>`_
   :links: biotools: :biotools:`csaw`

   Detection of differentially bound regions in ChIP\-seq data with sliding windows\, with methods for normalization and proper FDR control.


.. conda:package:: bioconductor-csaw

   |downloads_bioconductor-csaw| |docker_bioconductor-csaw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.3-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.3-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-metapod: ``>=1.0.0,<1.1.0``
   :depends bioconductor-rhtslib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-zlibbioc: ``>=1.38.0,<1.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-csaw

   and update with::

      conda update bioconductor-csaw

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-csaw:<tag>

   (see `bioconductor-csaw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-csaw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-csaw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-csaw
   :alt:   (downloads)
.. |docker_bioconductor-csaw| image:: https://quay.io/repository/biocontainers/bioconductor-csaw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-csaw
.. _`bioconductor-csaw/tags`: https://quay.io/repository/biocontainers/bioconductor-csaw?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-csaw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-csaw/README.html