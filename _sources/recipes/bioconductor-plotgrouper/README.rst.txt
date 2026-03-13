:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plotgrouper'
.. highlight: bash

bioconductor-plotgrouper
========================

.. conda:recipe:: bioconductor-plotgrouper
   :replaces_section_title:
   :noindex:

   Shiny app GUI wrapper for ggplot with built\-in statistical analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/plotGrouper.html
   :license: GPL-3
   :recipe: /`bioconductor-plotgrouper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgrouper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgrouper/meta.yaml>`_

   A shiny app\-based GUI wrapper for ggplot with built\-in statistical analysis. Import data from file and use dropdown menus and checkboxes to specify the plotting variables\, graph type\, and look of your plots. Once created\, plots can be saved independently or stored in a report that can be saved as a pdf. If new data are added to the file\, the report can be refreshed to include new data. Statistical tests can be selected and added to the graphs. Analysis of flow cytometry data is especially integrated with plotGrouper. Count data can be transformed to return the absolute number of cells in a sample \(this feature requires inclusion of the number of beads per sample and information about any dilution performed\).


.. conda:package:: bioconductor-plotgrouper

   |downloads_bioconductor-plotgrouper| |docker_bioconductor-plotgrouper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colourpicker: ``>=1.0``
   :depends on r-dplyr: ``>=0.7.6``
   :depends on r-egg: ``>=0.4.0``
   :depends on r-ggplot2: ``>=3.0.0``
   :depends on r-ggpubr: ``>=0.1.8``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-gtable: ``>=0.2.0``
   :depends on r-hmisc: ``>=4.1.1``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-readr: ``>=1.1.1``
   :depends on r-readxl: ``>=1.1.0``
   :depends on r-rlang: ``>=0.2.2``
   :depends on r-scales: ``>=1.0.0``
   :depends on r-shiny: ``>=1.1.0``
   :depends on r-shinythemes: ``>=1.1.1``
   :depends on r-stringr: ``>=1.3.1``
   :depends on r-tibble: ``>=1.4.2``
   :depends on r-tidyr: ``>=0.2.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-plotgrouper

to add into an existing workspace instead, run::

    pixi add bioconductor-plotgrouper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-plotgrouper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-plotgrouper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-plotgrouper:<tag>

(see `bioconductor-plotgrouper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-plotgrouper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plotgrouper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plotgrouper
   :alt:   (downloads)
.. |docker_bioconductor-plotgrouper| image:: https://quay.io/repository/biocontainers/bioconductor-plotgrouper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plotgrouper
.. _`bioconductor-plotgrouper/tags`: https://quay.io/repository/biocontainers/bioconductor-plotgrouper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plotgrouper";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
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