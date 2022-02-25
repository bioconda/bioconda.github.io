:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signaturesearch'
.. highlight: bash

bioconductor-signaturesearch
============================

.. conda:recipe:: bioconductor-signaturesearch
   :replaces_section_title:
   :noindex:

   Environment for Gene Expression Searching Combined with Functional Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/signatureSearch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-signaturesearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearch/meta.yaml>`_

   This package implements algorithms and data structures for performing gene expression signature \(GES\) searches\, and subsequently interpreting the results functionally with specialized enrichment methods.


.. conda:package:: bioconductor-signaturesearch

   |downloads_bioconductor-signaturesearch| |docker_bioconductor-signaturesearch|

   :versions:
      
      

      ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-clusterprofiler: ``>=4.2.0,<4.3.0``
   :depends bioconductor-delayedarray: ``>=0.20.0,<0.21.0``
   :depends bioconductor-dose: ``>=3.20.0,<3.21.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-fgsea: ``>=1.20.0,<1.21.0``
   :depends bioconductor-gseabase: ``>=1.56.0,<1.57.0``
   :depends bioconductor-hdf5array: ``>=1.22.0,<1.23.0``
   :depends bioconductor-qvalue: ``>=2.26.0,<2.27.0``
   :depends bioconductor-reactome.db: ``>=1.77.0,<1.78.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fastmatch: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrix: 
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


.. raw:: html

    <script>
        var package = "bioconductor-signaturesearch";
        var versions = ["1.8.2","1.8.0","1.6.1","1.4.3","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signaturesearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signaturesearch/README.html