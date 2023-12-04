:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hopach'
.. highlight: bash

bioconductor-hopach
===================

.. conda:recipe:: bioconductor-hopach
   :replaces_section_title:
   :noindex:

   Hierarchical Ordered Partitioning and Collapsing Hybrid \(HOPACH\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/hopach.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hopach <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hopach>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hopach/meta.yaml>`_
   :links: biotools: :biotools:`hopach`, doi: :doi:`10.1038/nmeth.3252`

   The HOPACH clustering algorithm builds a hierarchical tree of clusters by recursively partitioning a data set\, while ordering and possibly collapsing clusters at each level. The algorithm uses the Mean\/Median Split Silhouette \(MSS\) criteria to identify the level of the tree with maximally homogeneous clusters. It also runs the tree down to produce a final ordered list of the elements. The non\-parametric bootstrap allows one to estimate the probability that each element belongs to each cluster \(fuzzy clustering\).


.. conda:package:: bioconductor-hopach

   |downloads_bioconductor-hopach| |docker_bioconductor-hopach|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  <code>2.54.0-2</code>,  <code>2.54.0-1</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  </span></summary>
      

      ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.54.0-2``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hopach

   and update with::

      mamba update bioconductor-hopach

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hopach

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hopach:<tag>

   (see `bioconductor-hopach/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hopach| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hopach.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hopach
   :alt:   (downloads)
.. |docker_bioconductor-hopach| image:: https://quay.io/repository/biocontainers/bioconductor-hopach/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hopach
.. _`bioconductor-hopach/tags`: https://quay.io/repository/biocontainers/bioconductor-hopach?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hopach";
        var versions = ["2.62.0","2.60.0","2.58.0","2.58.0","2.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hopach/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hopach/README.html