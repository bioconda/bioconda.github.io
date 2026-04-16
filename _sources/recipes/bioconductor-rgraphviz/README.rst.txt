:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgraphviz'
.. highlight: bash

bioconductor-rgraphviz
======================

.. conda:recipe:: bioconductor-rgraphviz
   :replaces_section_title:
   :noindex:

   Provides plotting capabilities for R graph objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rgraphviz.html
   :license: EPL
   :recipe: /`bioconductor-rgraphviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz/meta.yaml>`_
   :links: biotools: :biotools:`rgraphviz`, usegalaxy-eu: :usegalaxy-eu:`rgraphviz`

   Interfaces R with the AT and T graphviz library for plotting R graph objects from the graph package.


.. conda:package:: bioconductor-rgraphviz

   |downloads_bioconductor-rgraphviz| |docker_bioconductor-rgraphviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.0-1</code>,  <code>2.54.0-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  <code>2.46.0-1</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  </span></summary>
      

      ``2.54.0-1``,  ``2.54.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.38.0-2``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.13.0-1``,  ``2.13.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
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

    pixi global install bioconductor-rgraphviz

to add into an existing workspace instead, run::

    pixi add bioconductor-rgraphviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgraphviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgraphviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgraphviz:<tag>

(see `bioconductor-rgraphviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgraphviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgraphviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgraphviz
   :alt:   (downloads)
.. |docker_bioconductor-rgraphviz| image:: https://quay.io/repository/biocontainers/bioconductor-rgraphviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgraphviz
.. _`bioconductor-rgraphviz/tags`: https://quay.io/repository/biocontainers/bioconductor-rgraphviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgraphviz";
        var versions = ["2.54.0","2.54.0","2.50.0","2.50.0","2.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html