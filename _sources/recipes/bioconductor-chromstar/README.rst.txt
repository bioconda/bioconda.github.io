:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromstar'
.. highlight: bash

bioconductor-chromstar
======================

.. conda:recipe:: bioconductor-chromstar
   :replaces_section_title:
   :noindex:

   Combinatorial and Differential Chromatin State Analysis for ChIP\-Seq Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/chromstaR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chromstar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstar/meta.yaml>`_
   :links: biotools: :biotools:`chromstar`, doi: :doi:`10.1101/038612`

   This package implements functions for combinatorial and differential analysis of ChIP\-seq data. It includes uni\- and multivariate peak\-calling\, export to genome browser viewable files\, and functions for enrichment analyses.


.. conda:package:: bioconductor-chromstar

   |downloads_bioconductor-chromstar| |docker_bioconductor-chromstar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.10.0-1</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bamsignals: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-chromstardata: ``>=1.18.0,<1.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mvtnorm: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromstar

   and update with::

      conda update bioconductor-chromstar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromstar:<tag>

   (see `bioconductor-chromstar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromstar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromstar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromstar
   :alt:   (downloads)
.. |docker_bioconductor-chromstar| image:: https://quay.io/repository/biocontainers/bioconductor-chromstar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromstar
.. _`bioconductor-chromstar/tags`: https://quay.io/repository/biocontainers/bioconductor-chromstar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromstar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromstar/README.html