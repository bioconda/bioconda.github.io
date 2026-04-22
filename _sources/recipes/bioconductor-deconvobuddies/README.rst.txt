:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deconvobuddies'
.. highlight: bash

bioconductor-deconvobuddies
===========================

.. conda:recipe:: bioconductor-deconvobuddies
   :replaces_section_title:
   :noindex:

   Helper Functions for LIBD Deconvolution

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/DeconvoBuddies.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-deconvobuddies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconvobuddies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconvobuddies/meta.yaml>`_

   Funtions helpful for LIBD deconvolution project. Includes tools for marker finding with mean ratio\, expression plotting\, and plotting deconvolution results. Working to include DLPFC datasets.


.. conda:package:: bioconductor-deconvobuddies

   |downloads_bioconductor-deconvobuddies| |docker_bioconductor-deconvobuddies|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatiallibd: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-purrr: 
   :depends on r-rafalib: 
   :depends on r-reshape2: 
   :depends on r-stringr: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-deconvobuddies

to add into an existing workspace instead, run::

    pixi add bioconductor-deconvobuddies

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-deconvobuddies

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-deconvobuddies

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-deconvobuddies:<tag>

(see `bioconductor-deconvobuddies/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-deconvobuddies| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deconvobuddies.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deconvobuddies
   :alt:   (downloads)
.. |docker_bioconductor-deconvobuddies| image:: https://quay.io/repository/biocontainers/bioconductor-deconvobuddies/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deconvobuddies
.. _`bioconductor-deconvobuddies/tags`: https://quay.io/repository/biocontainers/bioconductor-deconvobuddies?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deconvobuddies";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deconvobuddies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deconvobuddies/README.html