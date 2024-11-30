:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichedheatmap'
.. highlight: bash

bioconductor-enrichedheatmap
============================

.. conda:recipe:: bioconductor-enrichedheatmap
   :replaces_section_title:
   :noindex:

   Making Enriched Heatmaps

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EnrichedHeatmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-enrichedheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichedheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichedheatmap/meta.yaml>`_

   Enriched heatmap is a special type of heatmap which visualizes the enrichment of genomic signals on specific target regions. Here we implement enriched heatmap by ComplexHeatmap package. Since this type of heatmap is just a normal heatmap but with some special settings\, with the functionality of ComplexHeatmap\, it would be much easier to customize the heatmap as well as concatenating to a list of heatmaps to show correspondance between different data sources.


.. conda:package:: bioconductor-enrichedheatmap

   |downloads_bioconductor-enrichedheatmap| |docker_bioconductor-enrichedheatmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.27.2-1</code>,  <code>1.27.2-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.27.2-1``,  ``1.27.2-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: ``>=0.4.5``
   :depends r-getoptlong: 
   :depends r-locfit: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
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

      mamba install bioconductor-enrichedheatmap

   and update with::

      mamba update bioconductor-enrichedheatmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enrichedheatmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enrichedheatmap:<tag>

   (see `bioconductor-enrichedheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enrichedheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichedheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichedheatmap
   :alt:   (downloads)
.. |docker_bioconductor-enrichedheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap
.. _`bioconductor-enrichedheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enrichedheatmap";
        var versions = ["1.32.0","1.30.0","1.27.2","1.27.2","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichedheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichedheatmap/README.html