:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegasusio'
.. highlight: bash

pegasusio
=========

.. conda:recipe:: pegasusio
   :replaces_section_title:
   :noindex:

   PegasusIO is the IO package for Pegasus.

   :homepage: https://github.com/lilab-bcb/pegasusio
   :documentation: https://pegasusio.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pegasusio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasusio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasusio/meta.yaml>`_

   


.. conda:package:: pegasusio

   |downloads_pegasusio| |docker_pegasusio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-2</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.1.post1-2``,  ``0.5.1.post1-1``,  ``0.5.1.post1-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0.post1-0``,  ``0.4.0-0``,  ``0.3.1.post2-0``,  ``0.3.1.post1-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12.post1-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-1``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8.post2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: ``>=0.7``
   :depends on docopt: 
   :depends on h5py: ``>=3.0.0``
   :depends on libgcc: ``>=13``
   :depends on loompy: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: ``>=1.2.0``
   :depends on pillow: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 
   :depends on zarr: ``<=2.18.7``

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

    pixi global install pegasusio

to add into an existing workspace instead, run::

    pixi add pegasusio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pegasusio

Alternatively, to install into a new environment, run::

    conda create -n envname pegasusio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pegasusio:<tag>

(see `pegasusio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pegasusio| image:: https://img.shields.io/conda/dn/bioconda/pegasusio.svg?style=flat
   :target: https://anaconda.org/bioconda/pegasusio
   :alt:   (downloads)
.. |docker_pegasusio| image:: https://quay.io/repository/biocontainers/pegasusio/status
   :target: https://quay.io/repository/biocontainers/pegasusio
.. _`pegasusio/tags`: https://quay.io/repository/biocontainers/pegasusio?tab=tags


.. raw:: html

    <script>
        var package = "pegasusio";
        var versions = ["0.10.0","0.9.1","0.9.1","0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegasusio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegasusio/README.html