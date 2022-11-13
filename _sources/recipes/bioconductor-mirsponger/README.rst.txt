:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsponger'
.. highlight: bash

bioconductor-mirsponger
=======================

.. conda:recipe:: bioconductor-mirsponger
   :replaces_section_title:
   :noindex:

   Identification and analysis of miRNA sponge regulation

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/miRspongeR.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsponger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger/meta.yaml>`_

   This package provides several functions to explore miRNA sponge \(also called ceRNA or miRNA decoy\) regulation from putative miRNA\-target interactions or\/and transcriptomics data \(including bulk\, single\-cell and spatial gene expression data\). It provides eight popular methods for identifying miRNA sponge interactions\, and an integrative method to integrate miRNA sponge interactions from different methods\, as well as the functions to validate miRNA sponge interactions\, and infer miRNA sponge modules\, conduct enrichment analysis of miRNA sponge modules\, and conduct survival analysis of miRNA sponge modules. By using a sample control variable strategy\, it provides a function to infer sample\-specific miRNA sponge interactions. In terms of sample\-specific miRNA sponge interactions\, it implements three similarity methods to construct sample\-sample correlation network.


.. conda:package:: bioconductor-mirsponger

   |downloads_bioconductor-mirsponger| |docker_bioconductor-mirsponger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>1.20.1-1</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.2-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``1.20.1-1``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-clusterprofiler: ``>=4.6.0,<4.7.0``
   :depends bioconductor-dose: ``>=3.24.0,<3.25.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-reactomepa: ``>=1.42.0,<1.43.0``
   :depends bioconductor-sponge: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-corpcor: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-linkcomm: 
   :depends r-mcl: 
   :depends r-rcpp: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsponger

   and update with::

      conda update bioconductor-mirsponger

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirsponger:<tag>

   (see `bioconductor-mirsponger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsponger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsponger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsponger
   :alt:   (downloads)
.. |docker_bioconductor-mirsponger| image:: https://quay.io/repository/biocontainers/bioconductor-mirsponger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsponger
.. _`bioconductor-mirsponger/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsponger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirsponger";
        var versions = ["2.2.0","1.20.1","1.20.1","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html