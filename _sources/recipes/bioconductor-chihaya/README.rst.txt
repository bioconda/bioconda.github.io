:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chihaya'
.. highlight: bash

bioconductor-chihaya
====================

.. conda:recipe:: bioconductor-chihaya
   :replaces_section_title:
   :noindex:

   Save Delayed Operations to a HDF5 File

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/chihaya.html
   :license: GPL-3
   :recipe: /`bioconductor-chihaya <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chihaya>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chihaya/meta.yaml>`_

   Saves the delayed operations of a DelayedArray to a HDF5 file. This enables efficient recovery of the DelayedArray\'s contents in other languages and analysis frameworks.


.. conda:package:: bioconductor-chihaya

   |downloads_bioconductor-chihaya| |docker_bioconductor-chihaya|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
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

    pixi global install bioconductor-chihaya

to add into an existing workspace instead, run::

    pixi add bioconductor-chihaya

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-chihaya

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-chihaya

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-chihaya:<tag>

(see `bioconductor-chihaya/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-chihaya| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chihaya.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chihaya
   :alt:   (downloads)
.. |docker_bioconductor-chihaya| image:: https://quay.io/repository/biocontainers/bioconductor-chihaya/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chihaya
.. _`bioconductor-chihaya/tags`: https://quay.io/repository/biocontainers/bioconductor-chihaya?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chihaya";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chihaya/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chihaya/README.html