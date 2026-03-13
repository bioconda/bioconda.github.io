:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hyper'
.. highlight: bash

bioconductor-hyper
==================

.. conda:recipe:: bioconductor-hyper
   :replaces_section_title:
   :noindex:

   An R Package For Geneset Enrichment Workflows

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hypeR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-hyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyper/meta.yaml>`_

   An R Package for Geneset Enrichment Workflows.


.. conda:package:: bioconductor-hyper

   |downloads_bioconductor-hyper| |docker_bioconductor-hyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.2-0</code>,  <code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``2.8.2-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.00.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-htmltools: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-kableextra: 
   :depends on r-magrittr: 
   :depends on r-msigdbr: 
   :depends on r-openxlsx: 
   :depends on r-purrr: 
   :depends on r-r6: 
   :depends on r-reactable: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-visnetwork: 

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

    pixi global install bioconductor-hyper

to add into an existing workspace instead, run::

    pixi add bioconductor-hyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hyper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hyper:<tag>

(see `bioconductor-hyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hyper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hyper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hyper
   :alt:   (downloads)
.. |docker_bioconductor-hyper| image:: https://quay.io/repository/biocontainers/bioconductor-hyper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hyper
.. _`bioconductor-hyper/tags`: https://quay.io/repository/biocontainers/bioconductor-hyper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hyper";
        var versions = ["2.8.2","2.4.0","2.0.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hyper/README.html