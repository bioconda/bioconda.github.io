:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-shinyngs'
.. highlight: bash

r-shinyngs
==========

.. conda:recipe:: r-shinyngs
   :replaces_section_title:
   :noindex:

   Provides Shiny applications for various array and NGS applications. Currently very RNA\-seq centric\, with plans for expansion.

   :homepage: https://github.com/pinin4fjords/shinyngs
   :license: AGPL / AGPL-3.0
   :recipe: /`r-shinyngs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shinyngs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shinyngs/meta.yaml>`_

   


.. conda:package:: r-shinyngs

   |downloads_r-shinyngs| |docker_r-shinyngs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-0</code>,  <code>2.2.4-1</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.3.0-0``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-2``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.6-1``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-gseabase: 
   :depends on bioconductor-limma: 
   :depends on bioconductor-summarizedexperiment: 
   :depends on pandoc: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-base64enc: 
   :depends on r-biocmanager: 
   :depends on r-cluster: 
   :depends on r-cpp11: 
   :depends on r-data.table: 
   :depends on r-dendextend: ``>=0.18.0``
   :depends on r-dplyr: 
   :depends on r-dt: ``>=0.2``
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-markdown: 
   :depends on r-optparse: 
   :depends on r-pheatmap: 
   :depends on r-plotly: ``>=4.3.4``
   :depends on r-plyr: 
   :depends on r-png: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-rsconnect: 
   :depends on r-scales: ``>=0.2.5``
   :depends on r-scatterplot3d: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinyjs: 
   :depends on r-shinythemes: 
   :depends on r-stringi: ``>=1.7.12``
   :depends on r-yaml: 

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

    pixi global install r-shinyngs

to add into an existing workspace instead, run::

    pixi add r-shinyngs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-shinyngs

Alternatively, to install into a new environment, run::

    conda create -n envname r-shinyngs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-shinyngs:<tag>

(see `r-shinyngs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-shinyngs| image:: https://img.shields.io/conda/dn/bioconda/r-shinyngs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-shinyngs
   :alt:   (downloads)
.. |docker_r-shinyngs| image:: https://quay.io/repository/biocontainers/r-shinyngs/status
   :target: https://quay.io/repository/biocontainers/r-shinyngs
.. _`r-shinyngs/tags`: https://quay.io/repository/biocontainers/r-shinyngs?tab=tags


.. raw:: html

    <script>
        var package = "r-shinyngs";
        var versions = ["2.3.0","2.2.4","2.2.4","2.2.3","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-shinyngs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-shinyngs/README.html