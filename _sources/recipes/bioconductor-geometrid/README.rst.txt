:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geometrid'
.. highlight: bash

bioconductor-geometrid
======================

.. conda:recipe:: bioconductor-geometrid
   :replaces_section_title:
   :noindex:

   A R\/Bioconductor package for interactive 3D plot of epigenetic data or single cell data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/geomeTriD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-geometrid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geometrid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geometrid/meta.yaml>`_

   The geomeTriD \(Three\-Dimensional Geometry\) Package provides interactive 3D visualization of chromatin structures using the WebGL\-based \'three.js\' \(https\:\/\/threejs.org\/\) or the rgl rendering library. It is designed to identify and explore spatial chromatin patterns within genomic regions. The package generates dynamic 3D plots and HTML widgets that integrate seamlessly with Shiny applications\, enabling researchers to visualize chromatin organization\, detect spatial features\, and compare structural dynamics across different conditions and data types.


.. conda:package:: bioconductor-geometrid

   |downloads_bioconductor-geometrid| |docker_bioconductor-geometrid|

   :versions:
      
      

      ``1.4.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-trackviewer: ``>=1.46.0,<1.47.0``
   :depends on r-aricode: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clue: 
   :depends on r-cluster: 
   :depends on r-dbscan: 
   :depends on r-future.apply: 
   :depends on r-htmlwidgets: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-plotrix: 
   :depends on r-progressr: 
   :depends on r-rann: 
   :depends on r-rgl: 
   :depends on r-rjson: 
   :depends on r-scales: 

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

    pixi global install bioconductor-geometrid

to add into an existing workspace instead, run::

    pixi add bioconductor-geometrid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-geometrid

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-geometrid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-geometrid:<tag>

(see `bioconductor-geometrid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-geometrid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geometrid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geometrid
   :alt:   (downloads)
.. |docker_bioconductor-geometrid| image:: https://quay.io/repository/biocontainers/bioconductor-geometrid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geometrid
.. _`bioconductor-geometrid/tags`: https://quay.io/repository/biocontainers/bioconductor-geometrid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geometrid";
        var versions = ["1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geometrid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geometrid/README.html