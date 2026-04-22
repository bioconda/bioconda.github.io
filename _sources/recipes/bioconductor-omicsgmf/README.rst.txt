:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicsgmf'
.. highlight: bash

bioconductor-omicsgmf
=====================

.. conda:recipe:: bioconductor-omicsgmf
   :replaces_section_title:
   :noindex:

   Dimensionality reduction of \(single\-cell\) omics data in R using omicsGMF

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/omicsGMF.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-omicsgmf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsgmf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsgmf/meta.yaml>`_

   omicsGMF is a Bioconductor package that uses the sgdGMF\-framework of the \\code\{sgdGMF\} package for highly performant and fast matrix factorization that can be used for dimensionality reduction\, visualization and imputation of omics data. It considers data from the general exponential family as input\, and therefore suits the use of both RNA\-seq \(Poisson or Negative Binomial data\) and proteomics data \(Gaussian data\). It does not require prior transformation of counts to the log\-scale\, because it rather optimizes the deviances from the data family specified. Also\, it allows to correct for known sample\-level and feature\-level covariates\, therefore enabling visualization and dimensionality reduction upon batch correction. Last but not least\, it deals with missing values\, and allows to impute these after matrix factorization\, useful for proteomics data. This Bioconductor package allows input of SummarizedExperiment\, SingleCellExperiment\, and QFeature classes.


.. conda:package:: bioconductor-omicsgmf

   |downloads_bioconductor-omicsgmf| |docker_bioconductor-omicsgmf|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-beachmat: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-qfeatures: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-sgdgmf: 

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

    pixi global install bioconductor-omicsgmf

to add into an existing workspace instead, run::

    pixi add bioconductor-omicsgmf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-omicsgmf

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-omicsgmf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-omicsgmf:<tag>

(see `bioconductor-omicsgmf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-omicsgmf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicsgmf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicsgmf
   :alt:   (downloads)
.. |docker_bioconductor-omicsgmf| image:: https://quay.io/repository/biocontainers/bioconductor-omicsgmf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicsgmf
.. _`bioconductor-omicsgmf/tags`: https://quay.io/repository/biocontainers/bioconductor-omicsgmf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicsgmf";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicsgmf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicsgmf/README.html