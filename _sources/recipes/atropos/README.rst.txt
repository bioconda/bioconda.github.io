:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atropos'
.. highlight: bash

atropos
=======

.. conda:recipe:: atropos
   :replaces_section_title:
   :noindex:

   Trim adapters from high\-throughput sequencing reads.

   :homepage: https://github.com/jdidion/atropos
   :documentation: https://atropos.readthedocs.io
   
   :license: CC0 and partly MIT
   :recipe: /`atropos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atropos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atropos/meta.yaml>`_

   


.. conda:package:: atropos

   |downloads_atropos| |docker_atropos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.32-4</code>,  <code>1.1.32-3</code>,  <code>1.1.32-2</code>,  <code>1.1.32-1</code>,  <code>1.1.32-0</code>,  <code>1.1.31-3</code>,  <code>1.1.31-2</code>,  <code>1.1.31-1</code>,  <code>1.1.31-0</code>,  </span></summary>
      

      ``1.1.32-4``,  ``1.1.32-3``,  ``1.1.32-2``,  ``1.1.32-1``,  ``1.1.32-0``,  ``1.1.31-3``,  ``1.1.31-2``,  ``1.1.31-1``,  ``1.1.31-0``,  ``1.1.29-1``,  ``1.1.29-0``,  ``1.1.28-1``,  ``1.1.28-0``,  ``1.1.27-0``,  ``1.1.26-0``,  ``1.1.25-0``,  ``1.1.24-0``,  ``1.1.23-0``,  ``1.1.22-1``,  ``1.1.22-0``,  ``1.1.21-0``,  ``1.1.19-0``,  ``1.1.18-1``,  ``1.1.18-0``,  ``1.1.16-0``,  ``1.1.10-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.0.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends on jinja2: 
   :depends on libgcc: ``>=13``
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
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

    pixi global install atropos

to add into an existing workspace instead, run::

    pixi add atropos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atropos

Alternatively, to install into a new environment, run::

    conda create -n envname atropos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atropos:<tag>

(see `atropos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atropos| image:: https://img.shields.io/conda/dn/bioconda/atropos.svg?style=flat
   :target: https://anaconda.org/bioconda/atropos
   :alt:   (downloads)
.. |docker_atropos| image:: https://quay.io/repository/biocontainers/atropos/status
   :target: https://quay.io/repository/biocontainers/atropos
.. _`atropos/tags`: https://quay.io/repository/biocontainers/atropos?tab=tags


.. raw:: html

    <script>
        var package = "atropos";
        var versions = ["1.1.32","1.1.32","1.1.32","1.1.32","1.1.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atropos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atropos/README.html