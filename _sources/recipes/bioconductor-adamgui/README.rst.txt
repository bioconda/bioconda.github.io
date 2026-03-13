:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adamgui'
.. highlight: bash

bioconductor-adamgui
====================

.. conda:recipe:: bioconductor-adamgui
   :replaces_section_title:
   :noindex:

   Activity and Diversity Analysis Module Graphical User Interface

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ADAMgui.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adamgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adamgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adamgui/meta.yaml>`_

   ADAMgui is a Graphical User Interface for the ADAM package. The ADAMgui package provides 2 shiny\-based applications that allows the user to study the output of the ADAM package files through different plots. It\'s possible\, for example\, to choose a specific GFAG and observe the gene expression behavior with the plots created with the GFAGtargetUi function. Features such as differential expression and foldchange can be easily seen with aid of the plots made with GFAGpathUi function.


.. conda:package:: bioconductor-adamgui

   |downloads_bioconductor-adamgui| |docker_bioconductor-adamgui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-adam: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colorramps: ``>=2.3``
   :depends on r-data.table: ``>=1.11.4``
   :depends on r-dplyr: ``>=0.7.6``
   :depends on r-dt: ``>=0.4``
   :depends on r-ggplot2: ``>=3.0.0``
   :depends on r-ggpubr: ``>=0.1.8``
   :depends on r-ggrepel: ``>=0.8.0``
   :depends on r-ggsignif: ``>=0.4.0``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-knitr: 
   :depends on r-rcolorbrewer: ``>=1.1-2``
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-shiny: ``>=1.1.0``
   :depends on r-shinyjs: ``>=1.0``
   :depends on r-stringi: ``>=1.2.4``
   :depends on r-stringr: ``>=1.3.1``
   :depends on r-testthat: 
   :depends on r-varhandle: ``>=2.0.3``

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

    pixi global install bioconductor-adamgui

to add into an existing workspace instead, run::

    pixi add bioconductor-adamgui

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-adamgui

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-adamgui

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-adamgui:<tag>

(see `bioconductor-adamgui/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-adamgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adamgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adamgui
   :alt:   (downloads)
.. |docker_bioconductor-adamgui| image:: https://quay.io/repository/biocontainers/bioconductor-adamgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adamgui
.. _`bioconductor-adamgui/tags`: https://quay.io/repository/biocontainers/bioconductor-adamgui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adamgui";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adamgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adamgui/README.html