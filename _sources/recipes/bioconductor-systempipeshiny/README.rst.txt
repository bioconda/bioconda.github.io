:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-systempipeshiny'
.. highlight: bash

bioconductor-systempipeshiny
============================

.. conda:recipe:: bioconductor-systempipeshiny
   :replaces_section_title:
   :noindex:

   systemPipeShiny\: An Interactive Framework for Workflow Management and Visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/systemPipeShiny.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-systempipeshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempipeshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempipeshiny/meta.yaml>`_

   systemPipeShiny \(SPS\) extends the widely used systemPipeR \(SPR\) workflow environment with a versatile graphical user interface provided by a Shiny App. This allows non\-R users\, such as experimentalists\, to run many systemPipeR’s workflow designs\, control\, and visualization functionalities interactively without requiring knowledge of R. Most importantly\, SPS has been designed as a general purpose framework for interacting with other R packages in an intuitive manner. Like most Shiny Apps\, SPS can be used on both local computers as well as centralized server\-based deployments that can be accessed remotely as a public web service for using SPR’s functionalities with community and\/or private data. The framework can integrate many core packages from the R\/Bioconductor ecosystem. Examples of SPS’ current functionalities include\: \(a\) interactive creation of experimental designs and metadata using an easy to use tabular editor or file uploader\; \(b\) visualization of workflow topologies combined with auto\-generation of R Markdown preview for interactively designed workflows\; \(d\) access to a wide range of data processing routines\; \(e\) and an extendable set of visualization functionalities. Complex visual results can be managed on a \'Canvas Workbench’ allowing users to organize and to compare plots in an efficient manner combined with a session snapshot feature to continue work at a later time. The present suite of pre\-configured visualization examples. The modular design of SPR makes it easy to design custom functions without any knowledge of Shiny\, as well as extending the environment in the future with contributions from the community.


.. conda:package:: bioconductor-systempipeshiny

   |downloads_bioconductor-systempipeshiny| |docker_bioconductor-systempipeshiny|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bsplus: 
   :depends on r-crayon: 
   :depends on r-dplyr: 
   :depends on r-drawer: ``>=0.2``
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-glue: 
   :depends on r-htmltools: 
   :depends on r-magrittr: 
   :depends on r-openssl: 
   :depends on r-plotly: 
   :depends on r-r6: 
   :depends on r-rlang: 
   :depends on r-rsqlite: 
   :depends on r-rstudioapi: 
   :depends on r-shiny: ``>=1.6.0``
   :depends on r-shinyace: 
   :depends on r-shinydashboard: 
   :depends on r-shinydashboardplus: ``>=2.0.0``
   :depends on r-shinyfiles: 
   :depends on r-shinyjqui: 
   :depends on r-shinyjs: 
   :depends on r-shinytoastr: 
   :depends on r-shinywidgets: 
   :depends on r-spscomps: ``>=0.3.3``
   :depends on r-spsutil: ``>=0.2.2``
   :depends on r-stringr: 
   :depends on r-styler: 
   :depends on r-tibble: 
   :depends on r-vroom: ``>=1.3.1``
   :depends on r-yaml: 

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

    pixi global install bioconductor-systempipeshiny

to add into an existing workspace instead, run::

    pixi add bioconductor-systempipeshiny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-systempipeshiny

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-systempipeshiny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-systempipeshiny:<tag>

(see `bioconductor-systempipeshiny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-systempipeshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempipeshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-systempipeshiny
   :alt:   (downloads)
.. |docker_bioconductor-systempipeshiny| image:: https://quay.io/repository/biocontainers/bioconductor-systempipeshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempipeshiny
.. _`bioconductor-systempipeshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-systempipeshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-systempipeshiny";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-systempipeshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-systempipeshiny/README.html