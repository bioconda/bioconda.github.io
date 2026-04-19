:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellnoptr'
.. highlight: bash

bioconductor-cellnoptr
======================

.. conda:recipe:: bioconductor-cellnoptr
   :replaces_section_title:
   :noindex:

   Training of boolean logic models of signalling networks using prior knowledge networks and perturbation data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CellNOptR.html
   :license: GPL-3
   :recipe: /`bioconductor-cellnoptr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr/meta.yaml>`_
   :links: biotools: :biotools:`cellnoptr`, doi: :doi:`10.1186/1752-0509-6-133`

   This package does optimisation of boolean logic networks of signalling pathways based on a previous knowledge network and a set of data upon perturbation of the nodes in the network.


.. conda:package:: bioconductor-cellnoptr

   |downloads_bioconductor-cellnoptr| |docker_bioconductor-cellnoptr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.23.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0a0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0a0``
   :depends on graphviz: ``>=14.1.2,<15.0a0``
   :depends on graphviz: ``>=2.2``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-rcurl: 
   :depends on r-rmarkdown: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-xml: 

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

    pixi global install bioconductor-cellnoptr

to add into an existing workspace instead, run::

    pixi add bioconductor-cellnoptr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellnoptr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellnoptr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellnoptr:<tag>

(see `bioconductor-cellnoptr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellnoptr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellnoptr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellnoptr
   :alt:   (downloads)
.. |docker_bioconductor-cellnoptr| image:: https://quay.io/repository/biocontainers/bioconductor-cellnoptr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellnoptr
.. _`bioconductor-cellnoptr/tags`: https://quay.io/repository/biocontainers/bioconductor-cellnoptr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellnoptr";
        var versions = ["1.56.0","1.52.0","1.52.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellnoptr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellnoptr/README.html