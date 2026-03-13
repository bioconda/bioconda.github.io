:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strawc'
.. highlight: bash

strawc
======

.. conda:recipe:: strawc
   :replaces_section_title:
   :noindex:

   Straw bound with pybind11.

   :homepage: https://github.com/aidenlab/straw
   :license: MIT / MIT
   :recipe: /`strawc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strawc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strawc/meta.yaml>`_

   


.. conda:package:: strawc

   |downloads_strawc| |docker_strawc|

   :versions:
      
      

      ``0.0.2.1-6``,  ``0.0.2.1-5``,  ``0.0.2.1-4``,  ``0.0.2.1-3``,  ``0.0.2.1-2``,  ``0.0.2.1-1``,  ``0.0.2.1-0``

      

   
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pybind11: ``>=2.4``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install strawc

to add into an existing workspace instead, run::

    pixi add strawc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strawc

Alternatively, to install into a new environment, run::

    conda create -n envname strawc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strawc:<tag>

(see `strawc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strawc| image:: https://img.shields.io/conda/dn/bioconda/strawc.svg?style=flat
   :target: https://anaconda.org/bioconda/strawc
   :alt:   (downloads)
.. |docker_strawc| image:: https://quay.io/repository/biocontainers/strawc/status
   :target: https://quay.io/repository/biocontainers/strawc
.. _`strawc/tags`: https://quay.io/repository/biocontainers/strawc?tab=tags


.. raw:: html

    <script>
        var package = "strawc";
        var versions = ["0.0.2.1","0.0.2.1","0.0.2.1","0.0.2.1","0.0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strawc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strawc/README.html