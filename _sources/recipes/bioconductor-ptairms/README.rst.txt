:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ptairms'
.. highlight: bash

bioconductor-ptairms
====================

.. conda:recipe:: bioconductor-ptairms
   :replaces_section_title:
   :noindex:

   Pre\-processing PTR\-TOF\-MS Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ptairMS.html
   :license: GPL-3
   :recipe: /`bioconductor-ptairms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairms/meta.yaml>`_

   This package implements a suite of methods to preprocess data from PTR\-TOF\-MS instruments \(HDF5 format\) and generates the \'sample by features\' table of peak intensities in addition to the sample and feature metadata \(as a singl\<e ExpressionSet object for subsequent statistical analysis\). This package also permit usefull tools for cohorts management as analyzing data progressively\, visualization tools and quality control. The steps include calibration\, expiration detection\, peak detection and quantification\, feature alignment\, missing value imputation and feature annotation. Applications to exhaled air and cell culture in headspace are described in the vignettes and examples. This package was used for data analysis of Gassin Delyle study on adults undergoing invasive mechanical ventilation in the intensive care unit due to severe COVID\-19 or non\-COVID\-19 acute respiratory distress syndrome \(ARDS\)\, and permit to identfy four potentiel biomarquers of the infection.


.. conda:package:: bioconductor-ptairms

   |downloads_bioconductor-ptairms| |docker_bioconductor-ptairms|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0a0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bit64: 
   :depends r-chron: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dt: 
   :depends r-envipat: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-hmisc: 
   :depends r-minpack.lm: 
   :depends r-plotly: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyscreenshot: 
   :depends r-signal: 
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

      mamba install bioconductor-ptairms

   and update with::

      mamba update bioconductor-ptairms

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ptairms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ptairms:<tag>

   (see `bioconductor-ptairms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ptairms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ptairms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ptairms
   :alt:   (downloads)
.. |docker_bioconductor-ptairms| image:: https://quay.io/repository/biocontainers/bioconductor-ptairms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ptairms
.. _`bioconductor-ptairms/tags`: https://quay.io/repository/biocontainers/bioconductor-ptairms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ptairms";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ptairms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ptairms/README.html