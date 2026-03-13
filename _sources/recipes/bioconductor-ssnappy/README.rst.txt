:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ssnappy'
.. highlight: bash

bioconductor-ssnappy
====================

.. conda:recipe:: bioconductor-ssnappy
   :replaces_section_title:
   :noindex:

   Single Sample directioNAl Pathway Perturbation analYsis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sSNAPPY.html
   :license: GPL-3
   :recipe: /`bioconductor-ssnappy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssnappy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssnappy/meta.yaml>`_

   A single sample pathway perturbation testing method for RNA\-seq data. The method propagates changes in gene expression down gene\-set topologies to compute single\-sample directional pathway perturbation scores that reflect potential direction of change. Perturbation scores can be used to test significance of pathway perturbation at both individual\-sample and treatment levels.


.. conda:package:: bioconductor-ssnappy

   |downloads_bioconductor-ssnappy| |docker_bioconductor-ssnappy|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-graphite: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.1``
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-gtools: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-pheatmap: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-ssnappy

to add into an existing workspace instead, run::

    pixi add bioconductor-ssnappy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ssnappy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ssnappy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ssnappy:<tag>

(see `bioconductor-ssnappy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ssnappy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ssnappy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ssnappy
   :alt:   (downloads)
.. |docker_bioconductor-ssnappy| image:: https://quay.io/repository/biocontainers/bioconductor-ssnappy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ssnappy
.. _`bioconductor-ssnappy/tags`: https://quay.io/repository/biocontainers/bioconductor-ssnappy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ssnappy";
        var versions = ["1.14.0","1.10.0","1.6.1","1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ssnappy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ssnappy/README.html