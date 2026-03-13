:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-concordexr'
.. highlight: bash

bioconductor-concordexr
=======================

.. conda:recipe:: bioconductor-concordexr
   :replaces_section_title:
   :noindex:

   Identify Spatial Homogeneous Regions with concordex

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/concordexR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-concordexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr/meta.yaml>`_

   Spatial homogeneous regions \(SHRs\) in tissues are domains that are homogenous with respect to cell type composition. We present a method for identifying SHRs using spatial transcriptomics data\, and demonstrate that it is efficient and effective at finding SHRs for a wide variety of tissue types. concordex relies on analysis of k\-nearest\-neighbor \(kNN\) graphs. The tool is also useful for analysis of non\-spatial transcriptomics data\, and can elucidate the extent of concordance between partitions of cells derived from clustering algorithms\, and transcriptomic similarity as represented in kNN graphs.


.. conda:package:: bioconductor-concordexr

   |downloads_bioconductor-concordexr| |docker_bioconductor-concordexr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-bluster: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-sparsematrixstats: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-matrix: 
   :depends on r-purrr: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-concordexr

to add into an existing workspace instead, run::

    pixi add bioconductor-concordexr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-concordexr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-concordexr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-concordexr:<tag>

(see `bioconductor-concordexr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-concordexr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-concordexr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-concordexr
   :alt:   (downloads)
.. |docker_bioconductor-concordexr| image:: https://quay.io/repository/biocontainers/bioconductor-concordexr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-concordexr
.. _`bioconductor-concordexr/tags`: https://quay.io/repository/biocontainers/bioconductor-concordexr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-concordexr";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-concordexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-concordexr/README.html