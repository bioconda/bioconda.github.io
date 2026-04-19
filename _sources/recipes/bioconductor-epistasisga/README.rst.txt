:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epistasisga'
.. highlight: bash

bioconductor-epistasisga
========================

.. conda:recipe:: bioconductor-epistasisga
   :replaces_section_title:
   :noindex:

   An R package to identify multi\-snp effects in nuclear family studies using the GADGETS method

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epistasisGA.html
   :license: GPL-3
   :recipe: /`bioconductor-epistasisga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistasisga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistasisga/meta.yaml>`_

   This package runs the GADGETS method to identify epistatic effects in nuclear family studies. It also provides functions for permutation\-based inference and graphical visualization of the results.


.. conda:package:: bioconductor-epistasisga

   |downloads_bioconductor-epistasisga| |docker_bioconductor-epistasisga|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-batchtools: 
   :depends on r-bh: 
   :depends on r-bigmemory: 
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-matrixstats: 
   :depends on r-qgraph: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-survival: 

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

    pixi global install bioconductor-epistasisga

to add into an existing workspace instead, run::

    pixi add bioconductor-epistasisga

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epistasisga

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epistasisga

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epistasisga:<tag>

(see `bioconductor-epistasisga/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epistasisga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epistasisga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epistasisga
   :alt:   (downloads)
.. |docker_bioconductor-epistasisga| image:: https://quay.io/repository/biocontainers/bioconductor-epistasisga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epistasisga
.. _`bioconductor-epistasisga/tags`: https://quay.io/repository/biocontainers/bioconductor-epistasisga?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epistasisga";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epistasisga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epistasisga/README.html