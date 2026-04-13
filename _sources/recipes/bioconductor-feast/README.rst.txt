:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-feast'
.. highlight: bash

bioconductor-feast
==================

.. conda:recipe:: bioconductor-feast
   :replaces_section_title:
   :noindex:

   FEAture SelcTion \(FEAST\) for Single\-cell clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FEAST.html
   :license: GPL-2
   :recipe: /`bioconductor-feast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-feast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-feast/meta.yaml>`_

   Cell clustering is one of the most important and commonly performed tasks in single\-cell RNA sequencing \(scRNA\-seq\) data analysis. An important step in cell clustering is to select a subset of genes \(referred to as “features”\)\, whose expression patterns will then be used for downstream clustering. A good set of features should include the ones that distinguish different cell types\, and the quality of such set could have significant impact on the clustering accuracy. FEAST is an R library for selecting most representative features before performing the core of scRNA\-seq clustering. It can be used as a plug\-in for the etablished clustering algorithms such as SC3\, TSCAN\, SHARP\, SIMLR\, and Seurat. The core of FEAST algorithm includes three steps\: 1. consensus clustering\; 2. gene\-level significance inference\; 3. validation of an optimized feature set.


.. conda:package:: bioconductor-feast

   |downloads_bioconductor-feast| |docker_bioconductor-feast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-sc3: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-sc3: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-tscan: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-tscan: ``>=1.48.0,<1.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-irlba: 
   :depends on r-matrixstats: 
   :depends on r-mclust: 

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

    pixi global install bioconductor-feast

to add into an existing workspace instead, run::

    pixi add bioconductor-feast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-feast

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-feast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-feast:<tag>

(see `bioconductor-feast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-feast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-feast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-feast
   :alt:   (downloads)
.. |docker_bioconductor-feast| image:: https://quay.io/repository/biocontainers/bioconductor-feast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-feast
.. _`bioconductor-feast/tags`: https://quay.io/repository/biocontainers/bioconductor-feast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-feast";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-feast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-feast/README.html