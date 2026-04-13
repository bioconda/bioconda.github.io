:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5client'
.. highlight: bash

bioconductor-rhdf5client
========================

.. conda:recipe:: bioconductor-rhdf5client
   :replaces_section_title:
   :noindex:

   Access HDF5 content from HDF Scalable Data Service

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rhdf5client.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5client/meta.yaml>`_

   This package provides functionality for reading data from HDF Scalable Data Service from within R.  The HSDSArray function bridges from HSDS to the user via the DelayedArray interface.  Bioconductor manages an open HSDS instance graciously provided by John Readey of the HDF Group.


.. conda:package:: bioconductor-rhdf5client

   |downloads_bioconductor-rhdf5client| |docker_bioconductor-rhdf5client|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-httr: 
   :depends on r-rjson: 

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

    pixi global install bioconductor-rhdf5client

to add into an existing workspace instead, run::

    pixi add bioconductor-rhdf5client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rhdf5client

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rhdf5client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rhdf5client:<tag>

(see `bioconductor-rhdf5client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rhdf5client| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5client.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5client
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5client| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5client/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5client
.. _`bioconductor-rhdf5client/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5client?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhdf5client";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5client/README.html