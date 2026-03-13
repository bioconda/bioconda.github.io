:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bulkanalyser'
.. highlight: bash

r-bulkanalyser
==============

.. conda:recipe:: r-bulkanalyser
   :replaces_section_title:
   :noindex:

   Given an expression matrix from a bulk sequencing experiment\, pre\-processes it and creates a shiny app for interactive data analysis and visualisation. The app contains quality checks\, differential expression analysis\, volcano and cross plots\, enrichment analysis and gene regulatory network inference\, and can be customised to contain more panels by the user.

   :homepage: https://github.com/Core-Bioinformatics/bulkAnalyseR
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-bulkanalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bulkanalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bulkanalyser/meta.yaml>`_

   


.. conda:package:: r-bulkanalyser

   |downloads_r-bulkanalyser| |docker_r-bulkanalyser|

   :versions:
      
      

      ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: 
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-edger: 
   :depends on bioconductor-genie3: 
   :depends on bioconductor-preprocesscore: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggforce: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-ggrastr: 
   :depends on r-ggrepel: 
   :depends on r-ggvenndiagram: 
   :depends on r-glue: 
   :depends on r-gprofiler2: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-noisyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-shinyjqui: 
   :depends on r-shinyjs: 
   :depends on r-shinylp: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-upsetr: 
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

    pixi global install r-bulkanalyser

to add into an existing workspace instead, run::

    pixi add r-bulkanalyser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bulkanalyser

Alternatively, to install into a new environment, run::

    conda create -n envname r-bulkanalyser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bulkanalyser:<tag>

(see `r-bulkanalyser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bulkanalyser| image:: https://img.shields.io/conda/dn/bioconda/r-bulkanalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bulkanalyser
   :alt:   (downloads)
.. |docker_r-bulkanalyser| image:: https://quay.io/repository/biocontainers/r-bulkanalyser/status
   :target: https://quay.io/repository/biocontainers/r-bulkanalyser
.. _`r-bulkanalyser/tags`: https://quay.io/repository/biocontainers/r-bulkanalyser?tab=tags


.. raw:: html

    <script>
        var package = "r-bulkanalyser";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bulkanalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bulkanalyser/README.html