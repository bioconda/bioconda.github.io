:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bulksignalr'
.. highlight: bash

bioconductor-bulksignalr
========================

.. conda:recipe:: bioconductor-bulksignalr
   :replaces_section_title:
   :noindex:

   Infer Ligand\-Receptor Interactions from bulk expression \(transcriptomics\/proteomics\) data\, or spatial transcriptomics

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/BulkSignalR.html
   :license: CeCILL | file LICENSE
   :recipe: /`bioconductor-bulksignalr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bulksignalr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bulksignalr/meta.yaml>`_

   Inference of ligand\-receptor \(LR\) interactions from bulk expression \(transcriptomics\/proteomics\) data\, or spatial transcriptomics. BulkSignalR bases its inferences on the LRdb database included in our other package\, SingleCellSignalR available from Bioconductor. It relies on a statistical model that is specific to bulk data sets. Different visualization and data summary functions are proposed to help navigating prediction results.


.. conda:package:: bioconductor-bulksignalr

   |downloads_bioconductor-bulksignalr| |docker_bioconductor-bulksignalr|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-multtest: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-orthogene: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: ``>=0.4.14``
   :depends on r-cli: 
   :depends on r-curl: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-ggalluvial: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glmnet: 
   :depends on r-gridextra: 
   :depends on r-httr2: 
   :depends on r-igraph: 
   :depends on r-jsonlite: 
   :depends on r-matrixstats: 
   :depends on r-rann: 
   :depends on r-rcurl: 
   :depends on r-rlang: 
   :depends on r-rtsne: 
   :depends on r-scales: 
   :depends on r-stabledist: 

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

    pixi global install bioconductor-bulksignalr

to add into an existing workspace instead, run::

    pixi add bioconductor-bulksignalr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bulksignalr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bulksignalr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bulksignalr:<tag>

(see `bioconductor-bulksignalr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bulksignalr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bulksignalr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bulksignalr
   :alt:   (downloads)
.. |docker_bioconductor-bulksignalr| image:: https://quay.io/repository/biocontainers/bioconductor-bulksignalr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bulksignalr
.. _`bioconductor-bulksignalr/tags`: https://quay.io/repository/biocontainers/bioconductor-bulksignalr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bulksignalr";
        var versions = ["1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bulksignalr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bulksignalr/README.html