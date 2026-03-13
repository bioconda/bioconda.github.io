:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lipidomer'
.. highlight: bash

r-lipidomer
===========

.. conda:recipe:: r-lipidomer
   :replaces_section_title:
   :noindex:

   Create lipidome\-wide heatmaps of statistics with the \'lipidomeR\'. The \'lipidomeR\' provides a streamlined pipeline for the systematic interpretation of the lipidome through publication\-ready visualizations of regression models fitted on lipidomics data. With \'lipidomeR\'\, associations between covariates and the lipidome can be interpreted systematically and intuitively through heatmaps\, where lipids are categorized by the lipid class and are presented on two\-dimensional maps organized by the lipid size and level of saturation. This way\, the \'lipidomeR\' helps you gain an immediate understanding of the multivariate patterns in the lipidome already at first glance. You can create lipidome\-wide heatmaps of statistical associations\, changes\, differences\, variation\, or other lipid\-specific values. The heatmaps are provided with publication\-ready quality and the results behind the visualizations are based on rigorous statistical models.

   :homepage: https://tommi-s.github.io/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-lipidomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lipidomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lipidomer/meta.yaml>`_

   


.. conda:package:: r-lipidomer

   |downloads_r-lipidomer| |docker_r-lipidomer|

   :versions:
      
      

      ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-reshape2: 
   :depends on r-shadowtext: 
   :depends on r-stringr: 
   :depends on r-tableone: 
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

    pixi global install r-lipidomer

to add into an existing workspace instead, run::

    pixi add r-lipidomer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-lipidomer

Alternatively, to install into a new environment, run::

    conda create -n envname r-lipidomer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-lipidomer:<tag>

(see `r-lipidomer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-lipidomer| image:: https://img.shields.io/conda/dn/bioconda/r-lipidomer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lipidomer
   :alt:   (downloads)
.. |docker_r-lipidomer| image:: https://quay.io/repository/biocontainers/r-lipidomer/status
   :target: https://quay.io/repository/biocontainers/r-lipidomer
.. _`r-lipidomer/tags`: https://quay.io/repository/biocontainers/r-lipidomer?tab=tags


.. raw:: html

    <script>
        var package = "r-lipidomer";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lipidomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lipidomer/README.html