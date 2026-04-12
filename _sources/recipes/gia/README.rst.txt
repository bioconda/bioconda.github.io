:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gia'
.. highlight: bash

gia
===

.. conda:recipe:: gia
   :replaces_section_title:
   :noindex:

   Genomic Interval Arithmetic \(gia\)

   :homepage: https://github.com/noamteyssier/gia
   :license: MIT
   :recipe: /`gia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gia/meta.yaml>`_

   


.. conda:package:: gia

   |downloads_gia| |docker_gia|

   :versions:
      
      

      ``0.2.23-0``,  ``0.2-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.8.0,<9.0a0``
   :depends on libdeflate: ``>=1.20,<1.21.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on openssl: ``>=3.3.1,<4.0a0``
   :depends on xz: ``>=5.2.6,<6.0a0``
   :depends on zlib: 

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

    pixi global install gia

to add into an existing workspace instead, run::

    pixi add gia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gia

Alternatively, to install into a new environment, run::

    conda create -n envname gia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gia:<tag>

(see `gia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gia| image:: https://img.shields.io/conda/dn/bioconda/gia.svg?style=flat
   :target: https://anaconda.org/bioconda/gia
   :alt:   (downloads)
.. |docker_gia| image:: https://quay.io/repository/biocontainers/gia/status
   :target: https://quay.io/repository/biocontainers/gia
.. _`gia/tags`: https://quay.io/repository/biocontainers/gia?tab=tags


.. raw:: html

    <script>
        var package = "gia";
        var versions = ["0.2.23","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gia/README.html