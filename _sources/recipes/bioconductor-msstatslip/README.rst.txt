:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatslip'
.. highlight: bash

bioconductor-msstatslip
=======================

.. conda:recipe:: bioconductor-msstatslip
   :replaces_section_title:
   :noindex:

   LiP Significance Analysis in shotgun mass spectrometry\-based proteomic experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MSstatsLiP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatslip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslip/meta.yaml>`_

   Tools for LiP peptide and protein significance analysis. Provides functions for summarization\, estimation of LiP peptide abundance\, and detection of changes across conditions. Utilizes functionality across the MSstats family of packages.


.. conda:package:: bioconductor-msstatslip

   |downloads_bioconductor-msstatslip| |docker_bioconductor-msstatslip|

   :versions:
      
      

      ``1.8.1-0``,  ``1.6.0-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-msstats: ``>=4.10.0,<4.11.0``
   :depends bioconductor-msstats: ``>=4.10.0,<4.11.0a0``
   :depends bioconductor-msstatsconvert: ``>=1.12.0,<1.13.0``
   :depends bioconductor-msstatsconvert: ``>=1.12.0,<1.13.0a0``
   :depends bioconductor-msstatsptm: ``>=2.4.0,<2.5.0``
   :depends bioconductor-msstatsptm: ``>=2.4.1,<2.5.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-factoextra: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-msstatslip

   and update with::

      mamba update bioconductor-msstatslip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstatslip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatslip:<tag>

   (see `bioconductor-msstatslip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatslip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatslip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatslip
   :alt:   (downloads)
.. |docker_bioconductor-msstatslip| image:: https://quay.io/repository/biocontainers/bioconductor-msstatslip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatslip
.. _`bioconductor-msstatslip/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatslip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatslip";
        var versions = ["1.8.1","1.6.0","1.3.1","1.3.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatslip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatslip/README.html