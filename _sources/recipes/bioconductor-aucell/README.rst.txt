:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aucell'
.. highlight: bash

bioconductor-aucell
===================

.. conda:recipe:: bioconductor-aucell
   :replaces_section_title:
   :noindex:

   AUCell\: Analysis of \'gene set\' activity in single\-cell RNA\-seq data \(e.g. identify cells with specific gene signatures\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/AUCell.html
   :license: GPL-3
   :recipe: /`bioconductor-aucell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aucell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aucell/meta.yaml>`_

   AUCell allows to identify cells with active gene sets \(e.g. signatures\, gene modules...\) in single\-cell RNA\-seq data. AUCell uses the \"Area Under the Curve\" \(AUC\) to calculate whether a critical subset of the input gene set is enriched within the expressed genes for each cell. The distribution of AUC scores across all the cells allows exploring the relative expression of the signature. Since the scoring method is ranking\-based\, AUCell is independent of the gene expression units and the normalization procedure. In addition\, since the cells are evaluated individually\, it can easily be applied to bigger datasets\, subsetting the expression matrix if needed.


.. conda:package:: bioconductor-aucell

   |downloads_bioconductor-aucell| |docker_bioconductor-aucell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.20.1-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.20.0,<1.21.0``
   :depends bioconductor-gseabase: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-mixtools: 
   :depends r-r.utils: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aucell

   and update with::

      conda update bioconductor-aucell

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aucell:<tag>

   (see `bioconductor-aucell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aucell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aucell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aucell
   :alt:   (downloads)
.. |docker_bioconductor-aucell| image:: https://quay.io/repository/biocontainers/bioconductor-aucell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aucell
.. _`bioconductor-aucell/tags`: https://quay.io/repository/biocontainers/bioconductor-aucell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aucell";
        var versions = ["1.20.1","1.16.0","1.14.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aucell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aucell/README.html