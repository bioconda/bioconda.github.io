:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celltrails'
.. highlight: bash

bioconductor-celltrails
=======================

.. conda:recipe:: bioconductor-celltrails
   :replaces_section_title:
   :noindex:

   Reconstruction\, visualization and analysis of branching trajectories

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CellTrails.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celltrails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails/meta.yaml>`_

   CellTrails is an unsupervised algorithm for the de novo chronological ordering\, visualization and analysis of single\-cell expression data. CellTrails makes use of a geometrically motivated concept of lower\-dimensional manifold learning\, which exhibits a multitude of virtues that counteract intrinsic noise of single cell data caused by drop\-outs\, technical variance\, and redundancy of predictive variables. CellTrails enables the reconstruction of branching trajectories and provides an intuitive graphical representation of expression patterns along all branches simultaneously. It allows the user to define and infer the expression dynamics of individual and multiple pathways towards distinct phenotypes.


.. conda:package:: bioconductor-celltrails

   |downloads_bioconductor-celltrails| |docker_bioconductor-celltrails|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cba: 
   :depends on r-dendextend: 
   :depends on r-dtw: 
   :depends on r-envstats: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-maptree: 
   :depends on r-mgcv: 
   :depends on r-reshape2: 
   :depends on r-rtsne: 

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

    pixi global install bioconductor-celltrails

to add into an existing workspace instead, run::

    pixi add bioconductor-celltrails

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-celltrails

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-celltrails

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-celltrails:<tag>

(see `bioconductor-celltrails/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-celltrails| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celltrails.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celltrails
   :alt:   (downloads)
.. |docker_bioconductor-celltrails| image:: https://quay.io/repository/biocontainers/bioconductor-celltrails/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celltrails
.. _`bioconductor-celltrails/tags`: https://quay.io/repository/biocontainers/bioconductor-celltrails?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celltrails";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celltrails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celltrails/README.html