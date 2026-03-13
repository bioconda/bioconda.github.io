:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sccomp'
.. highlight: bash

bioconductor-sccomp
===================

.. conda:recipe:: bioconductor-sccomp
   :replaces_section_title:
   :noindex:

   Robust Outlier\-aware Estimation of Composition and Heterogeneity for Single\-cell Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sccomp.html
   :license: GPL-3
   :recipe: /`bioconductor-sccomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccomp/meta.yaml>`_

   A robust and outlier\-aware method for testing differential tissue composition from single\-cell data. This model can infer changes in tissue composition and heterogeneity\, and can produce realistic data simulations based on any existing dataset. This model can also transfer knowledge from a large set of integrated datasets to increase accuracy further.


.. conda:package:: bioconductor-sccomp

   |downloads_bioconductor-sccomp| |docker_bioconductor-sccomp|

   :versions:
      
      

      ``1.4.0-0``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bh: ``>=1.66.0``
   :depends on r-boot: 
   :depends on r-dplyr: 
   :depends on r-forcats: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glue: 
   :depends on r-lifecycle: 
   :depends on r-magrittr: 
   :depends on r-patchwork: 
   :depends on r-purrr: 
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-rcppparallel: ``>=5.0.1``
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-rstan: ``>=2.18.1``
   :depends on r-rstantools: ``>=2.1.1``
   :depends on r-scales: 
   :depends on r-seuratobject: 
   :depends on r-stanheaders: ``>=2.18.0``
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-sccomp

to add into an existing workspace instead, run::

    pixi add bioconductor-sccomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sccomp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sccomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sccomp:<tag>

(see `bioconductor-sccomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sccomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sccomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sccomp
   :alt:   (downloads)
.. |docker_bioconductor-sccomp| image:: https://quay.io/repository/biocontainers/bioconductor-sccomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sccomp
.. _`bioconductor-sccomp/tags`: https://quay.io/repository/biocontainers/bioconductor-sccomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sccomp";
        var versions = ["1.4.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sccomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sccomp/README.html