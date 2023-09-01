:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isee'
.. highlight: bash

bioconductor-isee
=================

.. conda:recipe:: bioconductor-isee
   :replaces_section_title:
   :noindex:

   Interactive SummarizedExperiment Explorer

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/iSEE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-isee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isee/meta.yaml>`_

   Create an interactive Shiny\-based graphical user interface for exploring data stored in SummarizedExperiment objects\, including row\- and column\-level metadata. The interface supports transmission of selections between plots and tables\, code tracking\, interactive tours\, interactive or programmatic initialization\, preservation of app state\, and extensibility to new panel types via S4 classes. Special attention is given to single\-cell data in a SingleCellExperiment object with visualization of dimensionality reduction results.


.. conda:package:: bioconductor-isee

   |downloads_bioconductor-isee| |docker_bioconductor-isee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.4-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.4-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-colourpicker: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-mgcv: 
   :depends r-rintrojs: 
   :depends r-shiny: 
   :depends r-shinyace: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-shinywidgets: 
   :depends r-vipor: 
   :depends r-viridislite: 
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

      mamba install bioconductor-isee

   and update with::

      mamba update bioconductor-isee

  To create a new environment, run::

      mamba create --name myenvname bioconductor-isee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isee:<tag>

   (see `bioconductor-isee/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isee.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isee
   :alt:   (downloads)
.. |docker_bioconductor-isee| image:: https://quay.io/repository/biocontainers/bioconductor-isee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isee
.. _`bioconductor-isee/tags`: https://quay.io/repository/biocontainers/bioconductor-isee?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isee";
        var versions = ["2.12.0","2.10.0","2.6.0","2.4.0","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isee/README.html