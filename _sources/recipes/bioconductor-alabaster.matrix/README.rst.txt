:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.matrix'
.. highlight: bash

bioconductor-alabaster.matrix
=============================

.. conda:recipe:: bioconductor-alabaster.matrix
   :replaces_section_title:
   :noindex:

   Load and Save Artifacts from File

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.matrix.html
   :license: MIT
   :recipe: /`bioconductor-alabaster.matrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.matrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.matrix/meta.yaml>`_

   Save matrices\, arrays and similar objects into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.matrix

   |downloads_bioconductor-alabaster.matrix| |docker_bioconductor-alabaster.matrix|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-alabaster.base: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.base: ``>=1.10.0,<1.11.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends on bioconductor-s4arrays: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-s4arrays: ``>=1.10.1,<1.11.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-sparsearray: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-sparsearray: ``>=1.10.8,<1.11.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-rcpp: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-alabaster.matrix

to add into an existing workspace instead, run::

    pixi add bioconductor-alabaster.matrix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alabaster.matrix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alabaster.matrix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alabaster.matrix:<tag>

(see `bioconductor-alabaster.matrix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alabaster.matrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.matrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.matrix
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.matrix| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.matrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.matrix
.. _`bioconductor-alabaster.matrix/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.matrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.matrix";
        var versions = ["1.10.0","1.6.1","1.6.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.matrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.matrix/README.html