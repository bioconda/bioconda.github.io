:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spacemarkers'
.. highlight: bash

bioconductor-spacemarkers
=========================

.. conda:recipe:: bioconductor-spacemarkers
   :replaces_section_title:
   :noindex:

   Spatial Interaction Markers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpaceMarkers.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spacemarkers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spacemarkers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spacemarkers/meta.yaml>`_

   Spatial transcriptomic technologies have helped to resolve the connection between gene expression and the 2D orientation of tissues relative to each other. However\, the limited single\-cell resolution makes it difficult to highlight the most important molecular interactions in these tissues. SpaceMarkers\, R\/Bioconductor software\, can help to find molecular interactions\, by identifying genes associated with latent space interactions in spatial transcriptomics.


.. conda:package:: bioconductor-spacemarkers

   |downloads_bioconductor-spacemarkers| |docker_bioconductor-spacemarkers|

   :versions:
      
      

      ``2.0.0-0``,  ``1.2.1-0``

      

   
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-effsize: 
   :depends on r-ggplot2: 
   :depends on r-hdf5r: 
   :depends on r-jsonlite: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-matrixtests: 
   :depends on r-mixtools: 
   :depends on r-nanoparquet: 
   :depends on r-rcolorbrewer: 
   :depends on r-readbitmap: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rstatix: 
   :depends on r-spatstat.explore: 
   :depends on r-spatstat.geom: 
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

    pixi global install bioconductor-spacemarkers

to add into an existing workspace instead, run::

    pixi add bioconductor-spacemarkers

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spacemarkers

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spacemarkers

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spacemarkers:<tag>

(see `bioconductor-spacemarkers/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spacemarkers| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spacemarkers.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spacemarkers
   :alt:   (downloads)
.. |docker_bioconductor-spacemarkers| image:: https://quay.io/repository/biocontainers/bioconductor-spacemarkers/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spacemarkers
.. _`bioconductor-spacemarkers/tags`: https://quay.io/repository/biocontainers/bioconductor-spacemarkers?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spacemarkers";
        var versions = ["2.0.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spacemarkers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spacemarkers/README.html