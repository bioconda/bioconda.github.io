:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-intlim'
.. highlight: bash

r-intlim
========

.. conda:recipe:: r-intlim
   :replaces_section_title:
   :noindex:

   Integration of Omics Data Using Linear Modeling

   :homepage: http://github.com/Mathelab/IntLIM/
   :license: GPL / GPL-2.0-only
   :recipe: /`r-intlim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-intlim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-intlim/meta.yaml>`_

   


.. conda:package:: r-intlim

   |downloads_r-intlim| |docker_r-intlim|

   :versions:
      
      

      ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-0``,  ``v.1.1.0-1``,  ``v.1.1.0-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-multidataset: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-heatmaply: 
   :depends r-highcharter: 
   :depends r-htmltools: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
   :depends r-tidyr: 
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

      mamba install r-intlim

   and update with::

      mamba update r-intlim

  To create a new environment, run::

      mamba create --name myenvname r-intlim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-intlim:<tag>

   (see `r-intlim/tags`_ for valid values for ``<tag>``)


.. |downloads_r-intlim| image:: https://img.shields.io/conda/dn/bioconda/r-intlim.svg?style=flat
   :target: https://anaconda.org/bioconda/r-intlim
   :alt:   (downloads)
.. |docker_r-intlim| image:: https://quay.io/repository/biocontainers/r-intlim/status
   :target: https://quay.io/repository/biocontainers/r-intlim
.. _`r-intlim/tags`: https://quay.io/repository/biocontainers/r-intlim?tab=tags


.. raw:: html

    <script>
        var package = "r-intlim";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","v.1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-intlim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-intlim/README.html