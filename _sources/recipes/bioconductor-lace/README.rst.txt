:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lace'
.. highlight: bash

bioconductor-lace
=================

.. conda:recipe:: bioconductor-lace
   :replaces_section_title:
   :noindex:

   Longitudinal Analysis of Cancer Evolution \(LACE\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/LACE.html
   :license: file LICENSE
   :recipe: /`bioconductor-lace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lace/meta.yaml>`_

   LACE is an algorithmic framework that processes single\-cell somatic mutation profiles from cancer samples collected at different time points and in distinct experimental settings\, to produce longitudinal models of cancer evolution. The approach solves a Boolean Matrix Factorization problem with phylogenetic constraints\, by maximizing a weighed likelihood function computed on multiple time points.


.. conda:package:: bioconductor-lace

   |downloads_bioconductor-lace| |docker_bioconductor-lace|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bsplus: 
   :depends on r-callr: 
   :depends on r-configr: 
   :depends on r-curl: 
   :depends on r-data.table: 
   :depends on r-data.tree: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-forcats: 
   :depends on r-foreach: 
   :depends on r-fs: 
   :depends on r-ggplot2: 
   :depends on r-htmltools: 
   :depends on r-htmlwidgets: 
   :depends on r-igraph: 
   :depends on r-jsonlite: 
   :depends on r-logr: 
   :depends on r-matrix: 
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-readr: 
   :depends on r-rfast: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinydashboard: 
   :depends on r-shinyfiles: 
   :depends on r-shinyjs: 
   :depends on r-shinythemes: 
   :depends on r-shinyvalidate: 
   :depends on r-sortable: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-svglite: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-lace

to add into an existing workspace instead, run::

    pixi add bioconductor-lace

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lace

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lace

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lace:<tag>

(see `bioconductor-lace/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lace
   :alt:   (downloads)
.. |docker_bioconductor-lace| image:: https://quay.io/repository/biocontainers/bioconductor-lace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lace
.. _`bioconductor-lace/tags`: https://quay.io/repository/biocontainers/bioconductor-lace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lace";
        var versions = ["2.14.0","2.10.0","2.6.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lace/README.html