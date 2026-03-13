:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionero'
.. highlight: bash

bioconductor-bionero
====================

.. conda:recipe:: bioconductor-bionero
   :replaces_section_title:
   :noindex:

   Biological Network Reconstruction Omnibus

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioNERO.html
   :license: GPL-3
   :recipe: /`bioconductor-bionero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionero/meta.yaml>`_

   BioNERO aims to integrate all aspects of biological network inference in a single package\, including data preprocessing\, exploratory analyses\, network inference\, and analyses for biological interpretations. BioNERO can be used to infer gene coexpression networks \(GCNs\) and gene regulatory networks \(GRNs\) from gene expression data. Additionally\, it can be used to explore topological properties of protein\-protein interaction \(PPI\) networks. GCN inference relies on the popular WGCNA algorithm. GRN inference is based on the \"wisdom of the crowds\" principle\, which consists in inferring GRNs with multiple algorithms \(here\, CLR\, GENIE3 and ARACNE\) and calculating the average rank for each interaction pair. As all steps of network analyses are included in this package\, BioNERO makes users avoid having to learn the syntaxes of several packages and how to communicate between them. Finally\, users can also identify consensus modules across independent expression sets and calculate intra and interspecies module preservation statistics between different networks.


.. conda:package:: bioconductor-bionero

   |downloads_bioconductor-bionero| |docker_bioconductor-bionero|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.5-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genie3: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-minet: ``>=3.68.0,<3.69.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dynamictreecut: 
   :depends on r-ggdendro: 
   :depends on r-ggnetwork: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-intergraph: 
   :depends on r-matrixstats: 
   :depends on r-netrep: 
   :depends on r-patchwork: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-bionero

to add into an existing workspace instead, run::

    pixi add bioconductor-bionero

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bionero

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bionero

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bionero:<tag>

(see `bioconductor-bionero/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bionero| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionero.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bionero
   :alt:   (downloads)
.. |docker_bioconductor-bionero| image:: https://quay.io/repository/biocontainers/bioconductor-bionero/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionero
.. _`bioconductor-bionero/tags`: https://quay.io/repository/biocontainers/bioconductor-bionero?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bionero";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.5","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionero/README.html