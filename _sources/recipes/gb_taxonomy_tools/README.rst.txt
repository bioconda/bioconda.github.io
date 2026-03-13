:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gb_taxonomy_tools'
.. highlight: bash

gb_taxonomy_tools
=================

.. conda:recipe:: gb_taxonomy_tools
   :replaces_section_title:
   :noindex:

   These are four simple utilities which perform certain manipulations and visualization tasks on GenBank taxonomic information.

   :homepage: https://github.com/spond/gb_taxonomy_tools
   :license: GPL-2.0-or-later
   :recipe: /`gb_taxonomy_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gb_taxonomy_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gb_taxonomy_tools/meta.yaml>`_

   


.. conda:package:: gb_taxonomy_tools

   |downloads_gb_taxonomy_tools| |docker_gb_taxonomy_tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install gb_taxonomy_tools

to add into an existing workspace instead, run::

    pixi add gb_taxonomy_tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gb_taxonomy_tools

Alternatively, to install into a new environment, run::

    conda create -n envname gb_taxonomy_tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gb_taxonomy_tools:<tag>

(see `gb_taxonomy_tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gb_taxonomy_tools| image:: https://img.shields.io/conda/dn/bioconda/gb_taxonomy_tools.svg?style=flat
   :target: https://anaconda.org/bioconda/gb_taxonomy_tools
   :alt:   (downloads)
.. |docker_gb_taxonomy_tools| image:: https://quay.io/repository/biocontainers/gb_taxonomy_tools/status
   :target: https://quay.io/repository/biocontainers/gb_taxonomy_tools
.. _`gb_taxonomy_tools/tags`: https://quay.io/repository/biocontainers/gb_taxonomy_tools?tab=tags


.. raw:: html

    <script>
        var package = "gb_taxonomy_tools";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gb_taxonomy_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gb_taxonomy_tools/README.html