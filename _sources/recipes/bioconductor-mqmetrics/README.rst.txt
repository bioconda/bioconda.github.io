:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mqmetrics'
.. highlight: bash

bioconductor-mqmetrics
======================

.. conda:recipe:: bioconductor-mqmetrics
   :replaces_section_title:
   :noindex:

   Quality Control of Protemics Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MQmetrics.html
   :license: GPL-3
   :recipe: /`bioconductor-mqmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mqmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mqmetrics/meta.yaml>`_

   The package MQmetrics \(MaxQuant metrics\) provides a workflow to analyze the quality and reproducibility of your proteomics mass spectrometry analysis from MaxQuant.Input data are extracted from several MaxQuant output tables\, and produces a pdf report. It includes several visualization tools to check numerous parameters regarding the quality of the runs.It also includes two functions to visualize the iRT peptides from Biognosysin case they were spiked in the samples.


.. conda:package:: bioconductor-mqmetrics

   |downloads_bioconductor-mqmetrics| |docker_bioconductor-mqmetrics|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-chron: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggridges: 
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

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mqmetrics

   and update with::

      conda update bioconductor-mqmetrics

   or use the docker container::

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
        var versions = ["1.0.0"];
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