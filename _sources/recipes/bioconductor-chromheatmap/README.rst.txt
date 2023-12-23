:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromheatmap'
.. highlight: bash

bioconductor-chromheatmap
=========================

.. conda:recipe:: bioconductor-chromheatmap
   :replaces_section_title:
   :noindex:

   Heat map plotting by genome coordinate

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ChromHeatMap.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chromheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromheatmap/meta.yaml>`_
   :links: biotools: :biotools:`chromheatmap`, doi: :doi:`10.1038/nmeth.3252`

   The ChromHeatMap package can be used to plot genome\-wide data \(e.g. expression\, CGH\, SNP\) along each strand of a given chromosome as a heat map. The generated heat map can be used to interactively identify probes and genes of interest.


.. conda:package:: bioconductor-chromheatmap

   |downloads_bioconductor-chromheatmap| |docker_bioconductor-chromheatmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-chromheatmap

   and update with::

      mamba update bioconductor-chromheatmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chromheatmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromheatmap:<tag>

   (see `bioconductor-chromheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromheatmap
   :alt:   (downloads)
.. |docker_bioconductor-chromheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-chromheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromheatmap
.. _`bioconductor-chromheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-chromheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromheatmap";
        var versions = ["1.56.0","1.54.0","1.52.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromheatmap/README.html