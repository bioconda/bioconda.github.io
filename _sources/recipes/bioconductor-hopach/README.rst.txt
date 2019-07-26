:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hopach'
.. highlight: bash

bioconductor-hopach
===================

.. conda:recipe:: bioconductor-hopach
   :replaces_section_title:

   The HOPACH clustering algorithm builds a hierarchical tree of clusters by recursively partitioning a data set\, while ordering and possibly collapsing clusters at each level. The algorithm uses the Mean\/Median Split Silhouette \(MSS\) criteria to identify the level of the tree with maximally homogeneous clusters. It also runs the tree down to produce a final ordered list of the elements. The non\-parametric bootstrap allows one to estimate the probability that each element belongs to each cluster \(fuzzy clustering\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/hopach.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hopach <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hopach>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hopach/meta.yaml>`_
   :links: biotools: :biotools:`hopach`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-hopach

   |downloads_bioconductor-hopach| |docker_bioconductor-hopach|

   :versions: 2.44.0-1, 2.42.0-0, 2.40.0-0, 2.38.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hopach

   and update with::

      conda update bioconductor-hopach

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hopach:<tag>

   (see `bioconductor-hopach/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hopach| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hopach.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hopach
   :alt:   (downloads)
.. |docker_bioconductor-hopach| image:: https://quay.io/repository/biocontainers/bioconductor-hopach/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hopach
.. _`bioconductor-hopach/tags`: https://quay.io/repository/biocontainers/bioconductor-hopach?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hopach/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hopach/README.html