:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gage'
.. highlight: bash

bioconductor-gage
=================

.. conda:recipe:: bioconductor-gage
   :replaces_section_title:
   :noindex:

   Generally Applicable Gene\-set Enrichment for Pathway Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gage.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-gage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gage/meta.yaml>`_
   :links: biotools: :biotools:`gage`

   GAGE is a published method for gene set \(enrichment or GSEA\) or pathway analysis. GAGE is generally applicable independent of microarray or RNA\-Seq data attributes including sample sizes\, experimental designs\, assay platforms\, and other types of heterogeneity\, and consistently achieves superior performance over other frequently used methods. In gage package\, we provide functions for basic GAGE analysis\, result processing and presentation. We have also built pipeline routines for of multiple GAGE analyses in a batch\, comparison between parallel analyses\, and combined analysis of heterogeneous data from different sources\/studies. In addition\, we provide demo microarray data and commonly used gene set data based on KEGG pathways and GO terms. These funtions and data are also useful for gene set analysis using other methods.


.. conda:package:: bioconductor-gage

   |downloads_bioconductor-gage| |docker_bioconductor-gage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.1-0</code>,  <code>2.40.0-0</code>,  <code>2.37.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-1</code>,  </span></summary>
      

      ``2.50.0-0``,  ``2.48.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.1-0``,  ``2.40.0-0``,  ``2.37.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.3-0``,  ``2.21.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-keggrest: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gage

   and update with::

      mamba update bioconductor-gage

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gage:<tag>

   (see `bioconductor-gage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gage
   :alt:   (downloads)
.. |docker_bioconductor-gage| image:: https://quay.io/repository/biocontainers/bioconductor-gage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gage
.. _`bioconductor-gage/tags`: https://quay.io/repository/biocontainers/bioconductor-gage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gage";
        var versions = ["2.50.0","2.48.0","2.44.0","2.42.0","2.40.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gage/README.html