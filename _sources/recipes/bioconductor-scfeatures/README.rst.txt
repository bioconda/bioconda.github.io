:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfeatures'
.. highlight: bash

bioconductor-scfeatures
=======================

.. conda:recipe:: bioconductor-scfeatures
   :replaces_section_title:
   :noindex:

   scFeatures\: Multi\-view representations of single\-cell and spatial data for disease outcome prediction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scFeatures.html
   :license: GPL-3
   :recipe: /`bioconductor-scfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeatures/meta.yaml>`_

   scFeatures constructs multi\-view representations of single\-cell and spatial data. scFeatures is a tool that generates multi\-view representations of single\-cell and spatial data through the construction of a total of 17 feature types. These features can then be used for a variety of analyses using other software in Biocondutor.


.. conda:package:: bioconductor-scfeatures

   |downloads_bioconductor-scfeatures| |docker_bioconductor-scfeatures|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-aucell: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-ensdb.hsapiens.v79: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensdb.mmusculus.v79: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends on bioconductor-gsva: ``>=2.0.0,<2.1.0``
   :depends on bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-singlecellsignalr: ``>=1.18.0,<1.19.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-glue: 
   :depends on r-gtools: 
   :depends on r-msigdbr: 
   :depends on r-proxyc: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-seurat: 
   :depends on r-spatstat.explore: 
   :depends on r-spatstat.geom: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-scfeatures

to add into an existing workspace instead, run::

    pixi add bioconductor-scfeatures

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scfeatures

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scfeatures

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scfeatures:<tag>

(see `bioconductor-scfeatures/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scfeatures
   :alt:   (downloads)
.. |docker_bioconductor-scfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-scfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfeatures
.. _`bioconductor-scfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-scfeatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scfeatures";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfeatures/README.html