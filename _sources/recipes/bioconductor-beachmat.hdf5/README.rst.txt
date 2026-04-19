:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beachmat.hdf5'
.. highlight: bash

bioconductor-beachmat.hdf5
==========================

.. conda:recipe:: bioconductor-beachmat.hdf5
   :replaces_section_title:
   :noindex:

   beachmat bindings for HDF5\-backed matrices

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/beachmat.hdf5.html
   :license: GPL-3
   :recipe: /`bioconductor-beachmat.hdf5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat.hdf5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat.hdf5/meta.yaml>`_

   Extends beachmat to support initialization of tatami matrices from HDF5\-backed arrays. This allows C\+\+ code in downstream packages to directly call the HDF5 C\/C\+\+ library to access array data\, without the need for block processing via DelayedArray. Some utilities are also provided for direct creation of an in\-memory tatami matrix from a HDF5 file.


.. conda:package:: bioconductor-beachmat.hdf5

   |downloads_bioconductor-beachmat.hdf5| |docker_bioconductor-beachmat.hdf5|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-assorthead: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-assorthead: ``>=1.4.0,<1.5.0a0``
   :depends on bioconductor-beachmat: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-beachmat: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: 

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

    pixi global install bioconductor-beachmat.hdf5

to add into an existing workspace instead, run::

    pixi add bioconductor-beachmat.hdf5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-beachmat.hdf5

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-beachmat.hdf5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-beachmat.hdf5:<tag>

(see `bioconductor-beachmat.hdf5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-beachmat.hdf5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beachmat.hdf5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beachmat.hdf5
   :alt:   (downloads)
.. |docker_bioconductor-beachmat.hdf5| image:: https://quay.io/repository/biocontainers/bioconductor-beachmat.hdf5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beachmat.hdf5
.. _`bioconductor-beachmat.hdf5/tags`: https://quay.io/repository/biocontainers/bioconductor-beachmat.hdf5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beachmat.hdf5";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beachmat.hdf5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beachmat.hdf5/README.html