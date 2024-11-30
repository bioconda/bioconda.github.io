:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicinggraphs'
.. highlight: bash

bioconductor-splicinggraphs
===========================

.. conda:recipe:: bioconductor-splicinggraphs
   :replaces_section_title:
   :noindex:

   Create\, manipulate\, visualize splicing graphs\, and assign RNA\-seq reads to them

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SplicingGraphs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-splicinggraphs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs/meta.yaml>`_
   :links: biotools: :biotools:`splicinggraphs`, doi: :doi:`10.1093/bioinformatics/18.suppl_1.s181`

   This package allows the user to create\, manipulate\, and visualize splicing graphs and their bubbles based on a gene model for a given organism. Additionally it allows the user to assign RNA\-seq reads to the edges of a set of splicing graphs\, and to summarize them in different ways.


.. conda:package:: bioconductor-splicinggraphs

   |downloads_bioconductor-splicinggraphs| |docker_bioconductor-splicinggraphs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-splicinggraphs

   and update with::

      mamba update bioconductor-splicinggraphs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-splicinggraphs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
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