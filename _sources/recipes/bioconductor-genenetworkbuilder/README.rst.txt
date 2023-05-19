:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genenetworkbuilder'
.. highlight: bash

bioconductor-genenetworkbuilder
===============================

.. conda:recipe:: bioconductor-genenetworkbuilder
   :replaces_section_title:
   :noindex:

   GeneNetworkBuilder\: a bioconductor package for building regulatory network using ChIP\-chip\/ChIP\-seq data and Gene Expression Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/GeneNetworkBuilder.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genenetworkbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genenetworkbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genenetworkbuilder/meta.yaml>`_

   Appliation for discovering direct or indirect targets of transcription factors using ChIP\-chip or ChIP\-seq\, and microarray or RNA\-seq gene expression data. Inputting a list of genes of potential targets of one TF from ChIP\-chip or ChIP\-seq\, and the gene expression results\, GeneNetworkBuilder generates a regulatory network of the TF.


.. conda:package:: bioconductor-genenetworkbuilder

   |downloads_bioconductor-genenetworkbuilder| |docker_bioconductor-genenetworkbuilder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.1-1</code>,  <code>1.36.1-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.1-1``,  ``1.36.1-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.1-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-rgraphviz: ``>=2.42.0,<2.43.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-htmlwidgets: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.9.13``
   :depends r-rjson: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genenetworkbuilder

   and update with::

      conda update bioconductor-genenetworkbuilder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genenetworkbuilder:<tag>

   (see `bioconductor-genenetworkbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genenetworkbuilder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genenetworkbuilder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genenetworkbuilder
   :alt:   (downloads)
.. |docker_bioconductor-genenetworkbuilder| image:: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder
.. _`bioconductor-genenetworkbuilder/tags`: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genenetworkbuilder";
        var versions = ["1.40.0","1.40.0","1.36.1","1.36.1","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genenetworkbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genenetworkbuilder/README.html