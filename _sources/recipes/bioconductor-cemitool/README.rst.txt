:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cemitool'
.. highlight: bash

bioconductor-cemitool
=====================

.. conda:recipe:: bioconductor-cemitool
   :replaces_section_title:
   :noindex:

   Co\-expression Modules identification Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CEMiTool.html
   :license: GPL-3
   :recipe: /`bioconductor-cemitool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool/meta.yaml>`_

   The CEMiTool package unifies the discovery and the analysis of coexpression gene modules in a fully automatic manner\, while providing a user\-friendly html report with high quality graphs. Our tool evaluates if modules contain genes that are over\-represented by specific pathways or that are altered in a specific sample group. Additionally\, CEMiTool is able to integrate transcriptomic data with interactome information\, identifying the potential hubs on each network.


.. conda:package:: bioconductor-cemitool

   |downloads_bioconductor-cemitool| |docker_bioconductor-cemitool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.3-0``,  ``1.6.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.9.4``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-fastcluster: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-ggpmisc: 
   :depends on r-ggrepel: 
   :depends on r-ggthemes: 
   :depends on r-gridextra: 
   :depends on r-gtable: 
   :depends on r-htmltools: 
   :depends on r-igraph: 
   :depends on r-intergraph: 
   :depends on r-knitr: 
   :depends on r-matrixstats: 
   :depends on r-network: 
   :depends on r-pracma: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 
   :depends on r-sna: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-cemitool

to add into an existing workspace instead, run::

    pixi add bioconductor-cemitool

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cemitool

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cemitool

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cemitool:<tag>

(see `bioconductor-cemitool/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cemitool| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cemitool.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cemitool
   :alt:   (downloads)
.. |docker_bioconductor-cemitool| image:: https://quay.io/repository/biocontainers/bioconductor-cemitool/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cemitool
.. _`bioconductor-cemitool/tags`: https://quay.io/repository/biocontainers/bioconductor-cemitool?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cemitool";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cemitool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cemitool/README.html