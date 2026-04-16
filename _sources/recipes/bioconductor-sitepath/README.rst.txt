:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sitepath'
.. highlight: bash

bioconductor-sitepath
=====================

.. conda:recipe:: bioconductor-sitepath
   :replaces_section_title:
   :noindex:

   Phylogeny\-based sequence clustering with site polymorphism

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sitePath.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sitepath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitepath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitepath/meta.yaml>`_

   Using site polymorphism is one of the ways to cluster DNA\/protein sequences but it is possible for the sequences with the same polymorphism on a single site to be genetically distant. This package is aimed at clustering sequences using site polymorphism and their corresponding phylogenetic trees. By considering their location on the tree\, only the structurally adjacent sequences will be clustered. However\, the adjacent sequences may not necessarily have the same polymorphism. So a branch\-and\-bound like algorithm is used to minimize the entropy representing the purity of site polymorphism of each cluster.


.. conda:package:: bioconductor-sitepath

   |downloads_bioconductor-sitepath| |docker_bioconductor-sitepath|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.2-1</code>,  <code>1.10.2-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-ggtree: ``>=4.0.4,<4.1.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-ape: 
   :depends on r-aplot: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-seqinr: 
   :depends on r-tidytree: 

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

    pixi global install bioconductor-sitepath

to add into an existing workspace instead, run::

    pixi add bioconductor-sitepath

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sitepath

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sitepath

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sitepath:<tag>

(see `bioconductor-sitepath/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sitepath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sitepath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sitepath
   :alt:   (downloads)
.. |docker_bioconductor-sitepath| image:: https://quay.io/repository/biocontainers/bioconductor-sitepath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sitepath
.. _`bioconductor-sitepath/tags`: https://quay.io/repository/biocontainers/bioconductor-sitepath?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sitepath";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sitepath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sitepath/README.html