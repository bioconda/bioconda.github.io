:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staden_io_lib'
.. highlight: bash

staden_io_lib
=============

.. conda:recipe:: staden_io_lib
   :replaces_section_title:
   :noindex:

   Staden io\_lib is a library of file reading and writing code e.g. for SAM\/BAM\/CRAM.

   :homepage: https://github.com/jkbonfield/io_lib
   :documentation: https://github.com/jkbonfield/io_lib/blob/io_lib-1-15-1/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`staden_io_lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staden_io_lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staden_io_lib/meta.yaml>`_
   :links: biotools: :biotools:`staden_io_lib`

   


.. conda:package:: staden_io_lib

   |downloads_staden_io_lib| |docker_staden_io_lib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.1-0</code>,  <code>1.15.0-4</code>,  <code>1.15.0-3</code>,  <code>1.15.0-2</code>,  <code>1.15.0-1</code>,  <code>1.15.0-0</code>,  <code>1.14.14-9</code>,  <code>1.14.14-8</code>,  <code>1.14.14-7</code>,  </span></summary>
      

      ``1.15.1-0``,  ``1.15.0-4``,  ``1.15.0-3``,  ``1.15.0-2``,  ``1.15.0-1``,  ``1.15.0-0``,  ``1.14.14-9``,  ``1.14.14-8``,  ``1.14.14-7``,  ``1.14.14-6``,  ``1.14.14-5``,  ``1.14.14-4``,  ``1.14.14-3``,  ``1.14.14-2``,  ``1.14.14-1``,  ``1.14.14-0``,  ``1.14.13-1``,  ``1.14.13-0``,  ``1.14.12-1``,  ``1.14.12-0``,  ``1.14.11-1``,  ``1.14.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.26.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
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

    pixi global install staden_io_lib

to add into an existing workspace instead, run::

    pixi add staden_io_lib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install staden_io_lib

Alternatively, to install into a new environment, run::

    conda create -n envname staden_io_lib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/staden_io_lib:<tag>

(see `staden_io_lib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_staden_io_lib| image:: https://img.shields.io/conda/dn/bioconda/staden_io_lib.svg?style=flat
   :target: https://anaconda.org/bioconda/staden_io_lib
   :alt:   (downloads)
.. |docker_staden_io_lib| image:: https://quay.io/repository/biocontainers/staden_io_lib/status
   :target: https://quay.io/repository/biocontainers/staden_io_lib
.. _`staden_io_lib/tags`: https://quay.io/repository/biocontainers/staden_io_lib?tab=tags


.. raw:: html

    <script>
        var package = "staden_io_lib";
        var versions = ["1.15.1","1.15.0","1.15.0","1.15.0","1.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staden_io_lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staden_io_lib/README.html