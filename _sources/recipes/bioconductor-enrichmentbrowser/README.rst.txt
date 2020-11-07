:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichmentbrowser'
.. highlight: bash

bioconductor-enrichmentbrowser
==============================

.. conda:recipe:: bioconductor-enrichmentbrowser
   :replaces_section_title:
   :noindex:

   Seamless navigation through combined results of set\-based and network\-based enrichment analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/EnrichmentBrowser.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enrichmentbrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichmentbrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichmentbrowser/meta.yaml>`_

   The EnrichmentBrowser package implements essential functionality for the enrichment analysis of gene expression data. The analysis combines the advantages of set\-based and network\-based enrichment analysis in order to derive high\-confidence gene sets and biological pathways that are differentially regulated in the expression data under investigation. Besides\, the package facilitates the visualization and exploration of such sets and pathways.


.. conda:package:: bioconductor-enrichmentbrowser

   |downloads_bioconductor-enrichmentbrowser| |docker_bioconductor-enrichmentbrowser|

   :versions:
      
      

      ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.3-0``,  ``2.12.0-0``,  ``2.10.11-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-go.db: ``>=3.12.1,<3.13.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-graphite: ``>=1.36.0,<1.37.0``
   :depends bioconductor-gseabase: ``>=1.52.0,<1.53.0``
   :depends bioconductor-kegggraph: ``>=1.50.0,<1.51.0``
   :depends bioconductor-keggrest: ``>=1.30.0,<1.31.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-pathview: ``>=1.30.0,<1.31.0``
   :depends bioconductor-rgraphviz: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-safe: ``>=3.30.0,<3.31.0``
   :depends bioconductor-spia: ``>=2.42.0,<2.43.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :depends r-hwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enrichmentbrowser

   and update with::

      conda update bioconductor-enrichmentbrowser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enrichmentbrowser:<tag>

   (see `bioconductor-enrichmentbrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enrichmentbrowser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichmentbrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichmentbrowser
   :alt:   (downloads)
.. |docker_bioconductor-enrichmentbrowser| image:: https://quay.io/repository/biocontainers/bioconductor-enrichmentbrowser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichmentbrowser
.. _`bioconductor-enrichmentbrowser/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichmentbrowser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichmentbrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichmentbrowser/README.html