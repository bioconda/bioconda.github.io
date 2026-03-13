:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-protgear'
.. highlight: bash

bioconductor-protgear
=====================

.. conda:recipe:: bioconductor-protgear
   :replaces_section_title:
   :noindex:

   Protein Micro Array Data Management and Interactive Visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/protGear.html
   :license: GPL-3
   :recipe: /`bioconductor-protgear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgear/meta.yaml>`_

   A generic three\-step pre\-processing package for protein microarray data. This package contains different data pre\-processing procedures to allow comparison of their performance.These steps are background correction\, the coefficient of variation \(CV\) based filtering\, batch correction and normalization.


.. conda:package:: bioconductor-protgear

   |downloads_bioconductor-protgear| |docker_bioconductor-protgear|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-vsn: ``>=3.74.0,<3.75.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: ``>=1.14.0``
   :depends on r-dplyr: ``>=0.8.0``
   :depends on r-factoextra: ``>=1.0.7``
   :depends on r-factominer: ``>=2.4``
   :depends on r-flexdashboard: ``>=0.5.2``
   :depends on r-ggally: ``>=2.1.2``
   :depends on r-ggplot2: ``>=3.3.0``
   :depends on r-ggpubr: ``>=0.4.0``
   :depends on r-gtools: ``>=3.8.2``
   :depends on r-htmltools: ``>=0.4.0``
   :depends on r-kendall: ``>=2.2``
   :depends on r-knitr: ``>=1.33``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-mass: ``>=7.3``
   :depends on r-pheatmap: ``>=1.0.12``
   :depends on r-plotly: ``>=4.9.0``
   :depends on r-plyr: ``>=1.8.6``
   :depends on r-purrr: ``>=0.3.4``
   :depends on r-readr: ``>=2.0.1``
   :depends on r-remotes: ``>=2.4.0``
   :depends on r-rlang: ``>=0.4.11``
   :depends on r-rmarkdown: ``>=2.9``
   :depends on r-shiny: ``>=1.0.0``
   :depends on r-shinydashboard: ``>=0.7.1``
   :depends on r-styler: ``>=1.6.1``
   :depends on r-tibble: ``>=3.1.0``
   :depends on r-tidyr: ``>=1.1.3``

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

    pixi global install bioconductor-protgear

to add into an existing workspace instead, run::

    pixi add bioconductor-protgear

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-protgear

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-protgear

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-protgear:<tag>

(see `bioconductor-protgear/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-protgear| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-protgear.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-protgear
   :alt:   (downloads)
.. |docker_bioconductor-protgear| image:: https://quay.io/repository/biocontainers/bioconductor-protgear/status
   :target: https://quay.io/repository/biocontainers/bioconductor-protgear
.. _`bioconductor-protgear/tags`: https://quay.io/repository/biocontainers/bioconductor-protgear?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-protgear";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-protgear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-protgear/README.html