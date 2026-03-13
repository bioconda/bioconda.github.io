:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lib-pod5'
.. highlight: bash

lib-pod5
========

.. conda:recipe:: lib-pod5
   :replaces_section_title:
   :noindex:

   Python bindings for the POD5 file format.

   :homepage: https://github.com/nanoporetech/pod5-file-format
   :documentation: https://pod5-file-format.readthedocs.io/en/latest
   
   :license: OTHER / MPL-2.0
   :recipe: /`lib-pod5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lib-pod5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lib-pod5/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/pod5\-file\-format\/badge\/\?version\=latest\)\]\(https\:\/\/pod5\-file\-format.readthedocs.io\)

   \*\*Python bindings for the POD5 file format\*\*

   What does this project contain
   \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

   This project contains the low\-level core library \(extension modules\) for reading and writing POD5 files.
   This project forms the basis of the pure\-python \[pod5 package\]\(https\:\/\/github.com\/nanoporetech\/pod5\-file\-format\) which is probably the project you want.

   Documentation
   \-\-\-\-\-\-\-\-\-\-\-\-\-

   Full documentation is found at https\:\/\/pod5\-file\-format.readthedocs.io



.. conda:package:: lib-pod5

   |downloads_lib-pod5| |docker_lib-pod5|

   :versions:
      
      

      ``0.3.33-0``,  ``0.3.27-0``,  ``0.3.23-0``,  ``0.3.15-0``

      

   
   :depends on flatbuffers: ``>=24.3.25,<24.3.26.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.21.0``
   :depends on pyarrow: ``<21``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install lib-pod5

to add into an existing workspace instead, run::

    pixi add lib-pod5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lib-pod5

Alternatively, to install into a new environment, run::

    conda create -n envname lib-pod5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lib-pod5:<tag>

(see `lib-pod5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lib-pod5| image:: https://img.shields.io/conda/dn/bioconda/lib-pod5.svg?style=flat
   :target: https://anaconda.org/bioconda/lib-pod5
   :alt:   (downloads)
.. |docker_lib-pod5| image:: https://quay.io/repository/biocontainers/lib-pod5/status
   :target: https://quay.io/repository/biocontainers/lib-pod5
.. _`lib-pod5/tags`: https://quay.io/repository/biocontainers/lib-pod5?tab=tags


.. raw:: html

    <script>
        var package = "lib-pod5";
        var versions = ["0.3.33","0.3.27","0.3.23","0.3.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lib-pod5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lib-pod5/README.html