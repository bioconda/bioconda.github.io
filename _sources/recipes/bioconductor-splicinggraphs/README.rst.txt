:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicinggraphs'
.. highlight: bash

bioconductor-splicinggraphs
===========================

.. conda:recipe:: bioconductor-splicinggraphs
   :replaces_section_title:
   :noindex:

   Create\, manipulate\, visualize splicing graphs\, and assign RNA\-seq reads to them

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SplicingGraphs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-splicinggraphs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs/meta.yaml>`_
   :links: biotools: :biotools:`splicinggraphs`, doi: :doi:`10.1093/bioinformatics/18.suppl_1.s181`

   This package allows the user to create\, manipulate\, and visualize splicing graphs and their bubbles based on a gene model for a given organism. Additionally it allows the user to assign RNA\-seq reads to the edges of a set of splicing graphs\, and to summarize them in different ways.


.. conda:package:: bioconductor-splicinggraphs

   |downloads_bioconductor-splicinggraphs| |docker_bioconductor-splicinggraphs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-1</code>,  <code>1.22.1-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rgraphviz: ``>=2.42.0,<2.43.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicinggraphs

   and update with::

      conda update bioconductor-splicinggraphs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splicinggraphs:<tag>

   (see `bioconductor-splicinggraphs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splicinggraphs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicinggraphs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splicinggraphs
   :alt:   (downloads)
.. |docker_bioconductor-splicinggraphs| image:: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs
.. _`bioconductor-splicinggraphs/tags`: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splicinggraphs";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicinggraphs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicinggraphs/README.html