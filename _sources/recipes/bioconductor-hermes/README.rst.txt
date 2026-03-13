:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hermes'
.. highlight: bash

bioconductor-hermes
===================

.. conda:recipe:: bioconductor-hermes
   :replaces_section_title:
   :noindex:

   Preprocessing\, analyzing\, and reporting of RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hermes.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-hermes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hermes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hermes/meta.yaml>`_

   Provides classes and functions for quality control\, filtering\, normalization and differential expression analysis of pre\-processed \`RNA\-seq\` data. Data can be imported from \`SummarizedExperiment\` as well as \`matrix\` objects and can be annotated from \`BioMart\`. Filtering for genes without too low expression or containing required annotations\, as well as filtering for samples with sufficient correlation to other samples or total number of reads is supported. The standard normalization methods including cpm\, rpkm and tpm can be used\, and \'DESeq2\` as well as voom differential expression analyses are available.


.. conda:package:: bioconductor-hermes

   |downloads_bioconductor-hermes| |docker_bioconductor-hermes|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: ``>=2.1``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-envstats: 
   :depends on r-forcats: ``>=1.0.0``
   :depends on r-ggfortify: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: ``>=0.9``
   :depends on r-magrittr: 
   :depends on r-matrixstats: ``>=1.5.0``
   :depends on r-purrr: 
   :depends on r-r6: 
   :depends on r-rdpack: ``>=2.6.2``
   :depends on r-rlang: 
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

    pixi global install bioconductor-hermes

to add into an existing workspace instead, run::

    pixi add bioconductor-hermes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hermes

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hermes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hermes:<tag>

(see `bioconductor-hermes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hermes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hermes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hermes
   :alt:   (downloads)
.. |docker_bioconductor-hermes| image:: https://quay.io/repository/biocontainers/bioconductor-hermes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hermes
.. _`bioconductor-hermes/tags`: https://quay.io/repository/biocontainers/bioconductor-hermes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hermes";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hermes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hermes/README.html