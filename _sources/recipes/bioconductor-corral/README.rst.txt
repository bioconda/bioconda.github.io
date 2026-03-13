:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-corral'
.. highlight: bash

bioconductor-corral
===================

.. conda:recipe:: bioconductor-corral
   :replaces_section_title:
   :noindex:

   Correspondence Analysis for Single Cell Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/corral.html
   :license: GPL-2
   :recipe: /`bioconductor-corral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-corral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-corral/meta.yaml>`_

   Correspondence analysis \(CA\) is a matrix factorization method\, and is similar to principal components analysis \(PCA\). Whereas PCA is designed for application to continuous\, approximately normally distributed data\, CA is appropriate for non\-negative\, count\-based data that are in the same additive scale. The corral package implements CA for dimensionality reduction of a single matrix of single\-cell data\, as well as a multi\-table adaptation of CA that leverages data\-optimized scaling to align data generated from different sequencing platforms by projecting into a shared latent space. corral utilizes sparse matrices and a fast implementation of SVD\, and can be called directly on Bioconductor objects \(e.g.\, SingleCellExperiment\) for easy pipeline integration. The package also includes additional options\, including variations of CA to address overdispersion in count data \(e.g.\, Freeman\-Tukey chi\-squared residual\)\, as well as the option to apply CA\-style processing to continuous data \(e.g.\, proteomic TOF intensities\) with the Hellinger distance adaptation of CA.


.. conda:package:: bioconductor-corral

   |downloads_bioconductor-corral| |docker_bioconductor-corral|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-gridextra: 
   :depends on r-irlba: 
   :depends on r-matrix: 
   :depends on r-pals: 
   :depends on r-reshape2: 
   :depends on r-transport: 

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

    pixi global install bioconductor-corral

to add into an existing workspace instead, run::

    pixi add bioconductor-corral

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-corral

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-corral

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-corral:<tag>

(see `bioconductor-corral/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-corral| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-corral.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-corral
   :alt:   (downloads)
.. |docker_bioconductor-corral| image:: https://quay.io/repository/biocontainers/bioconductor-corral/status
   :target: https://quay.io/repository/biocontainers/bioconductor-corral
.. _`bioconductor-corral/tags`: https://quay.io/repository/biocontainers/bioconductor-corral?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-corral";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-corral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-corral/README.html