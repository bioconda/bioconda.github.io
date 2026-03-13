:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ataqv'
.. highlight: bash

ataqv
=====

.. conda:recipe:: ataqv
   :replaces_section_title:
   :noindex:

   ataqv is a toolkit for measuring and comparing ATAC\-seq results. It was written to help understand how well ATAC\-seq assays have worked\, and to make it easier to spot differences that might be caused by library prep or sequencing.

   :homepage: https://parkerlab.github.io/ataqv/
   :documentation: https://github.com/ParkerLab/ataqv/blob/master/README.rst
   
   :developer docs: https://github.com/ParkerLab/ataqv
   :license: GPL-3.0-only
   :recipe: /`ataqv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ataqv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ataqv/meta.yaml>`_

   


.. conda:package:: ataqv

   |downloads_ataqv| |docker_ataqv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-5</code>,  <code>1.3.1-4</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-4</code>,  <code>1.3.0-3</code>,  <code>1.3.0-2</code>,  <code>1.3.0-1</code>,  </span></summary>
      

      ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on coreutils: 
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zlib: 

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

    pixi global install ataqv

to add into an existing workspace instead, run::

    pixi add ataqv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ataqv

Alternatively, to install into a new environment, run::

    conda create -n envname ataqv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ataqv:<tag>

(see `ataqv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ataqv| image:: https://img.shields.io/conda/dn/bioconda/ataqv.svg?style=flat
   :target: https://anaconda.org/bioconda/ataqv
   :alt:   (downloads)
.. |docker_ataqv| image:: https://quay.io/repository/biocontainers/ataqv/status
   :target: https://quay.io/repository/biocontainers/ataqv
.. _`ataqv/tags`: https://quay.io/repository/biocontainers/ataqv?tab=tags


.. raw:: html

    <script>
        var package = "ataqv";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ataqv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ataqv/README.html