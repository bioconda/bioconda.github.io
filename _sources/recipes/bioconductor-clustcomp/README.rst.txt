.. title:: Package Recipe 'bioconductor-clustcomp'
.. highlight: bash


bioconductor-clustcomp
======================

.. conda:recipe:: bioconductor-clustcomp
   :replaces_section_title:

   clustComp is a package that implements several techniques for the comparison and visualisation of relationships between different clustering results\, either flat versus flat or hierarchical versus flat. These relationships among clusters are displayed using a weighted bi\-graph\, in which the nodes represent the clusters and the edges connect pairs of nodes with non\-empty intersection\; the weight of each edge is the number of elements in that intersection and is displayed through the edge thickness. The best layout of the bi\-graph is provided by the barycentre algorithm\, which minimises the weighted number of crossings. In the case of comparing a hierarchical and a non\-hierarchical clustering\, the dendrogram is pruned at different heights\, selected by exploring the tree by depth\-first search\, starting at the root. Branches are decided to be split according to the value of a scoring function\, that can be based either on the aesthetics of the bi\-graph or on the mutual information between the hierarchical and the flat clusterings. A mapping between groups of clusters from each side is constructed with a greedy algorithm\, and can be additionally visualised.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/clustComp.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-clustcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustcomp/meta.yaml>`_
   :links: biotools: :biotools:`clustcomp`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-clustcomp

   |downloads_bioconductor-clustcomp| |docker_bioconductor-clustcomp|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-sm`  

   :required~by: |required_by_bioconductor-clustcomp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clustcomp

   and update with::

      conda update bioconductor-clustcomp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-clustcomp


.. |required_by_bioconductor-clustcomp| conda:required_by:: bioconductor-clustcomp
.. |downloads_bioconductor-clustcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustcomp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-clustcomp| image:: https://quay.io/repository/biocontainers/bioconductor-clustcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustcomp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustcomp/README.html

