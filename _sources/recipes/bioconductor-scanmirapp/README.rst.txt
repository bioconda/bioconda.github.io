:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scanmirapp'
.. highlight: bash

bioconductor-scanmirapp
=======================

.. conda:recipe:: bioconductor-scanmirapp
   :replaces_section_title:
   :noindex:

   scanMiR shiny application

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scanMiRApp.html
   :license: GPL-3
   :recipe: /`bioconductor-scanmirapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmirapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmirapp/meta.yaml>`_

   A shiny interface to the scanMiR package. The application enables the scanning of transcripts and custom sequences for miRNA binding sites\, the visualization of KdModels and binding results\, as well as browsing predicted repression data. In addition contains the IndexedFst class for fast indexed reading of large GenomicRanges or data.frames\, and some utilities for facilitating scans and identifying enriched miRNA\-target pairs.


.. conda:package:: bioconductor-scanmirapp

   |downloads_bioconductor-scanmirapp| |docker_bioconductor-scanmirapp|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationfilter: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scanmir: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-scanmirdata: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-dt: 
   :depends on r-fst: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-matrix: 
   :depends on r-plotly: 
   :depends on r-rintrojs: 
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinydashboard: 
   :depends on r-shinyjqui: 
   :depends on r-waiter: 

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

    pixi global install bioconductor-scanmirapp

to add into an existing workspace instead, run::

    pixi add bioconductor-scanmirapp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scanmirapp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scanmirapp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scanmirapp:<tag>

(see `bioconductor-scanmirapp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scanmirapp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scanmirapp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scanmirapp
   :alt:   (downloads)
.. |docker_bioconductor-scanmirapp| image:: https://quay.io/repository/biocontainers/bioconductor-scanmirapp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scanmirapp
.. _`bioconductor-scanmirapp/tags`: https://quay.io/repository/biocontainers/bioconductor-scanmirapp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scanmirapp";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scanmirapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scanmirapp/README.html