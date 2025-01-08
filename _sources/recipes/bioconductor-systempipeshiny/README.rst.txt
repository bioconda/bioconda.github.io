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
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bsplus: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-drawer: ``>=0.2``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-glue: 
   :depends r-htmltools: 
   :depends r-magrittr: 
   :depends r-openssl: 
   :depends r-plotly: 
   :depends r-r6: 
   :depends r-rlang: 
   :depends r-rsqlite: 
   :depends r-rstudioapi: 
   :depends r-shiny: ``>=1.6.0``
   :depends r-shinyace: 
   :depends r-shinydashboard: 
   :depends r-shinydashboardplus: ``>=2.0.0``
   :depends r-shinyfiles: 
   :depends r-shinyjqui: 
   :depends r-shinyjs: 
   :depends r-shinytoastr: 
   :depends r-shinywidgets: 
   :depends r-spscomps: ``>=0.3.3``
   :depends r-spsutil: ``>=0.2.2``
   :depends r-stringr: 
   :depends r-styler: 
   :depends r-tibble: 
   :depends r-vroom: ``>=1.3.1``
   :depends r-yaml: 
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

      mamba install bioconductor-systempipeshiny

   and update with::

      mamba update bioconductor-systempipeshiny

  To create a new environment, run::

      mamba create --name myenvname bioconductor-systempipeshiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-systempipeshiny:<tag>

   (see `bioconductor-systempipeshiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-systempipeshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempipeshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-systempipeshiny
   :alt:   (downloads)
.. |docker_bioconductor-systempipeshiny| image:: https://quay.io/repository/biocontainers/bioconductor-systempipeshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempipeshiny
.. _`bioconductor-systempipeshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-systempipeshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-systempipeshiny";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
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