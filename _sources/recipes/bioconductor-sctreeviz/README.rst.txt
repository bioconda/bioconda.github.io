:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sctreeviz'
.. highlight: bash

bioconductor-sctreeviz
======================

.. conda:recipe:: bioconductor-sctreeviz
   :replaces_section_title:
   :noindex:

   R\/Bioconductor package to interactively explore and visualize single cell RNA\-seq datasets with hierarhical annotations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scTreeViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sctreeviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctreeviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctreeviz/meta.yaml>`_

   scTreeViz provides classes to support interactive data aggregation and visualization of single cell RNA\-seq datasets with hierarchies for e.g. cell clusters at different resolutions. The \`TreeIndex\` class provides methods to manage hierarchy and split the tree at a given resolution or across resolutions. The \`TreeViz\` class extends \`SummarizedExperiment\` and can performs quick aggregations on the count matrix defined by clusters.


.. conda:package:: bioconductor-sctreeviz

   |downloads_bioconductor-sctreeviz| |docker_bioconductor-sctreeviz|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-epivizr: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-epivizrdata: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-epivizrserver: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clustree: 
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-rtsne: 
   :depends on r-seurat: 
   :depends on r-sys: 

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

    pixi global install bioconductor-sctreeviz

to add into an existing workspace instead, run::

    pixi add bioconductor-sctreeviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sctreeviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sctreeviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sctreeviz:<tag>

(see `bioconductor-sctreeviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sctreeviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sctreeviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sctreeviz
   :alt:   (downloads)
.. |docker_bioconductor-sctreeviz| image:: https://quay.io/repository/biocontainers/bioconductor-sctreeviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sctreeviz
.. _`bioconductor-sctreeviz/tags`: https://quay.io/repository/biocontainers/bioconductor-sctreeviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sctreeviz";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sctreeviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sctreeviz/README.html