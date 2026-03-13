:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosim'
.. highlight: bash

bioconductor-gosim
==================

.. conda:recipe:: bioconductor-gosim
   :replaces_section_title:
   :noindex:

   Computation of functional similarities between GO terms and gene products\; GO enrichment analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GOSim.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosim/meta.yaml>`_

   This package implements several functions useful for computing similarities between GO terms and gene products based on their GO annotation. Moreover it allows for computing a GO enrichment analysis


.. conda:package:: bioconductor-gosim

   |downloads_bioconductor-gosim| |docker_bioconductor-gosim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-annotate: ``>=1.80.0,<1.81.0a0``
   :depends on bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends on bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends on bioconductor-go.db: ``>=3.18.0,<3.19.0a0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0a0``
   :depends on bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-rbgl: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-topgo: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-topgo: ``>=2.54.0,<2.55.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cluster: 
   :depends on r-corpcor: 
   :depends on r-flexmix: 
   :depends on r-matrix: 
   :depends on r-rcpp: 

   :additional platforms:
      

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

    pixi global install bioconductor-gosim

to add into an existing workspace instead, run::

    pixi add bioconductor-gosim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gosim

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gosim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gosim:<tag>

(see `bioconductor-gosim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gosim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosim
   :alt:   (downloads)
.. |docker_bioconductor-gosim| image:: https://quay.io/repository/biocontainers/bioconductor-gosim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosim
.. _`bioconductor-gosim/tags`: https://quay.io/repository/biocontainers/bioconductor-gosim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gosim";
        var versions = ["1.40.0","1.38.0","1.36.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosim/README.html