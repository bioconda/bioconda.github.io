:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corona_lineage_dynamics'
.. highlight: bash

corona_lineage_dynamics
=======================

.. conda:recipe:: corona_lineage_dynamics
   :replaces_section_title:
   :noindex:

   Analyzing and visualizing pangolin lineages of GISAID metadata.

   :homepage: https://github.com/hzi-bifo/corona_lineage_dynamics
   :license: OTHER / ASL
   :recipe: /`corona_lineage_dynamics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corona_lineage_dynamics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corona_lineage_dynamics/meta.yaml>`_

   


.. conda:package:: corona_lineage_dynamics

   |downloads_corona_lineage_dynamics| |docker_corona_lineage_dynamics|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends boost: 
   :depends libboost: ``>=1.84.0,<1.85.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-binom: 
   :depends r-countrycode: 
   :depends r-d3heatmap: 
   :depends r-devtools: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-htmltools: 
   :depends r-htmlwidgets: 
   :depends r-knitr: 
   :depends r-lifecycle: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pkgdown: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-ragg: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-readr: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-systemfonts: 
   :depends r-tictoc: 
   :depends r-tidyr: 
   :depends r-withr: 
   :depends r-xml2: 
   :depends r-xtable: 
   :depends ta-lib: 
   :depends zlib: 
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

      mamba install corona_lineage_dynamics

   and update with::

      mamba update corona_lineage_dynamics

  To create a new environment, run::

      mamba create --name myenvname corona_lineage_dynamics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/corona_lineage_dynamics:<tag>

   (see `corona_lineage_dynamics/tags`_ for valid values for ``<tag>``)


.. |downloads_corona_lineage_dynamics| image:: https://img.shields.io/conda/dn/bioconda/corona_lineage_dynamics.svg?style=flat
   :target: https://anaconda.org/bioconda/corona_lineage_dynamics
   :alt:   (downloads)
.. |docker_corona_lineage_dynamics| image:: https://quay.io/repository/biocontainers/corona_lineage_dynamics/status
   :target: https://quay.io/repository/biocontainers/corona_lineage_dynamics
.. _`corona_lineage_dynamics/tags`: https://quay.io/repository/biocontainers/corona_lineage_dynamics?tab=tags


.. raw:: html

    <script>
        var package = "corona_lineage_dynamics";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corona_lineage_dynamics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corona_lineage_dynamics/README.html