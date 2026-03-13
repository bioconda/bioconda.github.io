:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-holofoodr'
.. highlight: bash

bioconductor-holofoodr
======================

.. conda:recipe:: bioconductor-holofoodr
   :replaces_section_title:
   :noindex:

   R interface to EBI HoloFood resource

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HoloFoodR.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-holofoodr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-holofoodr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-holofoodr/meta.yaml>`_

   Utility package to facilitate integration and analysis of EBI HoloFood data in R. This package streamlines access to the resource\, allowing for direct loading of data into formats optimized for downstream analytics.


.. conda:package:: bioconductor-holofoodr

   |downloads_bioconductor-holofoodr| |docker_bioconductor-holofoodr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-httr2: 
   :depends on r-jsonlite: 
   :depends on r-stringi: 

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

    pixi global install bioconductor-holofoodr

to add into an existing workspace instead, run::

    pixi add bioconductor-holofoodr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-holofoodr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-holofoodr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-holofoodr:<tag>

(see `bioconductor-holofoodr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-holofoodr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-holofoodr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-holofoodr
   :alt:   (downloads)
.. |docker_bioconductor-holofoodr| image:: https://quay.io/repository/biocontainers/bioconductor-holofoodr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-holofoodr
.. _`bioconductor-holofoodr/tags`: https://quay.io/repository/biocontainers/bioconductor-holofoodr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-holofoodr";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-holofoodr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-holofoodr/README.html