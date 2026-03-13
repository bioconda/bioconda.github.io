:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prolocgui'
.. highlight: bash

bioconductor-prolocgui
======================

.. conda:recipe:: bioconductor-prolocgui
   :replaces_section_title:
   :noindex:

   Interactive visualisation of spatial proteomics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pRolocGUI.html
   :license: GPL-2
   :recipe: /`bioconductor-prolocgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocgui/meta.yaml>`_
   :links: biotools: :biotools:`prolocgui`, doi: :doi:`10.1038/ncomms9992`

   The package pRolocGUI comprises functions to interactively visualise spatial proteomics data on the basis of pRoloc\, pRolocdata and shiny.


.. conda:package:: bioconductor-prolocgui

   |downloads_bioconductor-prolocgui| |docker_bioconductor-prolocgui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-proloc: ``>=1.50.0,<1.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colorspace: 
   :depends on r-colourpicker: 
   :depends on r-dplyr: 
   :depends on r-dt: ``>=0.1.40``
   :depends on r-ggplot2: 
   :depends on r-scales: 
   :depends on r-shiny: ``>=0.9.1``
   :depends on r-shinydashboard: 
   :depends on r-shinydashboardplus: ``>=2.0.0``
   :depends on r-shinyhelper: 
   :depends on r-shinyjs: 
   :depends on r-shinywidgets: 

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

    pixi global install bioconductor-prolocgui

to add into an existing workspace instead, run::

    pixi add bioconductor-prolocgui

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-prolocgui

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-prolocgui

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-prolocgui:<tag>

(see `bioconductor-prolocgui/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-prolocgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prolocgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prolocgui
   :alt:   (downloads)
.. |docker_bioconductor-prolocgui| image:: https://quay.io/repository/biocontainers/bioconductor-prolocgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prolocgui
.. _`bioconductor-prolocgui/tags`: https://quay.io/repository/biocontainers/bioconductor-prolocgui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prolocgui";
        var versions = ["2.20.0","2.16.0","2.12.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prolocgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prolocgui/README.html