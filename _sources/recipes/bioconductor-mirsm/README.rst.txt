:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsm'
.. highlight: bash

bioconductor-mirsm
==================

.. conda:recipe:: bioconductor-mirsm
   :replaces_section_title:
   :noindex:

   Inferring miRNA sponge modules in heterogeneous data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/miRSM.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm/meta.yaml>`_

   The package aims to identify miRNA sponge or ceRNA modules in heterogeneous data. It provides several functions to study miRNA sponge modules at single\-sample and multi\-sample levels\, including popular methods for inferring gene modules \(candidate miRNA sponge or ceRNA modules\)\, and two functions to identify miRNA sponge modules at single\-sample and multi\-sample levels\, as well as several functions to conduct modular analysis of miRNA sponge modules.


.. conda:package:: bioconductor-mirsm

   |downloads_bioconductor-mirsm| |docker_bioconductor-mirsm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.3-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.3-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bicare: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends on bioconductor-fabia: ``>=2.46.0,<2.47.0``
   :depends on bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-ibbig: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-mirsponger: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends on bioconductor-rqubic: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=15.0.7``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bibitr: 
   :depends on r-biclust: 
   :depends on r-dbscan: 
   :depends on r-dynamictreecut: 
   :depends on r-energy: 
   :depends on r-flashclust: 
   :depends on r-gfa: 
   :depends on r-igraph: 
   :depends on r-isa2: 
   :depends on r-linkcomm: 
   :depends on r-matrixcorrelation: 
   :depends on r-mcl: 
   :depends on r-mclust: 
   :depends on r-nmf: 
   :depends on r-pma: 
   :depends on r-ppclust: 
   :depends on r-rcpp: 
   :depends on r-s4vd: 
   :depends on r-sombrero: 
   :depends on r-subspace: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-mirsm

to add into an existing workspace instead, run::

    pixi add bioconductor-mirsm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mirsm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mirsm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mirsm:<tag>

(see `bioconductor-mirsm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mirsm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsm
   :alt:   (downloads)
.. |docker_bioconductor-mirsm| image:: https://quay.io/repository/biocontainers/bioconductor-mirsm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsm
.. _`bioconductor-mirsm/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirsm";
        var versions = ["1.18.0","1.16.0","1.16.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsm/README.html