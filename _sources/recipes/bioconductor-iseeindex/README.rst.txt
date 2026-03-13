:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseeindex'
.. highlight: bash

bioconductor-iseeindex
======================

.. conda:recipe:: bioconductor-iseeindex
   :replaces_section_title:
   :noindex:

   iSEE extension for a landing page to a custom collection of data sets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEindex.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseeindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseeindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseeindex/meta.yaml>`_

   This package provides an interface to any collection of data sets within a single iSEE web\-application. The main functionality of this package is to define a custom landing page allowing app maintainers to list a custom collection of data sets that users can selected from and directly load objects into an iSEE web\-application.


.. conda:package:: bioconductor-iseeindex

   |downloads_bioconductor-iseeindex| |docker_bioconductor-iseeindex|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-isee: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dt: 
   :depends on r-paws.storage: 
   :depends on r-rintrojs: 
   :depends on r-shiny: 
   :depends on r-shinydashboard: 
   :depends on r-shinyjs: 
   :depends on r-stringr: 
   :depends on r-urltools: 

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

    pixi global install bioconductor-iseeindex

to add into an existing workspace instead, run::

    pixi add bioconductor-iseeindex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-iseeindex

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-iseeindex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-iseeindex:<tag>

(see `bioconductor-iseeindex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-iseeindex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseeindex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseeindex
   :alt:   (downloads)
.. |docker_bioconductor-iseeindex| image:: https://quay.io/repository/biocontainers/bioconductor-iseeindex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseeindex
.. _`bioconductor-iseeindex/tags`: https://quay.io/repository/biocontainers/bioconductor-iseeindex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseeindex";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseeindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseeindex/README.html