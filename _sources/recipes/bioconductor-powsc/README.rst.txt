:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-powsc'
.. highlight: bash

bioconductor-powsc
==================

.. conda:recipe:: bioconductor-powsc
   :replaces_section_title:
   :noindex:

   Simulation\, power evaluation\, and sample size recommendation for single cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/POWSC.html
   :license: GPL-2
   :recipe: /`bioconductor-powsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powsc/meta.yaml>`_

   Determining the sample size for adequate power to detect statistical significance is a crucial step at the design stage for high\-throughput experiments. Even though a number of methods and tools are available for sample size calculation for microarray and RNA\-seq in the context of differential expression \(DE\)\, this topic in the field of single\-cell RNA sequencing is understudied. Moreover\, the unique data characteristics present in scRNA\-seq such as sparsity and heterogeneity increase the challenge. We propose POWSC\, a simulation\-based method\, to provide power evaluation and sample size recommendation for single\-cell RNA sequencing DE analysis. POWSC consists of a data simulator that creates realistic expression data\, and a power assessor that provides a comprehensive evaluation and visualization of the power and sample size relationship.


.. conda:package:: bioconductor-powsc

   |downloads_bioconductor-powsc| |docker_bioconductor-powsc|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-mast: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-powsc

to add into an existing workspace instead, run::

    pixi add bioconductor-powsc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-powsc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-powsc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-powsc:<tag>

(see `bioconductor-powsc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-powsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-powsc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-powsc
   :alt:   (downloads)
.. |docker_bioconductor-powsc| image:: https://quay.io/repository/biocontainers/bioconductor-powsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-powsc
.. _`bioconductor-powsc/tags`: https://quay.io/repository/biocontainers/bioconductor-powsc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-powsc";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-powsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-powsc/README.html