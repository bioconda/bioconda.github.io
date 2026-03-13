:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmigration'
.. highlight: bash

bioconductor-cellmigration
==========================

.. conda:recipe:: bioconductor-cellmigration
   :replaces_section_title:
   :noindex:

   Track Cells\, Analyze Cell Trajectories and Compute Migration Statistics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellmigRation.html
   :license: GPL-2
   :recipe: /`bioconductor-cellmigration <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmigration>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmigration/meta.yaml>`_

   Import TIFF images of fluorescently labeled cells\, and track cell movements over time. Parallelization is supported for image processing and for fast computation of cell trajectories. In\-depth analysis of cell trajectories is enabled by 15 trajectory analysis functions.


.. conda:package:: bioconductor-cellmigration

   |downloads_bioconductor-cellmigration| |docker_bioconductor-cellmigration|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-factominer: 
   :depends on r-fme: 
   :depends on r-foreach: 
   :depends on r-hmisc: 
   :depends on r-matrixstats: 
   :depends on r-reshape2: 
   :depends on r-sp: 
   :depends on r-spatialtools: 
   :depends on r-tiff: 
   :depends on r-vioplot: 

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

    pixi global install bioconductor-cellmigration

to add into an existing workspace instead, run::

    pixi add bioconductor-cellmigration

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellmigration

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellmigration

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellmigration:<tag>

(see `bioconductor-cellmigration/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellmigration| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmigration.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmigration
   :alt:   (downloads)
.. |docker_bioconductor-cellmigration| image:: https://quay.io/repository/biocontainers/bioconductor-cellmigration/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmigration
.. _`bioconductor-cellmigration/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmigration?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellmigration";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmigration/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmigration/README.html