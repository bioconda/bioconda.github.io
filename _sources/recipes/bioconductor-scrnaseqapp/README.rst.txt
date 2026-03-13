:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scrnaseqapp'
.. highlight: bash

bioconductor-scrnaseqapp
========================

.. conda:recipe:: bioconductor-scrnaseqapp
   :replaces_section_title:
   :noindex:

   A single\-cell RNAseq Shiny app\-package

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scRNAseqApp.html
   :license: GPL-3
   :recipe: /`bioconductor-scrnaseqapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseqapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseqapp/meta.yaml>`_

   The scRNAseqApp is a Shiny app package designed for interactive visualization of single\-cell data. It is an enhanced version derived from the ShinyCell\, repackaged to accommodate multiple datasets. The app enables users to visualize data containing various types of information simultaneously\, facilitating comprehensive analysis. Additionally\, it includes a user management system to regulate database accessibility for different users.


.. conda:package:: bioconductor-scrnaseqapp

   |downloads_bioconductor-scrnaseqapp| |docker_bioconductor-scrnaseqapp|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-slingshot: ``>=2.18.0,<2.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bibtex: 
   :depends on r-bslib: 
   :depends on r-circlize: 
   :depends on r-colourpicker: 
   :depends on r-data.table: 
   :depends on r-dbi: 
   :depends on r-dt: 
   :depends on r-fs: 
   :depends on r-ggdendro: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-ggridges: 
   :depends on r-gridextra: 
   :depends on r-htmltools: 
   :depends on r-jsonlite: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-patchwork: 
   :depends on r-plotly: 
   :depends on r-rcolorbrewer: 
   :depends on r-refmanager: 
   :depends on r-reshape2: 
   :depends on r-rsqlite: 
   :depends on r-scales: 
   :depends on r-scrypt: 
   :depends on r-seurat: 
   :depends on r-seuratobject: 
   :depends on r-shiny: 
   :depends on r-shinyhelper: 
   :depends on r-shinymanager: 
   :depends on r-sortable: 
   :depends on r-xfun: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-scrnaseqapp

to add into an existing workspace instead, run::

    pixi add bioconductor-scrnaseqapp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scrnaseqapp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scrnaseqapp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scrnaseqapp:<tag>

(see `bioconductor-scrnaseqapp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scrnaseqapp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scrnaseqapp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scrnaseqapp
   :alt:   (downloads)
.. |docker_bioconductor-scrnaseqapp| image:: https://quay.io/repository/biocontainers/bioconductor-scrnaseqapp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scrnaseqapp
.. _`bioconductor-scrnaseqapp/tags`: https://quay.io/repository/biocontainers/bioconductor-scrnaseqapp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scrnaseqapp";
        var versions = ["1.10.0","1.6.0","1.2.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scrnaseqapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scrnaseqapp/README.html