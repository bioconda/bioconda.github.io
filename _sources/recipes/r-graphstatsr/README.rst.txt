:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-graphstatsr'
.. highlight: bash

r-graphstatsr
=============

.. conda:recipe:: r-graphstatsr
   :replaces_section_title:
   :noindex:

   A Shiny app to easily generate advanced graphics and perform some non\-parametric tests\, designed for metabolomics data analysis and developed by MetaBoHUB\-Metatoul.

   :homepage: https://forge.inrae.fr/etienne.rifa/graphstats
   :license: GPL-3.0-or-later
   :recipe: /`r-graphstatsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-graphstatsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-graphstatsr/meta.yaml>`_

   


.. conda:package:: r-graphstatsr

   |downloads_r-graphstatsr| |docker_r-graphstatsr|

   :versions:
      
      

      ``2.6.1-0``

      

   
   :depends bioconductor-rhdf5: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-base64enc: 
   :depends r-bit64: 
   :depends r-car: 
   :depends r-config: ``>=0.3.1``
   :depends r-datamods: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-factoextra: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggstatsplot: 
   :depends r-glue: 
   :depends r-golem: ``>=0.3.1``
   :depends r-gridextra: 
   :depends r-htmltools: 
   :depends r-openxlsx: 
   :depends r-plotly: 
   :depends r-pmcmrplus: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-shiny: ``>=1.6.0``
   :depends r-shinyalert: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-shinywidgets: 
   :depends r-sortable: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-waiter: 
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

      mamba install r-graphstatsr

   and update with::

      mamba update r-graphstatsr

  To create a new environment, run::

      mamba create --name myenvname r-graphstatsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-graphstatsr:<tag>

   (see `r-graphstatsr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-graphstatsr| image:: https://img.shields.io/conda/dn/bioconda/r-graphstatsr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-graphstatsr
   :alt:   (downloads)
.. |docker_r-graphstatsr| image:: https://quay.io/repository/biocontainers/r-graphstatsr/status
   :target: https://quay.io/repository/biocontainers/r-graphstatsr
.. _`r-graphstatsr/tags`: https://quay.io/repository/biocontainers/r-graphstatsr?tab=tags


.. raw:: html

    <script>
        var package = "r-graphstatsr";
        var versions = ["2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-graphstatsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-graphstatsr/README.html