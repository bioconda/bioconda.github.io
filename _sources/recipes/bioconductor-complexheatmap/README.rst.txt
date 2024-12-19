:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-complexheatmap'
.. highlight: bash

bioconductor-complexheatmap
===========================

.. conda:recipe:: bioconductor-complexheatmap
   :replaces_section_title:
   :noindex:

   Make Complex Heatmaps

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ComplexHeatmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-complexheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-complexheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-complexheatmap/meta.yaml>`_
   :links: biotools: :biotools:`complexheatmap`

   Complex heatmaps are efficient to visualize associations between different sources of data sets and reveal potential patterns. Here the ComplexHeatmap package provides a highly flexible way to arrange multiple heatmaps and supports various annotation graphics.


.. conda:package:: bioconductor-complexheatmap

   |downloads_bioconductor-complexheatmap| |docker_bioconductor-complexheatmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.2-1</code>,  <code>2.6.2-0</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.0-0``,  ``2.4.2-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.17.1-0``,  ``1.14.0-0``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: ``>=0.4.14``
   :depends r-clue: 
   :depends r-codetools: 
   :depends r-colorspace: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-getoptlong: 
   :depends r-globaloptions: ``>=0.1.0``
   :depends r-matrixstats: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-complexheatmap

   and update with::

      mamba update bioconductor-complexheatmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-complexheatmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-complexheatmap:<tag>

   (see `bioconductor-complexheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-complexheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-complexheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-complexheatmap
   :alt:   (downloads)
.. |docker_bioconductor-complexheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-complexheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-complexheatmap
.. _`bioconductor-complexheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-complexheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-complexheatmap";
        var versions = ["2.22.0","2.18.0","2.16.0","2.14.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-complexheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-complexheatmap/README.html