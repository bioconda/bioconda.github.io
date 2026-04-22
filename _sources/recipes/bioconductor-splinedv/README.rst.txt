:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splinedv'
.. highlight: bash

bioconductor-splinedv
=====================

.. conda:recipe:: bioconductor-splinedv
   :replaces_section_title:
   :noindex:

   Differential Variability \(DV\) analysis for single\-cell RNA sequencing data. \(e.g. Identify Differentially Variable Genes across two experimental conditions\)

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SplineDV.html
   :license: GPL-2
   :recipe: /`bioconductor-splinedv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinedv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinedv/meta.yaml>`_

   A spline based scRNA\-seq method for identifying differentially variable \(DV\) genes across two experimental conditions. Spline\-DV constructs a 3D spline from 3 key gene statistics\: mean expression\, coefficient of variance\, and dropout rate. This is done for both conditions. The 3D spline provides the “expected” behavior of genes in each condition. The distance of the observed mean\, CV and dropout rate of each gene from the expected 3D spline is used to measure variability. As the final step\, the spline\-DV method compares the variabilities of each condition to identify differentially variable \(DV\) genes.


.. conda:package:: bioconductor-splinedv

   |downloads_bioconductor-splinedv| |docker_bioconductor-splinedv|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-sparsematrixstats: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-matrix: ``>=1.6.4``
   :depends on r-plotly: 

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

    pixi global install bioconductor-splinedv

to add into an existing workspace instead, run::

    pixi add bioconductor-splinedv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-splinedv

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-splinedv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-splinedv:<tag>

(see `bioconductor-splinedv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-splinedv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splinedv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splinedv
   :alt:   (downloads)
.. |docker_bioconductor-splinedv| image:: https://quay.io/repository/biocontainers/bioconductor-splinedv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splinedv
.. _`bioconductor-splinedv/tags`: https://quay.io/repository/biocontainers/bioconductor-splinedv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splinedv";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splinedv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splinedv/README.html