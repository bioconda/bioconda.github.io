:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-comapr'
.. highlight: bash

bioconductor-comapr
===================

.. conda:recipe:: bioconductor-comapr
   :replaces_section_title:
   :noindex:

   Crossover analysis and genetic map construction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/comapr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-comapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comapr/meta.yaml>`_

   comapr detects crossover intervals for single gametes from their haplotype states sequences and stores the crossovers in GRanges object. The genetic distances can then be calculated via the mapping functions using estimated crossover rates for maker intervals. Visualisation functions for plotting interval\-based genetic map or cumulative genetic distances are implemented\, which help reveal the variation of crossovers landscapes across the genome and across individuals.


.. conda:package:: bioconductor-comapr

   |downloads_bioconductor-comapr| |docker_bioconductor-comapr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-matrix: 
   :depends on r-plotly: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-scales: 
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

    pixi global install bioconductor-comapr

to add into an existing workspace instead, run::

    pixi add bioconductor-comapr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-comapr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-comapr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-comapr:<tag>

(see `bioconductor-comapr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-comapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-comapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-comapr
   :alt:   (downloads)
.. |docker_bioconductor-comapr| image:: https://quay.io/repository/biocontainers/bioconductor-comapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-comapr
.. _`bioconductor-comapr/tags`: https://quay.io/repository/biocontainers/bioconductor-comapr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-comapr";
        var versions = ["1.10.0","1.6.1","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-comapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-comapr/README.html