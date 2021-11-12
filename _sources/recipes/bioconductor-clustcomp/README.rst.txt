:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustcomp'
.. highlight: bash

bioconductor-clustcomp
======================

.. conda:recipe:: bioconductor-clustcomp
   :replaces_section_title:
   :noindex:

   Clustering Comparison Package

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/clustComp.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-clustcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustcomp/meta.yaml>`_
   :links: biotools: :biotools:`clustcomp`, doi: :doi:`10.1038/nmeth.3252`

   clustComp is a package that implements several techniques for the comparison and visualisation of relationships between different clustering results\, either flat versus flat or hierarchical versus flat. These relationships among clusters are displayed using a weighted bi\-graph\, in which the nodes represent the clusters and the edges connect pairs of nodes with non\-empty intersection\; the weight of each edge is the number of elements in that intersection and is displayed through the edge thickness. The best layout of the bi\-graph is provided by the barycentre algorithm\, which minimises the weighted number of crossings. In the case of comparing a hierarchical and a non\-hierarchical clustering\, the dendrogram is pruned at different heights\, selected by exploring the tree by depth\-first search\, starting at the root. Branches are decided to be split according to the value of a scoring function\, that can be based either on the aesthetics of the bi\-graph or on the mutual information between the hierarchical and the flat clusterings. A mapping between groups of clusters from each side is constructed with a greedy algorithm\, and can be additionally visualised.


.. conda:package:: bioconductor-clustcomp

   |downloads_bioconductor-clustcomp| |docker_bioconductor-clustcomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-sm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clustcomp

   and update with::

      conda update bioconductor-clustcomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clustcomp:<tag>

   (see `bioconductor-clustcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clustcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustcomp
   :alt:   (downloads)
.. |docker_bioconductor-clustcomp| image:: https://quay.io/repository/biocontainers/bioconductor-clustcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustcomp
.. _`bioconductor-clustcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-clustcomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustcomp";
        var versions = ["1.22.0","1.20.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustcomp/README.html