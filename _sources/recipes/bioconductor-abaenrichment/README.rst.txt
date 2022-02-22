:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-abaenrichment'
.. highlight: bash

bioconductor-abaenrichment
==========================

.. conda:recipe:: bioconductor-abaenrichment
   :replaces_section_title:
   :noindex:

   Gene expression enrichment in human brain regions

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ABAEnrichment.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-abaenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abaenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abaenrichment/meta.yaml>`_
   :links: biotools: :biotools:`abaenrichment`

   The package ABAEnrichment is designed to test for enrichment of user defined candidate genes in the set of expressed genes in different human brain regions. The core function \'aba\_enrich\' integrates the expression of the candidate gene set \(averaged across donors\) and the structural information of the brain using an ontology\, both provided by the Allen Brain Atlas project. \'aba\_enrich\' interfaces the ontology enrichment software FUNC to perform the statistical analyses. Additional functions provided in this package like \'get\_expression\' and \'plot\_expression\' facilitate exploring the expression data\, and besides the standard candidate vs. background gene set enrichment\, also three additional tests are implemented\, e.g. for cases when genes are ranked instead of divided into candidate and background.


.. conda:package:: bioconductor-abaenrichment

   |downloads_bioconductor-abaenrichment| |docker_bioconductor-abaenrichment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.14.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-abadata: ``>=1.24.0,<1.25.0``
   :depends bioconductor-gofuncr: ``>=1.14.0,<1.15.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.10.4``
   :depends r-gplots: ``>=2.14.2``
   :depends r-gtools: ``>=3.5.0``
   :depends r-rcpp: ``>=0.11.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-abaenrichment

   and update with::

      conda update bioconductor-abaenrichment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-abaenrichment:<tag>

   (see `bioconductor-abaenrichment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-abaenrichment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-abaenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-abaenrichment
   :alt:   (downloads)
.. |docker_bioconductor-abaenrichment| image:: https://quay.io/repository/biocontainers/bioconductor-abaenrichment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-abaenrichment
.. _`bioconductor-abaenrichment/tags`: https://quay.io/repository/biocontainers/bioconductor-abaenrichment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-abaenrichment";
        var versions = ["1.24.0","1.24.0","1.22.0","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-abaenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-abaenrichment/README.html