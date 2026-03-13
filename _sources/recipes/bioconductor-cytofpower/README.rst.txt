:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytofpower'
.. highlight: bash

bioconductor-cytofpower
=======================

.. conda:recipe:: bioconductor-cytofpower
   :replaces_section_title:
   :noindex:

   Power analysis for CyTOF experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CyTOFpower.html
   :license: LGPL-3
   :recipe: /`bioconductor-cytofpower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofpower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofpower/meta.yaml>`_

   This package is a tool to predict the power of CyTOF experiments in the context of differential state analyses. The package provides a shiny app with two options to predict the power of an experiment\: i. generation of in\-sicilico CyTOF data\, using users input ii. browsing in a grid of parameters for which the power was already precomputed.


.. conda:package:: bioconductor-cytofpower

   |downloads_bioconductor-cytofpower| |docker_bioconductor-cytofpower|

   :versions:
      
      

      ``1.16.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-cytoglmm: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-diffcyt: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-shinyfeedback: 
   :depends on r-shinyjs: 
   :depends on r-shinymatrix: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-cytofpower

to add into an existing workspace instead, run::

    pixi add bioconductor-cytofpower

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cytofpower

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cytofpower

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cytofpower:<tag>

(see `bioconductor-cytofpower/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cytofpower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytofpower.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytofpower
   :alt:   (downloads)
.. |docker_bioconductor-cytofpower| image:: https://quay.io/repository/biocontainers/bioconductor-cytofpower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytofpower
.. _`bioconductor-cytofpower/tags`: https://quay.io/repository/biocontainers/bioconductor-cytofpower?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytofpower";
        var versions = ["1.16.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytofpower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytofpower/README.html