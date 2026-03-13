:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shiny.gosling'
.. highlight: bash

bioconductor-shiny.gosling
==========================

.. conda:recipe:: bioconductor-shiny.gosling
   :replaces_section_title:
   :noindex:

   A Grammar\-based Toolkit for Scalable and Interactive Genomics Data Visualization for R and Shiny

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/shiny.gosling.html
   :license: LGPL-3
   :recipe: /`bioconductor-shiny.gosling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shiny.gosling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shiny.gosling/meta.yaml>`_

   A Grammar\-based Toolkit for Scalable and Interactive Genomics Data Visualization. http\:\/\/gosling\-lang.org\/. This R package is based on gosling.js. It uses R functions to create gosling plots that could be embedded onto R Shiny apps.


.. conda:package:: bioconductor-shiny.gosling

   |downloads_bioconductor-shiny.gosling| |docker_bioconductor-shiny.gosling|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-digest: 
   :depends on r-fs: 
   :depends on r-htmltools: 
   :depends on r-jsonlite: 
   :depends on r-rjson: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-shiny.react: 

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

    pixi global install bioconductor-shiny.gosling

to add into an existing workspace instead, run::

    pixi add bioconductor-shiny.gosling

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-shiny.gosling

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-shiny.gosling

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-shiny.gosling:<tag>

(see `bioconductor-shiny.gosling/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-shiny.gosling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shiny.gosling.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shiny.gosling
   :alt:   (downloads)
.. |docker_bioconductor-shiny.gosling| image:: https://quay.io/repository/biocontainers/bioconductor-shiny.gosling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shiny.gosling
.. _`bioconductor-shiny.gosling/tags`: https://quay.io/repository/biocontainers/bioconductor-shiny.gosling?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-shiny.gosling";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shiny.gosling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shiny.gosling/README.html