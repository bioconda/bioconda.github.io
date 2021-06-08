:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-magar'
.. highlight: bash

bioconductor-magar
==================

.. conda:recipe:: bioconductor-magar
   :replaces_section_title:
   :noindex:

   MAGAR\: R\-package to compute methylation Quantitative Trait Loci \(methQTL\) from DNA methylation and genotyping data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MAGAR.html
   :license: GPL-3
   :recipe: /`bioconductor-magar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magar/meta.yaml>`_

   \"Methylation\-Aware Genotype Association in R\" \(MAGAR\) computes methQTL from DNA methylation and genotyping data from matched samples. MAGAR uses a linear modeling stragety to call CpGs\/SNPs that are methQTLs. MAGAR accounts for the local correlation structure of CpGs.


.. conda:package:: bioconductor-magar

   |downloads_bioconductor-magar| |docker_bioconductor-magar|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-crlmm: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hdf5array: ``>=1.20.0,<1.21.0``
   :depends bioconductor-impute: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rnbeads: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rnbeads.hg19: ``>=1.24.0,<1.25.0``
   :depends bioconductor-snpstats: ``>=1.42.0,<1.43.0``
   :depends r-argparse: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bigstatsr: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-ff: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rjson: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-magar

   and update with::

      conda update bioconductor-magar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-magar:<tag>

   (see `bioconductor-magar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-magar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-magar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-magar
   :alt:   (downloads)
.. |docker_bioconductor-magar| image:: https://quay.io/repository/biocontainers/bioconductor-magar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-magar
.. _`bioconductor-magar/tags`: https://quay.io/repository/biocontainers/bioconductor-magar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-magar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-magar/README.html