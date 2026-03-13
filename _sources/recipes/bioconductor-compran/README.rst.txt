:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compran'
.. highlight: bash

bioconductor-compran
====================

.. conda:recipe:: bioconductor-compran
   :replaces_section_title:
   :noindex:

   Complexome Profiling Analysis package

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ComPrAn.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-compran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compran/meta.yaml>`_

   This package is for analysis of SILAC labeled complexome profiling data. It uses peptide table in tab\-delimited format as an input and produces ready\-to\-use tables and plots.


.. conda:package:: bioconductor-compran

   |downloads_bioconductor-compran| |docker_bioconductor-compran|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-forcats: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rio: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-shinydashboard: 
   :depends on r-shinyjs: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-venndiagram: 

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

    pixi global install bioconductor-compran

to add into an existing workspace instead, run::

    pixi add bioconductor-compran

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-compran

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-compran

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-compran:<tag>

(see `bioconductor-compran/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-compran| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compran.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compran
   :alt:   (downloads)
.. |docker_bioconductor-compran| image:: https://quay.io/repository/biocontainers/bioconductor-compran/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compran
.. _`bioconductor-compran/tags`: https://quay.io/repository/biocontainers/bioconductor-compran?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compran";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compran/README.html