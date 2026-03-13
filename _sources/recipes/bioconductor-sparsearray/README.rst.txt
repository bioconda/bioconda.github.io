:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsearray'
.. highlight: bash

bioconductor-sparsearray
========================

.. conda:recipe:: bioconductor-sparsearray
   :replaces_section_title:
   :noindex:

   High\-performance sparse data representation and manipulation in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SparseArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sparsearray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsearray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsearray/meta.yaml>`_

   The SparseArray package provides array\-like containers for efficient in\-memory representation of multidimensional sparse data in R \(arrays and matrices\). The package defines the SparseArray virtual class and two concrete subclasses\: COO\_SparseArray and SVT\_SparseArray. Each subclass uses its own internal representation of the nonzero multidimensional data\: the \"COO layout\" and the \"SVT layout\"\, respectively. SVT\_SparseArray objects mimic as much as possible the behavior of ordinary matrix and array objects in base R. In particular\, they suppport most of the \"standard matrix and array API\" defined in base R and in the matrixStats package from CRAN.


.. conda:package:: bioconductor-sparsearray

   |downloads_bioconductor-sparsearray| |docker_bioconductor-sparsearray|

   :versions:
      
      

      ``1.10.8-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.0.10-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-s4arrays: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-s4arrays: ``>=1.10.1,<1.11.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-sparsearray

to add into an existing workspace instead, run::

    pixi add bioconductor-sparsearray

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sparsearray

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sparsearray

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sparsearray:<tag>

(see `bioconductor-sparsearray/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sparsearray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsearray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsearray
   :alt:   (downloads)
.. |docker_bioconductor-sparsearray| image:: https://quay.io/repository/biocontainers/bioconductor-sparsearray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsearray
.. _`bioconductor-sparsearray/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsearray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsearray";
        var versions = ["1.10.8","1.6.0","1.6.0","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsearray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsearray/README.html