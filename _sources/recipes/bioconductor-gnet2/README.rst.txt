:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gnet2'
.. highlight: bash

bioconductor-gnet2
==================

.. conda:recipe:: bioconductor-gnet2
   :replaces_section_title:
   :noindex:

   Constructing gene regulatory networks from expression data through functional module inference

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GNET2.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-gnet2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnet2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnet2/meta.yaml>`_
   :links: biotools: :biotools:`gnet2`

   Cluster genes to functional groups with E\-M process. Iteratively perform TF assigning and Gene assigning\, until the assignment of genes did not change\, or max number of iterations is reached.


.. conda:package:: bioconductor-gnet2

   |downloads_bioconductor-gnet2| |docker_bioconductor-gnet2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-diagrammer: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-xgboost: 

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

    pixi global install bioconductor-gnet2

to add into an existing workspace instead, run::

    pixi add bioconductor-gnet2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gnet2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gnet2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gnet2:<tag>

(see `bioconductor-gnet2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gnet2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gnet2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gnet2
   :alt:   (downloads)
.. |docker_bioconductor-gnet2| image:: https://quay.io/repository/biocontainers/bioconductor-gnet2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gnet2
.. _`bioconductor-gnet2/tags`: https://quay.io/repository/biocontainers/bioconductor-gnet2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gnet2";
        var versions = ["1.26.0","1.18.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gnet2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gnet2/README.html