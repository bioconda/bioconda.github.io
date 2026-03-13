:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bigpint'
.. highlight: bash

bioconductor-bigpint
====================

.. conda:recipe:: bioconductor-bigpint
   :replaces_section_title:
   :noindex:

   Big multivariate data plotted interactively

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/bigPint.html
   :license: GPL-3
   :recipe: /`bioconductor-bigpint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigpint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigpint/meta.yaml>`_

   Methods for visualizing large multivariate datasets using static and interactive scatterplot matrices\, parallel coordinate plots\, volcano plots\, and litre plots. Includes examples for visualizing RNA\-sequencing datasets and differentially expressed genes.


.. conda:package:: bioconductor-bigpint

   |downloads_bioconductor-bigpint| |docker_bioconductor-bigpint|

   :versions:
      
      

      ``1.15.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends on bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: ``>=0.7.2``
   :depends on r-ggally: ``>=1.3.2``
   :depends on r-ggplot2: ``>=2.2.1``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-hexbin: ``>=1.27.1``
   :depends on r-hmisc: ``>=4.0.3``
   :depends on r-htmlwidgets: ``>=0.9``
   :depends on r-plotly: ``>=4.7.1``
   :depends on r-plyr: ``>=1.8.4``
   :depends on r-rcolorbrewer: ``>=1.1.2``
   :depends on r-reshape: ``>=0.8.7``
   :depends on r-shiny: ``>=1.0.5``
   :depends on r-shinycssloaders: ``>=0.2.0``
   :depends on r-shinydashboard: ``>=0.6.1``
   :depends on r-stringr: ``>=1.3.1``
   :depends on r-tidyr: ``>=0.7.0``

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

    pixi global install bioconductor-bigpint

to add into an existing workspace instead, run::

    pixi add bioconductor-bigpint

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bigpint

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bigpint

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bigpint:<tag>

(see `bioconductor-bigpint/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bigpint| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bigpint.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bigpint
   :alt:   (downloads)
.. |docker_bioconductor-bigpint| image:: https://quay.io/repository/biocontainers/bioconductor-bigpint/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bigpint
.. _`bioconductor-bigpint/tags`: https://quay.io/repository/biocontainers/bioconductor-bigpint?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bigpint";
        var versions = ["1.15.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bigpint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bigpint/README.html