:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quasr'
.. highlight: bash

bioconductor-quasr
==================

.. conda:recipe:: bioconductor-quasr
   :replaces_section_title:
   :noindex:

   Quantify and Annotate Short Reads in R

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/QuasR.html
   :license: GPL-2
   :recipe: /`bioconductor-quasr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quasr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quasr/meta.yaml>`_
   :links: biotools: :biotools:`quasr`

   This package provides a framework for the quantification and analysis of Short Reads. It covers a complete workflow starting from raw sequence reads\, over creation of alignments and quality control plots\, to the quantification of genomic regions of interest.


.. conda:package:: bioconductor-quasr

   |downloads_bioconductor-quasr| |docker_bioconductor-quasr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.2-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicfiles: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rbowtie: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rhtslib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-shortread: ``>=1.50.0,<1.51.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quasr

   and update with::

      conda update bioconductor-quasr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quasr:<tag>

   (see `bioconductor-quasr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quasr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quasr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quasr
   :alt:   (downloads)
.. |docker_bioconductor-quasr| image:: https://quay.io/repository/biocontainers/bioconductor-quasr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quasr
.. _`bioconductor-quasr/tags`: https://quay.io/repository/biocontainers/bioconductor-quasr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quasr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quasr/README.html