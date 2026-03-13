:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bte'
.. highlight: bash

bte
===

.. conda:recipe:: bte
   :replaces_section_title:
   :noindex:

   Cython wrapper enabling use of the MAT library in Python.

   :homepage: https://github.com/jmcbroome/BTE
   :documentation: https://jmcbroome.github.io/BTE/build/html/index.html
   
   :license: MIT / MIT
   :recipe: /`bte <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bte>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bte/meta.yaml>`_

   


.. conda:package:: bte

   |downloads_bte| |docker_bte|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.3-2</code>,  <code>0.9.3-1</code>,  <code>0.9.3-0</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  </span></summary>
      

      ``0.9.3-2``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on protobuf: ``<5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on tbb: ``>=2020.2,<2021.0.0a0``
   :depends on tbb-devel: ``<2021.1.1``

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

    pixi global install bte

to add into an existing workspace instead, run::

    pixi add bte

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bte

Alternatively, to install into a new environment, run::

    conda create -n envname bte

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bte:<tag>

(see `bte/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bte| image:: https://img.shields.io/conda/dn/bioconda/bte.svg?style=flat
   :target: https://anaconda.org/bioconda/bte
   :alt:   (downloads)
.. |docker_bte| image:: https://quay.io/repository/biocontainers/bte/status
   :target: https://quay.io/repository/biocontainers/bte
.. _`bte/tags`: https://quay.io/repository/biocontainers/bte?tab=tags


.. raw:: html

    <script>
        var package = "bte";
        var versions = ["0.9.3","0.9.3","0.9.3","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bte/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bte/README.html