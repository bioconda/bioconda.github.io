:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varfish-server-worker'
.. highlight: bash

varfish-server-worker
=====================

.. conda:recipe:: varfish-server-worker
   :replaces_section_title:
   :noindex:

   Rust\-based tool for the heavy lifting in varfish\-server.


   :homepage: https://github.com/varfish-org/varfish-server-worker
   :license: MIT
   :recipe: /`varfish-server-worker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-server-worker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-server-worker/meta.yaml>`_

   


.. conda:package:: varfish-server-worker

   |downloads_varfish-server-worker| |docker_varfish-server-worker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.17.3-0</code>,  <code>0.17.2-0</code>,  <code>0.13.0-1</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.2-1</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  </span></summary>
      

      ``0.17.3-0``,  ``0.17.2-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.2-1``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libprotobuf: ``>=5.27.5,<5.27.6.0a0``
   :depends on libsqlite: ``>=3.51.1,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.6.0,<4.0a0``
   :depends on sqlite: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install varfish-server-worker

to add into an existing workspace instead, run::

    pixi add varfish-server-worker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install varfish-server-worker

Alternatively, to install into a new environment, run::

    conda create -n envname varfish-server-worker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/varfish-server-worker:<tag>

(see `varfish-server-worker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_varfish-server-worker| image:: https://img.shields.io/conda/dn/bioconda/varfish-server-worker.svg?style=flat
   :target: https://anaconda.org/bioconda/varfish-server-worker
   :alt:   (downloads)
.. |docker_varfish-server-worker| image:: https://quay.io/repository/biocontainers/varfish-server-worker/status
   :target: https://quay.io/repository/biocontainers/varfish-server-worker
.. _`varfish-server-worker/tags`: https://quay.io/repository/biocontainers/varfish-server-worker?tab=tags


.. raw:: html

    <script>
        var package = "varfish-server-worker";
        var versions = ["0.17.3","0.17.2","0.13.0","0.13.0","0.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varfish-server-worker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varfish-server-worker/README.html