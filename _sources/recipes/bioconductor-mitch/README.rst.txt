:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mitch'
.. highlight: bash

bioconductor-mitch
==================

.. conda:recipe:: bioconductor-mitch
   :replaces_section_title:
   :noindex:

   Multi\-Contrast Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mitch.html
   :license: CC BY-SA 4.0 + file LICENSE
   :recipe: /`bioconductor-mitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitch/meta.yaml>`_

   mitch is an R package for multi\-contrast enrichment analysis. At it’s heart\, it uses a rank\-MANOVA based statistical approach to detect sets of genes that exhibit enrichment in the multidimensional space as compared to the background. The rank\-MANOVA concept dates to work by Cox and Mann \(https\:\/\/doi.org\/10.1186\/1471\-2105\-13\-S16\-S12\). mitch is useful for pathway analysis of profiling studies with one\, two or more contrasts\, or in studies with multiple omics profiling\, for example proteomic\, transcriptomic\, epigenomic analysis of the same samples. mitch is perfectly suited for pathway level differential analysis of scRNA\-seq data. The main strengths of mitch are that it can import datasets easily from many upstream tools and has advanced plotting features to visualise these enrichments.


.. conda:package:: bioconductor-mitch

   |downloads_bioconductor-mitch| |docker_bioconductor-mitch|

   :versions:
      
      

      ``1.22.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-beeswarm: 
   :depends on r-dplyr: 
   :depends on r-echarts4r: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gridextra: 
   :depends on r-kableextra: 
   :depends on r-knitr: 
   :depends on r-mass: 
   :depends on r-network: 
   :depends on r-plyr: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 

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

    pixi global install bioconductor-mitch

to add into an existing workspace instead, run::

    pixi add bioconductor-mitch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mitch

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mitch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mitch:<tag>

(see `bioconductor-mitch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mitch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mitch
   :alt:   (downloads)
.. |docker_bioconductor-mitch| image:: https://quay.io/repository/biocontainers/bioconductor-mitch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitch
.. _`bioconductor-mitch/tags`: https://quay.io/repository/biocontainers/bioconductor-mitch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mitch";
        var versions = ["1.22.1","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitch/README.html