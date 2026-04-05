:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bgen-cpp'
.. highlight: bash

bgen-cpp
========

.. conda:recipe:: bgen-cpp
   :replaces_section_title:
   :noindex:

   Reference implementation of the BGEN format\, written in C\+\+

   :homepage: https://enkre.net/cgi-bin/code/bgen/
   :license: Boost Software License
   :recipe: /`bgen-cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgen-cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgen-cpp/meta.yaml>`_

   Reference implementation of the BGEN format\, written in C\+\+.
   The library can be used as the basis for BGEN support
   in other software\, or as a reference for developers
   writing their own implementations of the BGEN format.
   Includes applications for working with BGEN files\: bgenix\,
   cat\-bgen\, and edit\-bgen.



.. conda:package:: bgen-cpp

   |downloads_bgen-cpp| |docker_bgen-cpp|

   :versions:
      
      

      ``1.1.7-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install bgen-cpp

to add into an existing workspace instead, run::

    pixi add bgen-cpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bgen-cpp

Alternatively, to install into a new environment, run::

    conda create -n envname bgen-cpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bgen-cpp:<tag>

(see `bgen-cpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bgen-cpp| image:: https://img.shields.io/conda/dn/bioconda/bgen-cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/bgen-cpp
   :alt:   (downloads)
.. |docker_bgen-cpp| image:: https://quay.io/repository/biocontainers/bgen-cpp/status
   :target: https://quay.io/repository/biocontainers/bgen-cpp
.. _`bgen-cpp/tags`: https://quay.io/repository/biocontainers/bgen-cpp?tab=tags


.. raw:: html

    <script>
        var package = "bgen-cpp";
        var versions = ["1.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgen-cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgen-cpp/README.html