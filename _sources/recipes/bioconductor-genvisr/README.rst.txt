:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genvisr'
.. highlight: bash

bioconductor-genvisr
====================

.. conda:recipe:: bioconductor-genvisr
   :replaces_section_title:
   :noindex:

   Genomic Visualizations in R

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GenVisR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-genvisr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr/meta.yaml>`_
   :links: biotools: :biotools:`genvisr`

   Produce highly customizable publication quality graphics for genomic data primarily at the cohort level.


.. conda:package:: bioconductor-genvisr

   |downloads_bioconductor-genvisr| |docker_bioconductor-genvisr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-1</code>,  <code>1.14.2-0</code>,  <code>1.14.1-1</code>,  <code>1.14.1-0</code>,  <code>1.12.1-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-1``,  ``1.14.2-0``,  ``1.14.1-1``,  ``1.14.1-0``,  ``1.12.1-0``,  ``1.8.0-0``,  ``1.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-variantannotation: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-ffield: 
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-gridextra: ``>=2.0.0``
   :depends r-gtable: 
   :depends r-gtools: 
   :depends r-plyr: ``>=1.8.3``
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genvisr

   and update with::

      conda update bioconductor-genvisr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genvisr:<tag>

   (see `bioconductor-genvisr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genvisr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genvisr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genvisr
   :alt:   (downloads)
.. |docker_bioconductor-genvisr| image:: https://quay.io/repository/biocontainers/bioconductor-genvisr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genvisr
.. _`bioconductor-genvisr/tags`: https://quay.io/repository/biocontainers/bioconductor-genvisr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genvisr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genvisr/README.html