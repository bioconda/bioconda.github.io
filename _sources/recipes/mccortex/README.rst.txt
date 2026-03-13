:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mccortex'
.. highlight: bash

mccortex
========

.. conda:recipe:: mccortex
   :replaces_section_title:
   :noindex:

   De novo genome assembly and multisample variant calling.

   :homepage: https://github.com/mcveanlab/mccortex
   :documentation: https://github.com/mcveanlab/mccortex/wiki
   
   :license: MIT / MIT
   :recipe: /`mccortex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mccortex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mccortex/meta.yaml>`_
   :links: biotools: :biotools:`mccortex`

   


.. conda:package:: mccortex

   |downloads_mccortex| |docker_mccortex|

   :versions:
      
      

      ``1.0-7``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=14``
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

    pixi global install mccortex

to add into an existing workspace instead, run::

    pixi add mccortex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mccortex

Alternatively, to install into a new environment, run::

    conda create -n envname mccortex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mccortex:<tag>

(see `mccortex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mccortex| image:: https://img.shields.io/conda/dn/bioconda/mccortex.svg?style=flat
   :target: https://anaconda.org/bioconda/mccortex
   :alt:   (downloads)
.. |docker_mccortex| image:: https://quay.io/repository/biocontainers/mccortex/status
   :target: https://quay.io/repository/biocontainers/mccortex
.. _`mccortex/tags`: https://quay.io/repository/biocontainers/mccortex?tab=tags


.. raw:: html

    <script>
        var package = "mccortex";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mccortex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mccortex/README.html