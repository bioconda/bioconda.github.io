:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgsea'
.. highlight: bash

bioconductor-fgsea
==================

.. conda:recipe:: bioconductor-fgsea
   :replaces_section_title:
   :noindex:

   Fast Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/fgsea.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-fgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgsea/meta.yaml>`_
   :links: biotools: :biotools:`fgsea`, doi: :doi:`10.1101/060012`

   The package implements an algorithm for fast gene set enrichment analysis. Using the fast algorithm allows to make more permutations and get more fine grained p\-values\, which allows to use accurate stantard approaches to multiple hypothesis correction.


.. conda:package:: bioconductor-fgsea

   |downloads_bioconductor-fgsea| |docker_bioconductor-fgsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.2-0</code>,  <code>1.32.2-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  </span></summary>
      

      ``1.36.2-0``,  ``1.32.2-0``,  ``1.32.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: 
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-fastmatch: 
   :depends on r-ggplot2: ``>=2.2.0``
   :depends on r-matrix: 
   :depends on r-rcpp: 
   :depends on r-scales: 

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

    pixi global install bioconductor-fgsea

to add into an existing workspace instead, run::

    pixi add bioconductor-fgsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fgsea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fgsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fgsea:<tag>

(see `bioconductor-fgsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fgsea
   :alt:   (downloads)
.. |docker_bioconductor-fgsea| image:: https://quay.io/repository/biocontainers/bioconductor-fgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgsea
.. _`bioconductor-fgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-fgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fgsea";
        var versions = ["1.36.2","1.32.2","1.32.0","1.28.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgsea/README.html