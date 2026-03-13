:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tsar'
.. highlight: bash

bioconductor-tsar
=================

.. conda:recipe:: bioconductor-tsar
   :replaces_section_title:
   :noindex:

   Thermal Shift Analysis in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TSAR.html
   :license: AGPL-3
   :recipe: /`bioconductor-tsar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tsar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tsar/meta.yaml>`_

   This package automates analysis workflow for Thermal Shift Analysis \(TSA\) data. Processing\, analyzing\, and visualizing data through both shiny applications and command lines. Package aims to simplify data analysis and offer front to end workflow\, from raw data to multiple trial analysis.


.. conda:package:: bioconductor-tsar

   |downloads_bioconductor-tsar| |docker_bioconductor-tsar|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.0.7``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-ggpubr: ``>=0.4.0``
   :depends on r-jsonlite: ``>=1.8.7``
   :depends on r-magrittr: ``>=2.0.3``
   :depends on r-mgcv: ``>=1.8.38``
   :depends on r-minpack.lm: ``>=1.2.3``
   :depends on r-openxlsx: ``>=4.2.5.2``
   :depends on r-plotly: ``>=4.10.2``
   :depends on r-readxl: ``>=1.4.0``
   :depends on r-rhandsontable: ``>=0.3.8``
   :depends on r-shiny: ``>=1.7.4.1``
   :depends on r-shinyjs: ``>=2.1.0``
   :depends on r-shinywidgets: ``>=0.7.6``
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-tidyr: ``>=1.1.4``

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

    pixi global install bioconductor-tsar

to add into an existing workspace instead, run::

    pixi add bioconductor-tsar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tsar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tsar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tsar:<tag>

(see `bioconductor-tsar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tsar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tsar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tsar
   :alt:   (downloads)
.. |docker_bioconductor-tsar| image:: https://quay.io/repository/biocontainers/bioconductor-tsar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tsar
.. _`bioconductor-tsar/tags`: https://quay.io/repository/biocontainers/bioconductor-tsar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tsar";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tsar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tsar/README.html