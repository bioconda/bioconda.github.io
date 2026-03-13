:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsematrixstats'
.. highlight: bash

bioconductor-sparsematrixstats
==============================

.. conda:recipe:: bioconductor-sparsematrixstats
   :replaces_section_title:
   :noindex:

   Summary Statistics for Rows and Columns of Sparse Matrices

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sparseMatrixStats.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sparsematrixstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsematrixstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsematrixstats/meta.yaml>`_
   :links: biotools: :biotools:`sparseMatrixStats`

   High performance functions for row and column operations on sparse matrices. For example\: col \/ rowMeans2\, col \/ rowMedians\, col \/ rowVars etc. Currently\, the optimizations are limited to data in the column sparse format. This package is inspired by the matrixStats package by Henrik Bengtsson.


.. conda:package:: bioconductor-sparsematrixstats

   |downloads_bioconductor-sparsematrixstats| |docker_bioconductor-sparsematrixstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-matrixstats: ``>=0.60.0``
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

    pixi global install bioconductor-sparsematrixstats

to add into an existing workspace instead, run::

    pixi add bioconductor-sparsematrixstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sparsematrixstats

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sparsematrixstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sparsematrixstats:<tag>

(see `bioconductor-sparsematrixstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sparsematrixstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsematrixstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsematrixstats
   :alt:   (downloads)
.. |docker_bioconductor-sparsematrixstats| image:: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats
.. _`bioconductor-sparsematrixstats/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsematrixstats";
        var versions = ["1.22.0","1.18.0","1.18.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsematrixstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsematrixstats/README.html