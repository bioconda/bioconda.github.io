:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathostat'
.. highlight: bash

bioconductor-pathostat
======================

.. conda:recipe:: bioconductor-pathostat
   :replaces_section_title:
   :noindex:

   PathoStat Statistical Microbiome Analysis Package

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PathoStat.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pathostat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathostat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathostat/meta.yaml>`_
   :links: biotools: :biotools:`pathostat`, doi: :doi:`10.1038/nmeth.3252`

   The purpose of this package is to perform Statistical Microbiome Analysis on metagenomics results from sequencing data samples. In particular\, it supports analyses on the PathoScope generated report files. PathoStat provides various functionalities including Relative Abundance charts\, Diversity estimates and plots\, tests of Differential Abundance\, Time Series visualization\, and Core OTU analysis.


.. conda:package:: bioconductor-pathostat

   |downloads_bioconductor-pathostat| |docker_bioconductor-pathostat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.4-0``,  ``1.6.1-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-phyloseq: ``>=1.50.0,<1.51.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-corpcor: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gmodels: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rentrez: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :depends r-webshot: 
   :depends r-xml: 
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

      mamba install bioconductor-pathostat

   and update with::

      mamba update bioconductor-pathostat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathostat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathostat:<tag>

   (see `bioconductor-pathostat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathostat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathostat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathostat
   :alt:   (downloads)
.. |docker_bioconductor-pathostat| image:: https://quay.io/repository/biocontainers/bioconductor-pathostat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathostat
.. _`bioconductor-pathostat/tags`: https://quay.io/repository/biocontainers/bioconductor-pathostat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathostat";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathostat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathostat/README.html