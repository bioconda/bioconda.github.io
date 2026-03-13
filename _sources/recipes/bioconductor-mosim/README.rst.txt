:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosim'
.. highlight: bash

bioconductor-mosim
==================

.. conda:recipe:: bioconductor-mosim
   :replaces_section_title:
   :noindex:

   Multi\-Omics Simulation \(MOSim\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MOSim.html
   :license: GPL-3
   :recipe: /`bioconductor-mosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosim/meta.yaml>`_

   MOSim package simulates multi\-omic experiments that mimic regulatory mechanisms within the cell\, allowing flexible experimental design including time course and multiple groups.


.. conda:package:: bioconductor-mosim

   |downloads_bioconductor-mosim| |docker_bioconductor-mosim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-scran: ``>=1.34.0,<1.35.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cpp11: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hiddenmarkov: 
   :depends on r-lazyeval: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: 
   :depends on r-rlang: 
   :depends on r-seurat: 
   :depends on r-signac: ``>=1.14.0,<2.0a0``
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-zoo: 

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

    pixi global install bioconductor-mosim

to add into an existing workspace instead, run::

    pixi add bioconductor-mosim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mosim

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mosim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mosim:<tag>

(see `bioconductor-mosim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mosim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosim
   :alt:   (downloads)
.. |docker_bioconductor-mosim| image:: https://quay.io/repository/biocontainers/bioconductor-mosim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosim
.. _`bioconductor-mosim/tags`: https://quay.io/repository/biocontainers/bioconductor-mosim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mosim";
        var versions = ["2.2.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosim/README.html