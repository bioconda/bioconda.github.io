:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spasim'
.. highlight: bash

bioconductor-spasim
===================

.. conda:recipe:: bioconductor-spasim
   :replaces_section_title:
   :noindex:

   Spatial point data simulator for tissue images

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spaSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spasim/meta.yaml>`_

   A suite of functions for simulating spatial patterns of cells in tissue images. Output images are multitype point data in SingleCellExperiment format. Each point represents a cell\, with its 2D locations and cell type. Potential cell patterns include background cells\, tumour\/immune cell clusters\, immune rings\, and blood\/lymphatic vessels.


.. conda:package:: bioconductor-spasim

   |downloads_bioconductor-spasim| |docker_bioconductor-spasim|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-rann: 
   :depends on r-spatstat.geom: 
   :depends on r-spatstat.random: 

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

    pixi global install bioconductor-spasim

to add into an existing workspace instead, run::

    pixi add bioconductor-spasim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spasim

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spasim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spasim:<tag>

(see `bioconductor-spasim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spasim
   :alt:   (downloads)
.. |docker_bioconductor-spasim| image:: https://quay.io/repository/biocontainers/bioconductor-spasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spasim
.. _`bioconductor-spasim/tags`: https://quay.io/repository/biocontainers/bioconductor-spasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spasim";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spasim/README.html