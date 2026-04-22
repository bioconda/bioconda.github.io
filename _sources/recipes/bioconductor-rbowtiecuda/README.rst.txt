:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbowtiecuda'
.. highlight: bash

bioconductor-rbowtiecuda
========================

.. conda:recipe:: bioconductor-rbowtiecuda
   :replaces_section_title:
   :noindex:

   An R Wrapper for nvBowtie and nvBWT\, a rewritten version of Bowtie2 for cuda

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/RbowtieCuda.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-rbowtiecuda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtiecuda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtiecuda/meta.yaml>`_

   This package provides an R wrapper for the popular Bowtie2 sequencing read aligner\, optimized to run on NVIDIA graphics cards. It includes wrapper functions that enable both genome indexing and alignment to the generated indexes\, ensuring high performance and ease of use within the R environment.


.. conda:package:: bioconductor-rbowtiecuda

   |downloads_bioconductor-rbowtiecuda| |docker_bioconductor-rbowtiecuda|

   :versions:
      
      

      

      

   

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

    pixi global install bioconductor-rbowtiecuda

to add into an existing workspace instead, run::

    pixi add bioconductor-rbowtiecuda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rbowtiecuda

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rbowtiecuda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rbowtiecuda:<tag>

(see `bioconductor-rbowtiecuda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rbowtiecuda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtiecuda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbowtiecuda
   :alt:   (downloads)
.. |docker_bioconductor-rbowtiecuda| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtiecuda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtiecuda
.. _`bioconductor-rbowtiecuda/tags`: https://quay.io/repository/biocontainers/bioconductor-rbowtiecuda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbowtiecuda";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtiecuda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtiecuda/README.html