:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qpgraph'
.. highlight: bash

bioconductor-qpgraph
====================

.. conda:recipe:: bioconductor-qpgraph
   :replaces_section_title:
   :noindex:

   Estimation of genetic and molecular regulatory networks from high\-throughput genomics data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/qpgraph.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-qpgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpgraph/meta.yaml>`_
   :links: biotools: :biotools:`qpgraph`

   Estimate gene and eQTL networks from high\-throughput expression and genotyping assays.


.. conda:package:: bioconductor-qpgraph

   |downloads_bioconductor-qpgraph| |docker_bioconductor-qpgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.1-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.3-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.28.1-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.3-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.72.0,<1.73.0``
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rgraphviz: ``>=2.38.0,<2.39.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: ``>=1.0``
   :depends r-mvtnorm: 
   :depends r-qtl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qpgraph

   and update with::

      conda update bioconductor-qpgraph

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qpgraph:<tag>

   (see `bioconductor-qpgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qpgraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qpgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qpgraph
   :alt:   (downloads)
.. |docker_bioconductor-qpgraph| image:: https://quay.io/repository/biocontainers/bioconductor-qpgraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qpgraph
.. _`bioconductor-qpgraph/tags`: https://quay.io/repository/biocontainers/bioconductor-qpgraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qpgraph";
        var versions = ["2.28.1","2.28.0","2.26.0","2.24.3","2.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qpgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qpgraph/README.html