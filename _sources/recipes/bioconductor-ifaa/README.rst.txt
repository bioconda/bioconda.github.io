:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ifaa'
.. highlight: bash

bioconductor-ifaa
=================

.. conda:recipe:: bioconductor-ifaa
   :replaces_section_title:
   :noindex:

   Robust Inference for Absolute Abundance in Microbiome Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IFAA.html
   :license: GPL-2
   :recipe: /`bioconductor-ifaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ifaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ifaa/meta.yaml>`_

   This package offers a robust approach to make inference on the association of covariates with the absolute abundance \(AA\) of microbiome in an ecosystem. It can be also directly applied to relative abundance \(RA\) data to make inference on AA because the ratio of two RA is equal to the ratio of their AA. This algorithm can estimate and test the associations of interest while adjusting for potential confounders. The estimates of this method have easy interpretation like a typical regression analysis. High\-dimensional covariates are handled with regularization and it is implemented by parallel computing. False discovery rate is automatically controlled by this approach. Zeros do not need to be imputed by a positive value for the analysis. The IFAA package also offers the \'MZILN\' function for estimating and testing associations of abundance ratios with covariates.


.. conda:package:: bioconductor-ifaa

   |downloads_bioconductor-ifaa| |docker_bioconductor-ifaa|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-desctools: 
   :depends on r-doparallel: ``>=1.0.11``
   :depends on r-dorng: 
   :depends on r-foreach: ``>=1.4.3``
   :depends on r-glmnet: 
   :depends on r-hdci: ``>=1.0-2``
   :depends on r-mathjaxr: 
   :depends on r-matrix: ``>=1.4-0``
   :depends on r-matrixextra: 
   :depends on r-parallelly: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-ifaa

to add into an existing workspace instead, run::

    pixi add bioconductor-ifaa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ifaa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ifaa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ifaa:<tag>

(see `bioconductor-ifaa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ifaa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ifaa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ifaa
   :alt:   (downloads)
.. |docker_bioconductor-ifaa| image:: https://quay.io/repository/biocontainers/bioconductor-ifaa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ifaa
.. _`bioconductor-ifaa/tags`: https://quay.io/repository/biocontainers/bioconductor-ifaa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ifaa";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ifaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ifaa/README.html