:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5'
.. highlight: bash

bioconductor-rhdf5
==================

.. conda:recipe:: bioconductor-rhdf5
   :replaces_section_title:
   :noindex:

   R Interface to HDF5

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rhdf5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5/meta.yaml>`_
   :links: biotools: :biotools:`rhdf5`

   This package provides an interface between HDF5 and R. HDF5\'s main features are the ability to store and access very large and\/or complex datasets and a wide variety of metadata on mass storage \(disk\) through a completely portable file format. The rhdf5 package is thus suited for the exchange of large and\/or complex datasets between R and other software package\, and for letting R applications work on datasets that are larger than the available RAM.


.. conda:package:: bioconductor-rhdf5

   |downloads_bioconductor-rhdf5| |docker_bioconductor-rhdf5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.1-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  <code>2.46.1-1</code>,  <code>2.46.1-0</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.42.0-2</code>,  <code>2.42.0-1</code>,  </span></summary>
      

      ``2.54.1-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.46.1-1``,  ``2.46.1-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.42.0-2``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.38.1-0``,  ``2.38.0-2``,  ``2.38.0-1``,  ``2.36.0-2``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.2-2``,  ``2.26.2-1``,  ``2.26.2-0``,  ``2.26.1-0``,  ``2.26.0-2``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rhdf5filters: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-rhdf5filters: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-rhdf5

to add into an existing workspace instead, run::

    pixi add bioconductor-rhdf5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rhdf5

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rhdf5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rhdf5:<tag>

(see `bioconductor-rhdf5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rhdf5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5
.. _`bioconductor-rhdf5/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhdf5";
        var versions = ["2.54.1","2.50.0","2.50.0","2.46.1","2.46.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html