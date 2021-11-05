:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trackviewer'
.. highlight: bash

bioconductor-trackviewer
========================

.. conda:recipe:: bioconductor-trackviewer
   :replaces_section_title:
   :noindex:

   A R\/Bioconductor package with web interface for drawing elegant interactive tracks or lollipop plot to facilitate integrated analysis of multi\-omics data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/trackViewer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-trackviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trackviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trackviewer/meta.yaml>`_
   :links: biotools: :biotools:`trackviewer`, doi: :doi:`10.1038/nmeth.3252`

   Visualize mapped reads along with annotation as track layers for NGS dataset such as ChIP\-seq\, RNA\-seq\, miRNA\-seq\, DNA\-seq\, SNPs and methylation data.


.. conda:package:: bioconductor-trackviewer

   |downloads_bioconductor-trackviewer| |docker_bioconductor-trackviewer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.2-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.5-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.2-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.5-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-gviz: ``>=1.38.0,<1.39.0``
   :depends bioconductor-interactionset: ``>=1.22.0,<1.23.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rgraphviz: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-grimport: 
   :depends r-htmlwidgets: 
   :depends r-plotrix: 
   :depends r-rcpp: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trackviewer

   and update with::

      conda update bioconductor-trackviewer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trackviewer:<tag>

   (see `bioconductor-trackviewer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trackviewer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trackviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trackviewer
   :alt:   (downloads)
.. |docker_bioconductor-trackviewer| image:: https://quay.io/repository/biocontainers/bioconductor-trackviewer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trackviewer
.. _`bioconductor-trackviewer/tags`: https://quay.io/repository/biocontainers/bioconductor-trackviewer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trackviewer";
        var versions = ["1.30.0","1.28.0","1.26.2","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trackviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trackviewer/README.html