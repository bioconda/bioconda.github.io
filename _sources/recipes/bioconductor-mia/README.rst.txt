:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mia'
.. highlight: bash

bioconductor-mia
================

.. conda:recipe:: bioconductor-mia
   :replaces_section_title:
   :noindex:

   Microbiome analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mia.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-mia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mia/meta.yaml>`_

   mia implements tools for microbiome analysis based on the SummarizedExperiment\, SingleCellExperiment and TreeSummarizedExperiment infrastructure. Data wrangling and analysis in the context of taxonomic data is the main scope. Additional functions for common task are implemented such as community indices calculation and summarization.


.. conda:package:: bioconductor-mia

   |downloads_bioconductor-mia| |docker_bioconductor-mia|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.2-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bluster: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-bluster: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-decipher: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-decipher: ``>=3.6.0,<3.7.0a0``
   :depends on bioconductor-decontam: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-decontam: ``>=1.30.0,<1.31.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-dirichletmultinomial: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-dirichletmultinomial: ``>=1.52.0,<1.53.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.1,<1.37.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-mass: 
   :depends on r-rbiom: 
   :depends on r-rcpp: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-mia

to add into an existing workspace instead, run::

    pixi add bioconductor-mia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mia

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mia:<tag>

(see `bioconductor-mia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mia
   :alt:   (downloads)
.. |docker_bioconductor-mia| image:: https://quay.io/repository/biocontainers/bioconductor-mia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mia
.. _`bioconductor-mia/tags`: https://quay.io/repository/biocontainers/bioconductor-mia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mia";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mia/README.html