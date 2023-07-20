:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ptairms'
.. highlight: bash

bioconductor-ptairms
====================

.. conda:recipe:: bioconductor-ptairms
   :replaces_section_title:
   :noindex:

   Pre\-processing PTR\-TOF\-MS Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ptairMS.html
   :license: GPL-3
   :recipe: /`bioconductor-ptairms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairms/meta.yaml>`_

   This package implements a suite of methods to preprocess data from PTR\-TOF\-MS instruments \(HDF5 format\) and generates the \'sample by features\' table of peak intensities in addition to the sample and feature metadata \(as a single ExpressionSet object for subsequent statistical analysis\). This package also permit usefull tools for cohorts management as analyzing data progressively\, visualization tools and quality control. The steps include calibration\, expiration detection\, peak detection and quantification\, feature alignment\, missing value imputation and feature annotation. Applications to exhaled air and cell culture in headspace are described in the vignettes and examples. This package was used for data analysis of Gassin Delyle study on adults undergoing invasive mechanical ventilation in the intensive care unit due to severe COVID\-19 or non\-COVID\-19 acute respiratory distress syndrome \(ARDS\)\, and permit to identfy four potentiel biomarquers of the infection.


.. conda:package:: bioconductor-ptairms

   |downloads_bioconductor-ptairms| |docker_bioconductor-ptairms|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-msnbase: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ptairms

   and update with::

      conda update bioconductor-ptairms

   or use the docker container::

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
        var versions = ["1.8.0","1.6.0","1.6.0","1.2.0","1.2.0"];
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