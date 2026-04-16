:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graph'
.. highlight: bash

bioconductor-graph
==================

.. conda:recipe:: bioconductor-graph
   :replaces_section_title:
   :noindex:

   graph\: A package to handle graph data structures

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/graph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graph/meta.yaml>`_
   :links: biotools: :biotools:`graph`, doi: :doi:`10.1038/nmeth.3252`

   A package that implements some simple graph handling capabilities.


.. conda:package:: bioconductor-graph

   |downloads_bioconductor-graph| |docker_bioconductor-graph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.88.1-0</code>,  <code>1.84.0-1</code>,  <code>1.84.0-0</code>,  <code>1.80.0-1</code>,  <code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-2</code>,  </span></summary>
      

      ``1.88.1-0``,  ``1.84.0-1``,  ``1.84.0-0``,  ``1.80.0-1``,  ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-2``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.2-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-1``,  ``1.48.0-1``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-graph

to add into an existing workspace instead, run::

    pixi add bioconductor-graph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-graph

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-graph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-graph:<tag>

(see `bioconductor-graph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-graph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graph
   :alt:   (downloads)
.. |docker_bioconductor-graph| image:: https://quay.io/repository/biocontainers/bioconductor-graph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graph
.. _`bioconductor-graph/tags`: https://quay.io/repository/biocontainers/bioconductor-graph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-graph";
        var versions = ["1.88.1","1.84.0","1.84.0","1.80.0","1.80.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graph/README.html