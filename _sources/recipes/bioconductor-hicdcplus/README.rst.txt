:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdcplus'
.. highlight: bash

bioconductor-hicdcplus
======================

.. conda:recipe:: bioconductor-hicdcplus
   :replaces_section_title:
   :noindex:

   Hi\-C Direct Caller Plus

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/HiCDCPlus.html
   :license: GPL-3
   :recipe: /`bioconductor-hicdcplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdcplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdcplus/meta.yaml>`_

   Systematic 3D interaction calls and differential analysis for Hi\-C and HiChIP. The HiC\-DC\+ \(Hi\-C\/HiChIP direct caller plus\) package enables principled statistical analysis of Hi\-C and HiChIP data sets – including calling significant interactions within a single experiment and performing differential analysis between conditions given replicate experiments – to facilitate global integrative studies. HiC\-DC\+ estimates significant interactions in a Hi\-C or HiChIP experiment directly from the raw contact matrix for each chromosome up to a specified genomic distance\, binned by uniform genomic intervals or restriction enzyme fragments\, by training a background model to account for random polymer ligation and systematic sources of read count variation.


.. conda:package:: bioconductor-hicdcplus

   |downloads_bioconductor-hicdcplus| |docker_bioconductor-hicdcplus|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicinteractions: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-interactionset: ``>=1.20.0,<1.21.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bbmle: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-mass: 
   :depends r-pscl: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicdcplus

   and update with::

      conda update bioconductor-hicdcplus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicdcplus:<tag>

   (see `bioconductor-hicdcplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicdcplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdcplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicdcplus
   :alt:   (downloads)
.. |docker_bioconductor-hicdcplus| image:: https://quay.io/repository/biocontainers/bioconductor-hicdcplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdcplus
.. _`bioconductor-hicdcplus/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdcplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdcplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdcplus/README.html