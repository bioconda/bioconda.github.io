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

      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggforce: 
   :depends on r-gghalves: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-gtable: 
   :depends on r-knitr: 
   :depends on r-magrittr: 
   :depends on r-plyr: 
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-tidyr: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-mqmetrics

to add into an existing workspace instead, run::

    pixi add bioconductor-mqmetrics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mqmetrics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mqmetrics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mqmetrics:<tag>

(see `bioconductor-mqmetrics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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