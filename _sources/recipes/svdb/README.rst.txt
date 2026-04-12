:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svdb'
.. highlight: bash

svdb
====

.. conda:recipe:: svdb
   :replaces_section_title:
   :noindex:

   Structural variant database software.

   :homepage: https://github.com/J35P312/SVDB
   :documentation: https://github.com/J35P312/SVDB/blob/2.8.4/README.md
   
   :license: MIT / MIT
   :recipe: /`svdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb/meta.yaml>`_

   


.. conda:package:: svdb

   |downloads_svdb| |docker_svdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.4-0</code>,  <code>2.8.3-0</code>,  <code>2.8.2-5</code>,  <code>2.8.2-4</code>,  <code>2.8.2-3</code>,  <code>2.8.2-2</code>,  <code>2.8.2-1</code>,  <code>2.8.2-0</code>,  <code>2.8.1-1</code>,  </span></summary>
      

      ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-5``,  ``2.8.2-4``,  ``2.8.2-3``,  ``2.8.2-2``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.4-1``,  ``2.6.4-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.1.2-0``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on numpy: ``>=1.21,<3``
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

    pixi global install svdb

to add into an existing workspace instead, run::

    pixi add svdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svdb

Alternatively, to install into a new environment, run::

    conda create -n envname svdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svdb:<tag>

(see `svdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svdb| image:: https://img.shields.io/conda/dn/bioconda/svdb.svg?style=flat
   :target: https://anaconda.org/bioconda/svdb
   :alt:   (downloads)
.. |docker_svdb| image:: https://quay.io/repository/biocontainers/svdb/status
   :target: https://quay.io/repository/biocontainers/svdb
.. _`svdb/tags`: https://quay.io/repository/biocontainers/svdb?tab=tags


.. raw:: html

    <script>
        var package = "svdb";
        var versions = ["2.8.4","2.8.3","2.8.2","2.8.2","2.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svdb/README.html