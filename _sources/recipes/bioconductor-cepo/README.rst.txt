:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cepo'
.. highlight: bash

bioconductor-cepo
=================

.. conda:recipe:: bioconductor-cepo
   :replaces_section_title:
   :noindex:

   Cepo for the identification of differentially stable genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Cepo.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cepo/meta.yaml>`_

   Defining the identity of a cell is fundamental to understand the heterogeneity of cells to various environmental signals and perturbations. We present Cepo\, a new method to explore cell identities from single\-cell RNA\-sequencing data using differential stability as a new metric to define cell identity genes. Cepo computes cell\-type specific gene statistics pertaining to differential stable gene expression.


.. conda:package:: bioconductor-cepo

   |downloads_bioconductor-cepo| |docker_bioconductor-cepo|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-patchwork: 
   :depends on r-purrr: 
   :depends on r-reshape2: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-cepo

to add into an existing workspace instead, run::

    pixi add bioconductor-cepo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cepo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cepo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cepo:<tag>

(see `bioconductor-cepo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cepo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cepo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cepo
   :alt:   (downloads)
.. |docker_bioconductor-cepo| image:: https://quay.io/repository/biocontainers/bioconductor-cepo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cepo
.. _`bioconductor-cepo/tags`: https://quay.io/repository/biocontainers/bioconductor-cepo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cepo";
        var versions = ["1.16.0","1.12.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cepo/README.html