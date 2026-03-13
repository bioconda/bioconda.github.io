:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scarray.sat'
.. highlight: bash

bioconductor-scarray.sat
========================

.. conda:recipe:: bioconductor-scarray.sat
   :replaces_section_title:
   :noindex:

   Large\-scale single\-cell RNA\-seq data analysis using GDS files and Seurat

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SCArray.sat.html
   :license: GPL-3
   :recipe: /`bioconductor-scarray.sat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray.sat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray.sat/meta.yaml>`_

   Extends the Seurat classes and functions to support Genomic Data Structure \(GDS\) files as a DelayedArray backend for data representation. It relies on the implementation of GDS\-based DelayedMatrix in the SCArray package to represent single cell RNA\-seq data. The common optimized algorithms leveraging GDS\-based and single cell\-specific DelayedMatrix \(SC\_GDSMatrix\) are implemented in the SCArray package. SCArray.sat introduces a new SCArrayAssay class \(derived from the Seurat Assay\)\, which wraps raw counts\, normalized expressions and scaled data matrix based on GDS\-specific DelayedMatrix. It is designed to integrate seamlessly with the Seurat package to provide common data analysis in the SeuratObject\-based workflow. Compared with Seurat\, SCArray.sat significantly reduces the memory usage without downsampling and can be applied to very large datasets.


.. conda:package:: bioconductor-scarray.sat

   |downloads_bioconductor-scarray.sat| |docker_bioconductor-scarray.sat|

   :versions:
      
      

      ``1.9.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scarray: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-seurat: ``>=5.0``
   :depends on r-seuratobject: ``>=5.0``

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

    pixi global install bioconductor-scarray.sat

to add into an existing workspace instead, run::

    pixi add bioconductor-scarray.sat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scarray.sat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scarray.sat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scarray.sat:<tag>

(see `bioconductor-scarray.sat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scarray.sat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scarray.sat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scarray.sat
   :alt:   (downloads)
.. |docker_bioconductor-scarray.sat| image:: https://quay.io/repository/biocontainers/bioconductor-scarray.sat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scarray.sat
.. _`bioconductor-scarray.sat/tags`: https://quay.io/repository/biocontainers/bioconductor-scarray.sat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scarray.sat";
        var versions = ["1.9.0","1.6.0","1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scarray.sat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scarray.sat/README.html