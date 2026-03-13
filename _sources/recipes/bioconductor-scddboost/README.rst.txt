:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scddboost'
.. highlight: bash

bioconductor-scddboost
======================

.. conda:recipe:: bioconductor-scddboost
   :replaces_section_title:
   :noindex:

   A compositional model to assess expression changes from single\-cell rna\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDDboost.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-scddboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scddboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scddboost/meta.yaml>`_

   scDDboost is an R package to analyze changes in the distribution of single\-cell expression data between two experimental conditions. Compared to other methods that assess differential expression\, scDDboost benefits uniquely from information conveyed by the clustering of cells into cellular subtypes. Through a novel empirical Bayesian formulation it calculates gene\-specific posterior probabilities that the marginal expression distribution is the same \(or different\) between the two conditions. The implementation in scDDboost treats gene\-level expression data within each condition as a mixture of negative binomial distributions.


.. conda:package:: bioconductor-scddboost

   |downloads_bioconductor-scddboost| |docker_bioconductor-scddboost|

   :versions:
      
      

      ``1.12.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-ebseq: ``>=2.8.0,<2.9.0``
   :depends on bioconductor-ebseq: ``>=2.8.0,<2.9.0a0``
   :depends on bioconductor-oscope: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-oscope: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: 
   :depends on r-cluster: 
   :depends on r-ggplot2: 
   :depends on r-mclust: 
   :depends on r-rcpp: ``>=0.12.11``
   :depends on r-rcppeigen: ``>=0.3.2.9.0``

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

    pixi global install bioconductor-scddboost

to add into an existing workspace instead, run::

    pixi add bioconductor-scddboost

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scddboost

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scddboost

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scddboost:<tag>

(see `bioconductor-scddboost/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scddboost| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scddboost.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scddboost
   :alt:   (downloads)
.. |docker_bioconductor-scddboost| image:: https://quay.io/repository/biocontainers/bioconductor-scddboost/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scddboost
.. _`bioconductor-scddboost/tags`: https://quay.io/repository/biocontainers/bioconductor-scddboost?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scddboost";
        var versions = ["1.12.0","1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scddboost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scddboost/README.html