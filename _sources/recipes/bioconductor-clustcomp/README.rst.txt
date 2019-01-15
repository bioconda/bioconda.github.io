.. _`bioconductor-clustcomp`:

bioconductor-clustcomp
======================

|downloads|

clustComp is a package that implements several techniques for the comparison and visualisation of relationships between different clustering results\, either flat versus flat or hierarchical versus flat. These relationships among clusters are displayed using a weighted bi\-graph\, in which the nodes represent the clusters and the edges connect pairs of nodes with non\-empty intersection\; the weight of each edge is the number of elements in that intersection and is displayed through the edge thickness. The best layout of the bi\-graph is provided by the barycentre algorithm\, which minimises the weighted number of crossings. In the case of comparing a hierarchical and a non\-hierarchical clustering\, the dendrogram is pruned at different heights\, selected by exploring the tree by depth\-first search\, starting at the root. Branches are decided to be split according to the value of a scoring function\, that can be based either on the aesthetics of the bi\-graph or on the mutual information between the hierarchical and the flat clusterings. A mapping between groups of clusters from each side is constructed with a greedy algorithm\, and can be additionally visualised.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/clustComp.html
Versions      1.8.0, 1.6.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustcomp



Links         biotools: :biotools:`clustcomp`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-clustcomp

and update with::

   conda update bioconductor-clustcomp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-clustcomp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-clustcomp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-clustcomp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-clustcomp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-clustcomp
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-clustcomp/status
                :target: https://quay.io/repository/biocontainers/bioconductor-clustcomp

