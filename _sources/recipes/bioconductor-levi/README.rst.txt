:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-levi'
.. highlight: bash

bioconductor-levi
=================

.. conda:recipe:: bioconductor-levi
   :replaces_section_title:
   :noindex:

   Landscape Expression Visualization Interface

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/levi.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-levi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi/meta.yaml>`_

   The tool integrates data from biological networks with transcriptomes\, displaying a heatmap with surface curves to evidence the altered regions.


.. conda:package:: bioconductor-levi

   |downloads_bioconductor-levi| |docker_bioconductor-levi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colorspace: ``>=1.3-2``
   :depends on r-dplyr: ``>=0.7.4``
   :depends on r-dt: ``>=0.4``
   :depends on r-ggplot2: ``>=2.2.1``
   :depends on r-httr: ``>=1.3.1``
   :depends on r-igraph: ``>=1.2.1``
   :depends on r-knitr: 
   :depends on r-rcolorbrewer: ``>=1.1-2``
   :depends on r-rcpp: ``>=0.12.18``
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-rmarkdown: 
   :depends on r-shiny: ``>=1.0.5``
   :depends on r-shinydashboard: ``>=0.7.0``
   :depends on r-shinyjs: ``>=1.0``
   :depends on r-testthat: 
   :depends on r-xml2: ``>=1.2.0``

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

    pixi global install bioconductor-levi

to add into an existing workspace instead, run::

    pixi add bioconductor-levi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-levi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-levi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-levi:<tag>

(see `bioconductor-levi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-levi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-levi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-levi
   :alt:   (downloads)
.. |docker_bioconductor-levi| image:: https://quay.io/repository/biocontainers/bioconductor-levi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-levi
.. _`bioconductor-levi/tags`: https://quay.io/repository/biocontainers/bioconductor-levi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-levi";
        var versions = ["1.28.0","1.24.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-levi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-levi/README.html