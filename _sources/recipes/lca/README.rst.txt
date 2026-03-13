:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lca'
.. highlight: bash

lca
===

.. conda:recipe:: lca
   :replaces_section_title:
   :noindex:

   LCA \- Lowest Common Ancestor calculation tool.

   :homepage: https://github.com/hildebra/LCA
   :license: GPL3 / GPL-3.0-only
   :recipe: /`lca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lca/meta.yaml>`_

   


.. conda:package:: lca

   |downloads_lca| |docker_lca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.25-2</code>,  <code>0.25-1</code>,  <code>0.25-0</code>,  <code>0.24-2</code>,  <code>0.24-1</code>,  <code>0.24-0</code>,  <code>0.23-1</code>,  <code>0.23-0</code>,  <code>0.22-0</code>,  </span></summary>
      

      ``0.25-2``,  ``0.25-1``,  ``0.25-0``,  ``0.24-2``,  ``0.24-1``,  ``0.24-0``,  ``0.23-1``,  ``0.23-0``,  ``0.22-0``,  ``0.21-1``,  ``0.21-0``,  ``0.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install lca

to add into an existing workspace instead, run::

    pixi add lca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lca

Alternatively, to install into a new environment, run::

    conda create -n envname lca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lca:<tag>

(see `lca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lca| image:: https://img.shields.io/conda/dn/bioconda/lca.svg?style=flat
   :target: https://anaconda.org/bioconda/lca
   :alt:   (downloads)
.. |docker_lca| image:: https://quay.io/repository/biocontainers/lca/status
   :target: https://quay.io/repository/biocontainers/lca
.. _`lca/tags`: https://quay.io/repository/biocontainers/lca?tab=tags


.. raw:: html

    <script>
        var package = "lca";
        var versions = ["0.25","0.25","0.25","0.24","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lca/README.html