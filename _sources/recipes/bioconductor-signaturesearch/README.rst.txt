:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signaturesearch'
.. highlight: bash

bioconductor-signaturesearch
============================

.. conda:recipe:: bioconductor-signaturesearch
   :replaces_section_title:

   Environment for Gene Expression Searching Combined with Functional Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/signatureSearch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-signaturesearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearch/meta.yaml>`_

   This package implements algorithms and data structures for performing gene expression signature \(GES\) searches\, and subsequently interpreting the results functionally with specialized enrichment methods.


.. conda:package:: bioconductor-signaturesearch

   |downloads_bioconductor-signaturesearch| |docker_bioconductor-signaturesearch|

   :versions: 1.0.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-clusterprofiler: >=3.14.0,<3.15.0
   :depends bioconductor-dose: >=3.12.0,<3.13.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends bioconductor-fgsea: >=1.12.0,<1.13.0
   :depends bioconductor-gcmap: >=1.30.0,<1.31.0
   :depends bioconductor-gseabase: >=1.48.0,<1.49.0
   :depends bioconductor-qvalue: >=2.18.0,<2.19.0
   :depends bioconductor-rhdf5: >=2.30.0,<2.31.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fastmatch: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
   :depends r-scales: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-signaturesearch

   and update with::

      conda update bioconductor-signaturesearch

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signaturesearch:<tag>

   (see `bioconductor-signaturesearch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signaturesearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signaturesearch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signaturesearch
   :alt:   (downloads)
.. |docker_bioconductor-signaturesearch| image:: https://quay.io/repository/biocontainers/bioconductor-signaturesearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signaturesearch
.. _`bioconductor-signaturesearch/tags`: https://quay.io/repository/biocontainers/bioconductor-signaturesearch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signaturesearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signaturesearch/README.html