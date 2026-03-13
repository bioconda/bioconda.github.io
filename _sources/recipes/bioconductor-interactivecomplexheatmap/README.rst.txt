:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivecomplexheatmap'
.. highlight: bash

bioconductor-interactivecomplexheatmap
======================================

.. conda:recipe:: bioconductor-interactivecomplexheatmap
   :replaces_section_title:
   :noindex:

   Make Interactive Complex Heatmaps

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/InteractiveComplexHeatmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-interactivecomplexheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivecomplexheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivecomplexheatmap/meta.yaml>`_

   This package can easily make heatmaps which are produced by the ComplexHeatmap package into interactive applications. It provides two types of interactivities\: 1. on the interactive graphics device\, and 2. on a Shiny app. It also provides functions for integrating the interactive heatmap widgets for more complex Shiny app development.


.. conda:package:: bioconductor-interactivecomplexheatmap

   |downloads_bioconductor-interactivecomplexheatmap| |docker_bioconductor-interactivecomplexheatmap|

   :versions:
      
      

      ``1.18.1-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clisymbols: 
   :depends on r-digest: 
   :depends on r-fontawesome: 
   :depends on r-getoptlong: 
   :depends on r-htmltools: 
   :depends on r-jsonlite: 
   :depends on r-kableextra: ``>=1.3.1``
   :depends on r-rcolorbrewer: 
   :depends on r-shiny: 
   :depends on r-svglite: 

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

    pixi global install bioconductor-interactivecomplexheatmap

to add into an existing workspace instead, run::

    pixi add bioconductor-interactivecomplexheatmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-interactivecomplexheatmap

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-interactivecomplexheatmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-interactivecomplexheatmap:<tag>

(see `bioconductor-interactivecomplexheatmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-interactivecomplexheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivecomplexheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interactivecomplexheatmap
   :alt:   (downloads)
.. |docker_bioconductor-interactivecomplexheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-interactivecomplexheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivecomplexheatmap
.. _`bioconductor-interactivecomplexheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-interactivecomplexheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interactivecomplexheatmap";
        var versions = ["1.18.1","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivecomplexheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivecomplexheatmap/README.html