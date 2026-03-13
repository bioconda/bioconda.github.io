:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epiregulon.extra'
.. highlight: bash

bioconductor-epiregulon.extra
=============================

.. conda:recipe:: bioconductor-epiregulon.extra
   :replaces_section_title:
   :noindex:

   Companion package to epiregulon with additional plotting\, differential and graph functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epiregulon.extra.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epiregulon.extra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon.extra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon.extra/meta.yaml>`_

   Gene regulatory networks model the underlying gene regulation hierarchies that drive gene expression and observed phenotypes. Epiregulon infers TF activity in single cells by constructing a gene regulatory network \(regulons\). This is achieved through integration of scATAC\-seq and scRNA\-seq data and incorporation of public bulk TF ChIP\-seq data. Links between regulatory elements and their target genes are established by computing correlations between chromatin accessibility and gene expressions.


.. conda:package:: bioconductor-epiregulon.extra

   |downloads_bioconductor-epiregulon.extra| |docker_bioconductor-epiregulon.extra|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-circlize: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-patchwork: 
   :depends on r-reshape2: 
   :depends on r-scales: 

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

    pixi global install bioconductor-epiregulon.extra

to add into an existing workspace instead, run::

    pixi add bioconductor-epiregulon.extra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epiregulon.extra

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epiregulon.extra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epiregulon.extra:<tag>

(see `bioconductor-epiregulon.extra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epiregulon.extra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epiregulon.extra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epiregulon.extra
   :alt:   (downloads)
.. |docker_bioconductor-epiregulon.extra| image:: https://quay.io/repository/biocontainers/bioconductor-epiregulon.extra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epiregulon.extra
.. _`bioconductor-epiregulon.extra/tags`: https://quay.io/repository/biocontainers/bioconductor-epiregulon.extra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epiregulon.extra";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epiregulon.extra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epiregulon.extra/README.html