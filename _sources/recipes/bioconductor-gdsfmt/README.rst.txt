:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdsfmt'
.. highlight: bash

bioconductor-gdsfmt
===================

.. conda:recipe:: bioconductor-gdsfmt
   :replaces_section_title:
   :noindex:

   R Interface to CoreArray Genomic Data Structure \(GDS\) Files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gdsfmt.html
   :license: LGPL-3
   :recipe: /`bioconductor-gdsfmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsfmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsfmt/meta.yaml>`_

   Provides a high\-level R interface to CoreArray Genomic Data Structure \(GDS\) data files. GDS is portable across platforms with hierarchical structure to store multiple scalable array\-oriented data sets with metadata information. It is suited for large\-scale datasets\, especially for data which are much larger than the available random\-access memory. The gdsfmt package offers the efficient operations specifically designed for integers of less than 8 bits\, since a diploid genotype\, like single\-nucleotide polymorphism \(SNP\)\, usually occupies fewer bits than a byte. Data compression and decompression are available with relatively efficient random access. It is also allowed to read a GDS file in parallel with multiple R processes supported by the package parallel.


.. conda:package:: bioconductor-gdsfmt

   |downloads_bioconductor-gdsfmt| |docker_bioconductor-gdsfmt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.1-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-gdsfmt

to add into an existing workspace instead, run::

    pixi add bioconductor-gdsfmt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gdsfmt

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gdsfmt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gdsfmt:<tag>

(see `bioconductor-gdsfmt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gdsfmt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdsfmt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdsfmt
   :alt:   (downloads)
.. |docker_bioconductor-gdsfmt| image:: https://quay.io/repository/biocontainers/bioconductor-gdsfmt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdsfmt
.. _`bioconductor-gdsfmt/tags`: https://quay.io/repository/biocontainers/bioconductor-gdsfmt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdsfmt";
        var versions = ["1.46.0","1.42.0","1.38.0","1.38.0","1.36.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html