:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbnplot'
.. highlight: bash

bioconductor-cbnplot
====================

.. conda:recipe:: bioconductor-cbnplot
   :replaces_section_title:
   :noindex:

   plot bayesian network inferred from gene expression data based on enrichment analysis results

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CBNplot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cbnplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbnplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbnplot/meta.yaml>`_

   This package provides the visualization of bayesian network inferred from gene expression data. The networks are based on enrichment analysis results inferred from packages including clusterProfiler and ReactomePA. The networks between pathways and genes inside the pathways can be inferred and visualized.


.. conda:package:: bioconductor-cbnplot

   |downloads_bioconductor-cbnplot| |docker_bioconductor-cbnplot|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-depmap: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-graphite: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bnlearn: ``>=4.7``
   :depends on r-dplyr: 
   :depends on r-ggdist: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-graphlayouts: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-patchwork: 
   :depends on r-purrr: 
   :depends on r-pvclust: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rmpfr: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-cbnplot

to add into an existing workspace instead, run::

    pixi add bioconductor-cbnplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cbnplot

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cbnplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cbnplot:<tag>

(see `bioconductor-cbnplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cbnplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbnplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbnplot
   :alt:   (downloads)
.. |docker_bioconductor-cbnplot| image:: https://quay.io/repository/biocontainers/bioconductor-cbnplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbnplot
.. _`bioconductor-cbnplot/tags`: https://quay.io/repository/biocontainers/bioconductor-cbnplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbnplot";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbnplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbnplot/README.html