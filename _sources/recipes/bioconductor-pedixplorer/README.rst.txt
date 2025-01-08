:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pedixplorer'
.. highlight: bash

bioconductor-pedixplorer
========================

.. conda:recipe:: bioconductor-pedixplorer
   :replaces_section_title:
   :noindex:

   Pedigree Functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Pedixplorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pedixplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedixplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedixplorer/meta.yaml>`_

   Routines to handle family data with a Pedigree object. The initial purpose was to create correlation structures that describe family relationships such as kinship and identity\-by\-descent\, which can be used to model family data in mixed effects models\, such as in the coxme function. Also includes a tool for Pedigree drawing which is focused on producing compact layouts without intervention. Recent additions include utilities to trim the Pedigree object with various criteria\, and kinship for the X chromosome.


.. conda:package:: bioconductor-pedixplorer

   |downloads_bioconductor-pedixplorer| |docker_bioconductor-pedixplorer|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-htmlwidgets: 
   :depends r-matrix: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-quadprog: 
   :depends r-readxl: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinytoastr: 
   :depends r-shinywidgets: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-pedixplorer

   and update with::

      mamba update bioconductor-pedixplorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pedixplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pedixplorer:<tag>

   (see `bioconductor-pedixplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pedixplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pedixplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pedixplorer
   :alt:   (downloads)
.. |docker_bioconductor-pedixplorer| image:: https://quay.io/repository/biocontainers/bioconductor-pedixplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pedixplorer
.. _`bioconductor-pedixplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-pedixplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pedixplorer";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pedixplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pedixplorer/README.html