:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sincell'
.. highlight: bash

bioconductor-sincell
====================

.. conda:recipe:: bioconductor-sincell
   :replaces_section_title:
   :noindex:

   R package for the statistical assessment of cell state hierarchies from single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sincell.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sincell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sincell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sincell/meta.yaml>`_
   :links: biotools: :biotools:`sincell`

   Cell differentiation processes are achieved through a continuum of hierarchical intermediate cell\-states that might be captured by single\-cell RNA seq. Existing computational approaches for the assessment of cell\-state hierarchies from single\-cell data might be formalized under a general workflow composed of i\) a metric to assess cell\-to\-cell similarities \(combined or not with a dimensionality reduction step\)\, and ii\) a graph\-building algorithm \(optionally making use of a cells\-clustering step\). Sincell R package implements a methodological toolbox allowing flexible workflows under such framework. Furthermore\, Sincell contributes new algorithms to provide cell\-state hierarchies with statistical support while accounting for stochastic factors in single\-cell RNA seq. Graphical representations and functional association tests are provided to interpret hierarchies.


.. conda:package:: bioconductor-sincell

   |downloads_bioconductor-sincell| |docker_bioconductor-sincell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-entropy: 
   :depends on r-fastica: 
   :depends on r-fields: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-proxy: 
   :depends on r-rcpp: ``>=0.11.2``
   :depends on r-reshape2: 
   :depends on r-rtsne: 
   :depends on r-scatterplot3d: 
   :depends on r-statmod: 
   :depends on r-tsp: 

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

    pixi global install bioconductor-sincell

to add into an existing workspace instead, run::

    pixi add bioconductor-sincell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sincell

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sincell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sincell:<tag>

(see `bioconductor-sincell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sincell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sincell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sincell
   :alt:   (downloads)
.. |docker_bioconductor-sincell| image:: https://quay.io/repository/biocontainers/bioconductor-sincell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sincell
.. _`bioconductor-sincell/tags`: https://quay.io/repository/biocontainers/bioconductor-sincell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sincell";
        var versions = ["1.42.0","1.38.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sincell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sincell/README.html