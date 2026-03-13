:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rad'
.. highlight: bash

rad
===

.. conda:recipe:: rad
   :replaces_section_title:
   :noindex:

   Read\-structure Agnostic Demultiplexer for long\-read single\-cell RNA\-seq.

   :homepage: https://github.com/indianewok/rad
   :documentation: https://github.com/indianewok/rad/blob/v0.6.0/README.md
   
   :license: MIT / MIT
   :recipe: /`rad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad/meta.yaml>`_

   \*\*rad\*\* implements an alignment\-based demultiplexer and
   whitelist\/barcode\-correction suite for Nanopore and PacBio single\-cell
   long\-read experiments. It bundles edlib and csv\-parser in\-tree\,
   and depends only on Boost\, zlib\, and some flavor of openMP.



.. conda:package:: rad

   |downloads_rad| |docker_rad|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install rad

to add into an existing workspace instead, run::

    pixi add rad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rad

Alternatively, to install into a new environment, run::

    conda create -n envname rad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rad:<tag>

(see `rad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rad| image:: https://img.shields.io/conda/dn/bioconda/rad.svg?style=flat
   :target: https://anaconda.org/bioconda/rad
   :alt:   (downloads)
.. |docker_rad| image:: https://quay.io/repository/biocontainers/rad/status
   :target: https://quay.io/repository/biocontainers/rad
.. _`rad/tags`: https://quay.io/repository/biocontainers/rad?tab=tags


.. raw:: html

    <script>
        var package = "rad";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rad/README.html