:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mqmetrics'
.. highlight: bash

bioconductor-mqmetrics
======================

.. conda:recipe:: bioconductor-mqmetrics
   :replaces_section_title:
   :noindex:

   Quality Control of Protemics Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MQmetrics.html
   :license: GPL-3
   :recipe: /`bioconductor-mqmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mqmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mqmetrics/meta.yaml>`_

   The package MQmetrics \(MaxQuant metrics\) provides a workflow to analyze the quality and reproducibility of your proteomics mass spectrometry analysis from MaxQuant.Input data are extracted from several MaxQuant output tables and produces a pdf report. It includes several visualization tools to check numerous parameters regarding the quality of the runs. It also includes two functions to visualize the iRT peptides from Biognosys in case they were spiked in the samples.


.. conda:package:: bioconductor-mqmetrics

   |downloads_bioconductor-mqmetrics| |docker_bioconductor-mqmetrics|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-gghalves: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
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

      mamba install bioconductor-mqmetrics

   and update with::

      mamba update bioconductor-mqmetrics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mqmetrics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mqmetrics:<tag>

   (see `bioconductor-mqmetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mqmetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mqmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mqmetrics
   :alt:   (downloads)
.. |docker_bioconductor-mqmetrics| image:: https://quay.io/repository/biocontainers/bioconductor-mqmetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mqmetrics
.. _`bioconductor-mqmetrics/tags`: https://quay.io/repository/biocontainers/bioconductor-mqmetrics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mqmetrics";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mqmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mqmetrics/README.html