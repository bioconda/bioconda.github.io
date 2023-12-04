:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plotgrouper'
.. highlight: bash

bioconductor-plotgrouper
========================

.. conda:recipe:: bioconductor-plotgrouper
   :replaces_section_title:
   :noindex:

   Shiny app GUI wrapper for ggplot with built\-in statistical analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/plotGrouper.html
   :license: GPL-3
   :recipe: /`bioconductor-plotgrouper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgrouper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgrouper/meta.yaml>`_

   A shiny app\-based GUI wrapper for ggplot with built\-in statistical analysis. Import data from file and use dropdown menus and checkboxes to specify the plotting variables\, graph type\, and look of your plots. Once created\, plots can be saved independently or stored in a report that can be saved as a pdf. If new data are added to the file\, the report can be refreshed to include new data. Statistical tests can be selected and added to the graphs. Analysis of flow cytometry data is especially integrated with plotGrouper. Count data can be transformed to return the absolute number of cells in a sample \(this feature requires inclusion of the number of beads per sample and information about any dilution performed\).


.. conda:package:: bioconductor-plotgrouper

   |downloads_bioconductor-plotgrouper| |docker_bioconductor-plotgrouper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colourpicker: ``>=1.0``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-egg: ``>=0.4.0``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-ggpubr: ``>=0.1.8``
   :depends r-gridextra: ``>=2.3``
   :depends r-gtable: ``>=0.2.0``
   :depends r-hmisc: ``>=4.1.1``
   :depends r-magrittr: ``>=1.5``
   :depends r-readr: ``>=1.1.1``
   :depends r-readxl: ``>=1.1.0``
   :depends r-rlang: ``>=0.2.2``
   :depends r-scales: ``>=1.0.0``
   :depends r-shiny: ``>=1.1.0``
   :depends r-shinythemes: ``>=1.1.1``
   :depends r-stringr: ``>=1.3.1``
   :depends r-tibble: ``>=1.4.2``
   :depends r-tidyr: ``>=0.2.0``
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

      mamba install bioconductor-plotgrouper

   and update with::

      mamba update bioconductor-plotgrouper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plotgrouper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plotgrouper:<tag>

   (see `bioconductor-plotgrouper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plotgrouper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plotgrouper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plotgrouper
   :alt:   (downloads)
.. |docker_bioconductor-plotgrouper| image:: https://quay.io/repository/biocontainers/bioconductor-plotgrouper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plotgrouper
.. _`bioconductor-plotgrouper/tags`: https://quay.io/repository/biocontainers/bioconductor-plotgrouper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plotgrouper";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plotgrouper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plotgrouper/README.html