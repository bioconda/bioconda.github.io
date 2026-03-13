:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidytof'
.. highlight: bash

bioconductor-tidytof
====================

.. conda:recipe:: bioconductor-tidytof
   :replaces_section_title:
   :noindex:

   Analyze High\-dimensional Cytometry Data Using Tidy Data Principles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidytof.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tidytof <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidytof>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidytof/meta.yaml>`_

   This package implements an interactive\, scientific analysis pipeline for high\-dimensional cytometry data built using tidy data principles. It is specifically designed to play well with both the tidyverse and Bioconductor software ecosystems\, with functionality for reading\/writing data files\, data cleaning\, preprocessing\, clustering\, visualization\, modeling\, and other quality\-of\-life functions. tidytof implements a \"grammar\" of high\-dimensional cytometry data analysis.


.. conda:package:: bioconductor-tidytof

   |downloads_bioconductor-tidytof| |docker_bioconductor-tidytof|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-flowcore: ``>=2.18.0,<2.19.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-glmnet: 
   :depends on r-purrr: 
   :depends on r-rcpp: 
   :depends on r-rcpphnsw: 
   :depends on r-readr: 
   :depends on r-recipes: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-survival: 
   :depends on r-tibble: 
   :depends on r-tidygraph: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-yardstick: 

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

    pixi global install bioconductor-tidytof

to add into an existing workspace instead, run::

    pixi add bioconductor-tidytof

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tidytof

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tidytof

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tidytof:<tag>

(see `bioconductor-tidytof/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tidytof| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidytof.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidytof
   :alt:   (downloads)
.. |docker_bioconductor-tidytof| image:: https://quay.io/repository/biocontainers/bioconductor-tidytof/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidytof
.. _`bioconductor-tidytof/tags`: https://quay.io/repository/biocontainers/bioconductor-tidytof?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidytof";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidytof/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidytof/README.html