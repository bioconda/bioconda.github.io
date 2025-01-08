:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gnosis'
.. highlight: bash

bioconductor-gnosis
===================

.. conda:recipe:: bioconductor-gnosis
   :replaces_section_title:
   :noindex:

   Genomics explorer using statistical and survival analysis in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GNOSIS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gnosis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnosis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnosis/meta.yaml>`_

   GNOSIS incorporates a range of R packages enabling users to efficiently explore and visualise clinical and genomic data obtained from cBioPortal. GNOSIS uses an intuitive GUI and multiple tab panels supporting a range of functionalities. These include data upload and initial exploration\, data recoding and subsetting\, multiple visualisations\, survival analysis\, statistical analysis and mutation analysis\, in addition to facilitating reproducible research.


.. conda:package:: bioconductor-gnosis

   |downloads_bioconductor-gnosis| |docker_bioconductor-gnosis|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-cbioportaldata: ``>=2.18.0,<2.19.0``
   :depends bioconductor-maftools: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-car: 
   :depends r-comparegroups: 
   :depends r-dashboardthemes: 
   :depends r-desctools: 
   :depends r-dt: 
   :depends r-fabricatr: 
   :depends r-fontawesome: 
   :depends r-magrittr: 
   :depends r-operator.tools: 
   :depends r-partykit: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rpart: 
   :depends r-rstatix: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinydashboardplus: 
   :depends r-shinyjs: 
   :depends r-shinylogs: 
   :depends r-shinymeta: 
   :depends r-shinywidgets: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-tidyverse: 
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

      mamba install bioconductor-gnosis

   and update with::

      mamba update bioconductor-gnosis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gnosis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gnosis:<tag>

   (see `bioconductor-gnosis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gnosis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gnosis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gnosis
   :alt:   (downloads)
.. |docker_bioconductor-gnosis| image:: https://quay.io/repository/biocontainers/bioconductor-gnosis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gnosis
.. _`bioconductor-gnosis/tags`: https://quay.io/repository/biocontainers/bioconductor-gnosis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gnosis";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gnosis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gnosis/README.html