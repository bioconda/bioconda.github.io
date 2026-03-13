:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellsignalr'
.. highlight: bash

bioconductor-singlecellsignalr
==============================

.. conda:recipe:: bioconductor-singlecellsignalr
   :replaces_section_title:
   :noindex:

   Cell Signalling Using Single Cell RNAseq Data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SingleCellSignalR.html
   :license: GPL-3
   :recipe: /`bioconductor-singlecellsignalr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr/meta.yaml>`_

   Allows single cell RNA seq data analysis\, clustering\, creates internal network and infers cell\-cell interactions.


.. conda:package:: bioconductor-singlecellsignalr

   |downloads_bioconductor-singlecellsignalr| |docker_bioconductor-singlecellsignalr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-biocmanager: 
   :depends on r-circlize: 
   :depends on r-data.table: 
   :depends on r-foreach: 
   :depends on r-gplots: 
   :depends on r-igraph: 
   :depends on r-pheatmap: 
   :depends on r-rtsne: 
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

    pixi global install bioconductor-singlecellsignalr

to add into an existing workspace instead, run::

    pixi add bioconductor-singlecellsignalr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-singlecellsignalr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-singlecellsignalr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-singlecellsignalr:<tag>

(see `bioconductor-singlecellsignalr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-singlecellsignalr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellsignalr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellsignalr
   :alt:   (downloads)
.. |docker_bioconductor-singlecellsignalr| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr
.. _`bioconductor-singlecellsignalr/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlecellsignalr";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html