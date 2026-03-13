:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dce'
.. highlight: bash

bioconductor-dce
================

.. conda:recipe:: bioconductor-dce
   :replaces_section_title:
   :noindex:

   Pathway Enrichment Based on Differential Causal Effects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dce.html
   :license: GPL-3
   :recipe: /`bioconductor-dce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dce/meta.yaml>`_

   Compute differential causal effects \(dce\) on \(biological\) networks. Given observational samples from a control experiment and non\-control \(e.g.\, cancer\) for two genes A and B\, we can compute differential causal effects with a \(generalized\) linear regression. If the causal effect of gene A on gene B in the control samples is different from the causal effect in the non\-control samples the dce will differ from zero. We regularize the dce computation by the inclusion of prior network information from pathway databases such as KEGG.


.. conda:package:: bioconductor-dce

   |downloads_bioconductor-dce| |docker_bioconductor-dce|

   :versions:
      
      

      ``1.10.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-epinem: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-graphite: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-mnem: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends on bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: 
   :depends on r-expm: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-glm2: 
   :depends on r-glue: 
   :depends on r-harmonicmeanp: 
   :depends on r-igraph: 
   :depends on r-logger: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-metap: 
   :depends on r-naturalsort: 
   :depends on r-pcalg: 
   :depends on r-ppcor: 
   :depends on r-purrr: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-shadowtext: 
   :depends on r-tidygraph: 
   :depends on r-tidyverse: 

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

    pixi global install bioconductor-dce

to add into an existing workspace instead, run::

    pixi add bioconductor-dce

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dce

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dce

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dce:<tag>

(see `bioconductor-dce/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dce
   :alt:   (downloads)
.. |docker_bioconductor-dce| image:: https://quay.io/repository/biocontainers/bioconductor-dce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dce
.. _`bioconductor-dce/tags`: https://quay.io/repository/biocontainers/bioconductor-dce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dce";
        var versions = ["1.10.0","1.7.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dce/README.html