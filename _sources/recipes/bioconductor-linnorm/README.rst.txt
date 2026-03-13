:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linnorm'
.. highlight: bash

bioconductor-linnorm
====================

.. conda:recipe:: bioconductor-linnorm
   :replaces_section_title:
   :noindex:

   Linear model and normality based normalization and transformation method \(Linnorm\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Linnorm.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-linnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm/meta.yaml>`_
   :links: biotools: :biotools:`linnorm`

   Linnorm is an algorithm for normalizing and transforming RNA\-seq\, single cell RNA\-seq\, ChIP\-seq count data or any large scale count data. It has been independently reviewed by Tian et al. on Nature Methods \(https\:\/\/doi.org\/10.1038\/s41592\-019\-0425\-8\). Linnorm can work with raw count\, CPM\, RPKM\, FPKM and TPM.


.. conda:package:: bioconductor-linnorm

   |downloads_bioconductor-linnorm| |docker_bioconductor-linnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.1-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.18.0-2</code>,  <code>2.18.0-1</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.30.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.1-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.18.0-2``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-amap: 
   :depends on r-apcluster: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ellipse: 
   :depends on r-fastcluster: 
   :depends on r-fpc: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-gmodels: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-mclust: 
   :depends on r-rcpp: ``>=0.12.2``
   :depends on r-rcpparmadillo: ``>=0.8.100.1.0``
   :depends on r-rtsne: 
   :depends on r-statmod: 
   :depends on r-vegan: 
   :depends on r-zoo: 

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

    pixi global install bioconductor-linnorm

to add into an existing workspace instead, run::

    pixi add bioconductor-linnorm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-linnorm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-linnorm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-linnorm:<tag>

(see `bioconductor-linnorm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-linnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-linnorm
   :alt:   (downloads)
.. |docker_bioconductor-linnorm| image:: https://quay.io/repository/biocontainers/bioconductor-linnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linnorm
.. _`bioconductor-linnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-linnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-linnorm";
        var versions = ["2.34.0","2.30.0","2.26.0","2.26.0","2.24.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linnorm/README.html