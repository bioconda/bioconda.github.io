:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tttrlib'
.. highlight: bash

tttrlib
=======

.. conda:recipe:: tttrlib
   :replaces_section_title:
   :noindex:

   A file format agnostic library for time\-resolved imaging and spectroscopic data.

   :homepage: https://github.com/fluorescence-tools/tttrlib
   :documentation: https://tttrlib.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`tttrlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tttrlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tttrlib/meta.yaml>`_

   tttrlib is a simple\, fast\, libray to read\, write and process
   time\-resolved imaging and spectroscopic data. For speed\, it 
   is written in C\+\+ and wrapped for Python via SWIG.



.. conda:package:: tttrlib

   |downloads_tttrlib| |docker_tttrlib|

   :versions:
      
      

      ``0.25.1-1``,  ``0.25.1-0``,  ``0.25.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on click: 
   :depends on click-didyoumean: 
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-image: 
   :depends on tqdm: 

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

    pixi global install tttrlib

to add into an existing workspace instead, run::

    pixi add tttrlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tttrlib

Alternatively, to install into a new environment, run::

    conda create -n envname tttrlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tttrlib:<tag>

(see `tttrlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tttrlib| image:: https://img.shields.io/conda/dn/bioconda/tttrlib.svg?style=flat
   :target: https://anaconda.org/bioconda/tttrlib
   :alt:   (downloads)
.. |docker_tttrlib| image:: https://quay.io/repository/biocontainers/tttrlib/status
   :target: https://quay.io/repository/biocontainers/tttrlib
.. _`tttrlib/tags`: https://quay.io/repository/biocontainers/tttrlib?tab=tags


.. raw:: html

    <script>
        var package = "tttrlib";
        var versions = ["0.25.1","0.25.1","0.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tttrlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tttrlib/README.html