:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicspca'
.. highlight: bash

bioconductor-omicspca
=====================

.. conda:recipe:: bioconductor-omicspca
   :replaces_section_title:
   :noindex:

   An R package for quantitative integration and analysis of multiple omics assays from heterogeneous samples

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OMICsPCA.html
   :license: GPL-3
   :recipe: /`bioconductor-omicspca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca/meta.yaml>`_

   OMICsPCA is an analysis pipeline designed to integrate multi OMICs experiments done on various subjects \(e.g. Cell lines\, individuals\)\, treatments \(e.g. disease\/control\) or time points and to analyse such integrated data from various various angles and perspectives. In it\'s core OMICsPCA uses Principal Component Analysis \(PCA\) to integrate multiomics experiments from various sources and thus has ability to over data insufficiency issues by using the ingegrated data as representatives. OMICsPCA can be used in various application including analysis of overall distribution of OMICs assays across various samples \/individuals \/time points\; grouping assays by user\-defined conditions\; identification of source of variation\, similarity\/dissimilarity between assays\, variables or individuals.


.. conda:package:: bioconductor-omicspca

   |downloads_bioconductor-omicspca| |docker_bioconductor-omicspca|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-1``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-helloranges: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-omicspcadata: ``>=1.20.0,<1.21.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-clvalid: 
   :depends r-corrplot: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-factoextra: 
   :depends r-factominer: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-kableextra: 
   :depends r-magick: 
   :depends r-mass: 
   :depends r-nbclust: 
   :depends r-pdftools: 
   :depends r-performanceanalytics: 
   :depends r-reshape2: 
   :depends r-rgl: 
   :depends r-rmarkdown: 
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

      mamba install bioconductor-omicspca

   and update with::

      mamba update bioconductor-omicspca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omicspca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicspca:<tag>

   (see `bioconductor-omicspca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicspca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicspca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicspca
   :alt:   (downloads)
.. |docker_bioconductor-omicspca| image:: https://quay.io/repository/biocontainers/bioconductor-omicspca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicspca
.. _`bioconductor-omicspca/tags`: https://quay.io/repository/biocontainers/bioconductor-omicspca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicspca";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicspca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicspca/README.html