:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longreadsum'
.. highlight: bash

longreadsum
===========

.. conda:recipe:: longreadsum
   :replaces_section_title:
   :noindex:

   Long read sequencing data quality control tool

   :homepage: https://github.com/WGLab/LongReadSum
   :documentation: https://github.com/WGLab/LongReadSum#readme
   
   :license: MIT
   :recipe: /`longreadsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longreadsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longreadsum/meta.yaml>`_

   A fast and flexible QC tool for long read sequencing data.



.. conda:package:: longreadsum

   |downloads_longreadsum| |docker_longreadsum|

   :versions:
      
      

      ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on plotly: 
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

    pixi global install longreadsum

to add into an existing workspace instead, run::

    pixi add longreadsum

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longreadsum

Alternatively, to install into a new environment, run::

    conda create -n envname longreadsum

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longreadsum:<tag>

(see `longreadsum/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longreadsum| image:: https://img.shields.io/conda/dn/bioconda/longreadsum.svg?style=flat
   :target: https://anaconda.org/bioconda/longreadsum
   :alt:   (downloads)
.. |docker_longreadsum| image:: https://quay.io/repository/biocontainers/longreadsum/status
   :target: https://quay.io/repository/biocontainers/longreadsum
.. _`longreadsum/tags`: https://quay.io/repository/biocontainers/longreadsum?tab=tags


.. raw:: html

    <script>
        var package = "longreadsum";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longreadsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longreadsum/README.html