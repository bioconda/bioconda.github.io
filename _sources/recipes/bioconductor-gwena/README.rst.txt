:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwena'
.. highlight: bash

bioconductor-gwena
==================

.. conda:recipe:: bioconductor-gwena
   :replaces_section_title:
   :noindex:

   Pipeline for augmented co\-expression analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GWENA.html
   :license: GPL-3
   :recipe: /`bioconductor-gwena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwena/meta.yaml>`_

   The development of high\-throughput sequencing led to increased use of co\-expression analysis to go beyong single feature \(i.e. gene\) focus. We propose GWENA \(Gene Whole co\-Expression Network Analysis\) \, a tool designed to perform gene co\-expression network analysis and explore the results in a single pipeline. It includes functional enrichment of modules of co\-expressed genes\, phenotypcal association\, topological analysis and comparison of networks configuration between conditions.


.. conda:package:: bioconductor-gwena

   |downloads_bioconductor-gwena| |docker_bioconductor-gwena|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: ``>=2.1.0``
   :depends on r-dplyr: ``>=0.8.3``
   :depends on r-dynamictreecut: ``>=1.63-1``
   :depends on r-ggplot2: ``>=3.1.1``
   :depends on r-gprofiler2: ``>=0.1.6``
   :depends on r-igraph: ``>=1.2.4.1``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-matrixstats: ``>=0.55.0``
   :depends on r-netrep: ``>=1.2.1``
   :depends on r-purrr: ``>=0.3.3``
   :depends on r-rcolorbrewer: ``>=1.1-2``
   :depends on r-rlist: ``>=0.4.6.1``
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-tibble: ``>=2.1.1``
   :depends on r-tidyr: ``>=1.0.0``
   :depends on r-wgcna: ``>=1.67``

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

    pixi global install bioconductor-gwena

to add into an existing workspace instead, run::

    pixi add bioconductor-gwena

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gwena

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gwena

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gwena:<tag>

(see `bioconductor-gwena/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gwena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwena
   :alt:   (downloads)
.. |docker_bioconductor-gwena| image:: https://quay.io/repository/biocontainers/bioconductor-gwena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwena
.. _`bioconductor-gwena/tags`: https://quay.io/repository/biocontainers/bioconductor-gwena?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwena";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwena/README.html