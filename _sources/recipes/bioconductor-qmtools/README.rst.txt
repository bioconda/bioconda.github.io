:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qmtools'
.. highlight: bash

bioconductor-qmtools
====================

.. conda:recipe:: bioconductor-qmtools
   :replaces_section_title:
   :noindex:

   Quantitative Metabolomics Data Processing Tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/qmtools.html
   :license: GPL-3
   :recipe: /`bioconductor-qmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qmtools/meta.yaml>`_

   The qmtools \(quantitative metabolomics tools\) package provides basic tools for processing quantitative metabolomics data with the standard SummarizedExperiment class. This includes functions for imputation\, normalization\, feature filtering\, feature clustering\, dimension\-reduction\, and visualization to help users prepare data for statistical analysis. This package also offers a convenient way to compute empirical Bayes statistics for which metabolic features are different between two sets of study samples. Several functions in this package could also be used in other types of omics data.


.. conda:package:: bioconductor-qmtools

   |downloads_bioconductor-qmtools| |docker_bioconductor-qmtools|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-heatmaply: 
   :depends on r-igraph: 
   :depends on r-patchwork: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-vim: 

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

    pixi global install bioconductor-qmtools

to add into an existing workspace instead, run::

    pixi add bioconductor-qmtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qmtools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qmtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qmtools:<tag>

(see `bioconductor-qmtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qmtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qmtools
   :alt:   (downloads)
.. |docker_bioconductor-qmtools| image:: https://quay.io/repository/biocontainers/bioconductor-qmtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qmtools
.. _`bioconductor-qmtools/tags`: https://quay.io/repository/biocontainers/bioconductor-qmtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qmtools";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qmtools/README.html