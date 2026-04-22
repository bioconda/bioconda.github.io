:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blase'
.. highlight: bash

bioconductor-blase
==================

.. conda:recipe:: bioconductor-blase
   :replaces_section_title:
   :noindex:

   Bulk Linking Analysis for Single\-cell Experiments

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/blase.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-blase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blase/meta.yaml>`_

   BLASE is a method for finding where bulk RNA\-seq data lies on a single\-cell pseudotime trajectory. It uses a fast and understandable approach based on Spearman correlation\, with bootstrapping to provide confidence. BLASE can be used to \"date\" bulk RNA\-seq data\, annotate cell types in scRNA\-seq\, and help correct for developmental phenotype differences in bulk RNA\-seq experiments.


.. conda:package:: bioconductor-blase

   |downloads_bioconductor-blase| |docker_bioconductor-blase|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-mgcv: 
   :depends on r-patchwork: 
   :depends on r-rlang: 
   :depends on r-seurat: ``>=4.0.0``
   :depends on r-viridis: 

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

    pixi global install bioconductor-blase

to add into an existing workspace instead, run::

    pixi add bioconductor-blase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-blase

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-blase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-blase:<tag>

(see `bioconductor-blase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-blase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blase
   :alt:   (downloads)
.. |docker_bioconductor-blase| image:: https://quay.io/repository/biocontainers/bioconductor-blase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blase
.. _`bioconductor-blase/tags`: https://quay.io/repository/biocontainers/bioconductor-blase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-blase";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blase/README.html