:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-msqrob'
.. highlight: bash

r-msqrob
========

.. conda:recipe:: r-msqrob
   :replaces_section_title:
   :noindex:

   Robust statistical inference for quantitative LC\-MS proteomics.

   :homepage: https://github.com/statOmics/MSqRob
   :license: GPL (>= 2)
   :recipe: /`r-msqrob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-msqrob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-msqrob/meta.yaml>`_

   


.. conda:package:: r-msqrob

   |downloads_r-msqrob| |docker_r-msqrob|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-4</code>,  <code>0.7.7-3</code>,  <code>0.7.7-2</code>,  <code>0.7.7-1</code>,  <code>0.7.7-0</code>,  <code>0.7.6-3</code>,  <code>0.7.6-2</code>,  <code>0.7.6-1</code>,  <code>0.7.6-0</code>,  </span></summary>
      

      ``0.7.7-4``,  ``0.7.7-3``,  ``0.7.7-2``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.6-3``,  ``0.7.6-2``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-1``,  ``0.7.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affyio: 
   :depends on bioconductor-biobase: 
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-biocinstaller: 
   :depends on bioconductor-biocparallel: 
   :depends on bioconductor-limma: 
   :depends on bioconductor-msnbase: 
   :depends on bioconductor-mzid: 
   :depends on bioconductor-mzr: 
   :depends on bioconductor-protgenerics: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-colorspace: 
   :depends on r-dichromat: 
   :depends on r-dt: 
   :depends on r-fdrtool: 
   :depends on r-ggplot2: 
   :depends on r-gtable: 
   :depends on r-htmlwidgets: 
   :depends on r-httpuv: 
   :depends on r-labeling: 
   :depends on r-lazyeval: 
   :depends on r-lme4: 
   :depends on r-magrittr: 
   :depends on r-maldiquant: 
   :depends on r-miniui: 
   :depends on r-minqa: 
   :depends on r-munsell: 
   :depends on r-nloptr: 
   :depends on r-numderiv: 
   :depends on r-openxlsx: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-shinyjs: 
   :depends on r-shinythemes: 
   :depends on r-snow: 
   :depends on r-statmod: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-svdialogs: 
   :depends on r-tibble: 
   :depends on r-xml: 
   :depends on r-xtable: 
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

    pixi global install r-msqrob

to add into an existing workspace instead, run::

    pixi add r-msqrob

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-msqrob

Alternatively, to install into a new environment, run::

    conda create -n envname r-msqrob

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-msqrob:<tag>

(see `r-msqrob/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-msqrob| image:: https://img.shields.io/conda/dn/bioconda/r-msqrob.svg?style=flat
   :target: https://anaconda.org/bioconda/r-msqrob
   :alt:   (downloads)
.. |docker_r-msqrob| image:: https://quay.io/repository/biocontainers/r-msqrob/status
   :target: https://quay.io/repository/biocontainers/r-msqrob
.. _`r-msqrob/tags`: https://quay.io/repository/biocontainers/r-msqrob?tab=tags


.. raw:: html

    <script>
        var package = "r-msqrob";
        var versions = ["0.7.7","0.7.7","0.7.7","0.7.7","0.7.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-msqrob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-msqrob/README.html