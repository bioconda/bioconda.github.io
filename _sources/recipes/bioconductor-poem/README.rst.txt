:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-poem'
.. highlight: bash

bioconductor-poem
=================

.. conda:recipe:: bioconductor-poem
   :replaces_section_title:
   :noindex:

   POpulation\-based Evaluation Metrics

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/poem.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-poem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poem/meta.yaml>`_

   This package provides a comprehensive set of external and internal evaluation metrics. It includes metrics for assessing partitions or fuzzy partitions derived from clustering results\, as well as for evaluating subpopulation identification results within embeddings or graph representations. Additionally\, it provides metrics for comparing spatial domain detection results against ground truth labels\, and tools for visualizing spatial errors.


.. conda:package:: bioconductor-poem

   |downloads_bioconductor-poem| |docker_bioconductor-poem|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-bluster: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-aricode: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clevr: 
   :depends on r-clue: 
   :depends on r-cluster: 
   :depends on r-elsa: 
   :depends on r-fclust: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-mclustcomp: 
   :depends on r-pdist: 
   :depends on r-sp: 
   :depends on r-spdep: 

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

    pixi global install bioconductor-poem

to add into an existing workspace instead, run::

    pixi add bioconductor-poem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-poem

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-poem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-poem:<tag>

(see `bioconductor-poem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-poem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-poem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-poem
   :alt:   (downloads)
.. |docker_bioconductor-poem| image:: https://quay.io/repository/biocontainers/bioconductor-poem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-poem
.. _`bioconductor-poem/tags`: https://quay.io/repository/biocontainers/bioconductor-poem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-poem";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-poem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-poem/README.html