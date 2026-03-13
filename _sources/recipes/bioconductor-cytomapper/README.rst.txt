:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytomapper'
.. highlight: bash

bioconductor-cytomapper
=======================

.. conda:recipe:: bioconductor-cytomapper
   :replaces_section_title:
   :noindex:

   Visualization of highly multiplexed imaging data in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cytomapper.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cytomapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomapper/meta.yaml>`_

   Highly multiplexed imaging acquires the single\-cell expression of selected proteins in a spatially\-resolved fashion. These measurements can be visualised across multiple length\-scales. First\, pixel\-level intensities represent the spatial distributions of feature expression with highest resolution. Second\, after segmentation\, expression values or cell\-level metadata \(e.g. cell\-type information\) can be visualised on segmented cell areas. This package contains functions for the visualisation of multiplexed read\-outs and cell\-level information obtained by multiplexed imaging technologies. The main functions of this package allow 1. the visualisation of pixel\-level information across multiple channels\, 2. the display of cell\-level information \(expression and\/or metadata\) on segmentation masks and 3. gating and visualisation of single cells.


.. conda:package:: bioconductor-cytomapper

   |downloads_bioconductor-cytomapper| |docker_bioconductor-cytomapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggbeeswarm: 
   :depends on r-ggplot2: 
   :depends on r-matrixstats: 
   :depends on r-nnls: 
   :depends on r-raster: 
   :depends on r-rcolorbrewer: 
   :depends on r-shiny: 
   :depends on r-shinydashboard: 
   :depends on r-svglite: 
   :depends on r-svgpanzoom: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-cytomapper

to add into an existing workspace instead, run::

    pixi add bioconductor-cytomapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cytomapper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cytomapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cytomapper:<tag>

(see `bioconductor-cytomapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cytomapper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytomapper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytomapper
   :alt:   (downloads)
.. |docker_bioconductor-cytomapper| image:: https://quay.io/repository/biocontainers/bioconductor-cytomapper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytomapper
.. _`bioconductor-cytomapper/tags`: https://quay.io/repository/biocontainers/bioconductor-cytomapper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytomapper";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytomapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytomapper/README.html