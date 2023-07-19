:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pigengene'
.. highlight: bash

bioconductor-pigengene
======================

.. conda:recipe:: bioconductor-pigengene
   :replaces_section_title:
   :noindex:

   Infers biological signatures from gene expression data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Pigengene.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-pigengene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pigengene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pigengene/meta.yaml>`_

   Pigengene package provides an efficient way to infer biological signatures from gene expression profiles. The signatures are independent from the underlying platform\, e.g.\, the input can be microarray or RNA Seq data. It can even infer the signatures using data from one platform\, and evaluate them on the other. Pigengene identifies the modules \(clusters\) of highly coexpressed genes using coexpression network analysis\, summarizes the biological information of each module in an eigengene\, learns a Bayesian network that models the probabilistic dependencies between modules\, and builds a decision tree based on the expression of eigengenes.


.. conda:package:: bioconductor-pigengene

   |downloads_bioconductor-pigengene| |docker_bioconductor-pigengene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-dose: ``>=3.26.0,<3.27.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-reactomepa: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bnlearn: ``>=4.7``
   :depends r-c50: ``>=0.1.2``
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-gdata: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-openxlsx: 
   :depends r-partykit: 
   :depends r-pheatmap: ``>=1.0.8``
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pigengene

   and update with::

      conda update bioconductor-pigengene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pigengene:<tag>

   (see `bioconductor-pigengene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pigengene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pigengene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pigengene
   :alt:   (downloads)
.. |docker_bioconductor-pigengene| image:: https://quay.io/repository/biocontainers/bioconductor-pigengene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pigengene
.. _`bioconductor-pigengene/tags`: https://quay.io/repository/biocontainers/bioconductor-pigengene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pigengene";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pigengene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pigengene/README.html