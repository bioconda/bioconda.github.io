:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichmentbrowser'
.. highlight: bash

bioconductor-enrichmentbrowser
==============================

.. conda:recipe:: bioconductor-enrichmentbrowser
   :replaces_section_title:
   :noindex:

   Seamless navigation through combined results of set\-based and network\-based enrichment analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EnrichmentBrowser.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enrichmentbrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichmentbrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichmentbrowser/meta.yaml>`_

   The EnrichmentBrowser package implements essential functionality for the enrichment analysis of gene expression data. The analysis combines the advantages of set\-based and network\-based enrichment analysis in order to derive high\-confidence gene sets and biological pathways that are differentially regulated in the expression data under investigation. Besides\, the package facilitates the visualization and exploration of such sets and pathways.


.. conda:package:: bioconductor-enrichmentbrowser

   |downloads_bioconductor-enrichmentbrowser| |docker_bioconductor-enrichmentbrowser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.1-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.7-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.32.0-0``,  ``2.30.1-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.7-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.3-0``,  ``2.12.0-0``,  ``2.10.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graphite: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-kegggraph: ``>=1.66.0,<1.67.0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-pathview: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-safe: ``>=3.46.0,<3.47.0``
   :depends bioconductor-spia: ``>=2.58.0,<2.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-hwriter: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-enrichmentbrowser

   and update with::

      mamba update bioconductor-enrichmentbrowser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enrichmentbrowser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enrichmentbrowser:<tag>

   (see `bioconductor-enrichmentbrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enrichmentbrowser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichmentbrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichmentbrowser
   :alt:   (downloads)
.. |docker_bioconductor-enrichmentbrowser| image:: https://quay.io/repository/biocontainers/bioconductor-enrichmentbrowser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichmentbrowser
.. _`bioconductor-enrichmentbrowser/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichmentbrowser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enrichmentbrowser";
        var versions = ["2.36.0","2.32.0","2.30.1","2.28.0","2.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichmentbrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichmentbrowser/README.html