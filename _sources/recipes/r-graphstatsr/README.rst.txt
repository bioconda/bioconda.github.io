:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-graphstatsr'
.. highlight: bash

r-graphstatsr
=============

.. conda:recipe:: r-graphstatsr
   :replaces_section_title:
   :noindex:

   A Shiny app to easily generate advanced graphics and perform some non\-parametric tests\, designed for metabolomics data analysis and developed by MetaBoHUB\-Metatoul.

   :homepage: https://forge.inrae.fr/etienne.rifa/graphstats
   :license: GPL-3.0-or-later
   :recipe: /`r-graphstatsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-graphstatsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-graphstatsr/meta.yaml>`_

   


.. conda:package:: r-graphstatsr

   |downloads_r-graphstatsr| |docker_r-graphstatsr|

   :versions:
      
      

      ``2.6.1-0``

      

   
   :depends on bioconductor-rhdf5: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-base64enc: 
   :depends on r-bit64: 
   :depends on r-car: 
   :depends on r-config: ``>=0.3.1``
   :depends on r-datamods: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-factoextra: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-ggstatsplot: 
   :depends on r-glue: 
   :depends on r-golem: ``>=0.3.1``
   :depends on r-gridextra: 
   :depends on r-htmltools: 
   :depends on r-openxlsx: 
   :depends on r-plotly: 
   :depends on r-pmcmrplus: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-shiny: ``>=1.6.0``
   :depends on r-shinyalert: 
   :depends on r-shinybs: 
   :depends on r-shinydashboard: 
   :depends on r-shinywidgets: 
   :depends on r-sortable: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-waiter: 
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

    pixi global install r-graphstatsr

to add into an existing workspace instead, run::

    pixi add r-graphstatsr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-graphstatsr

Alternatively, to install into a new environment, run::

    conda create -n envname r-graphstatsr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-graphstatsr:<tag>

(see `r-graphstatsr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-graphstatsr| image:: https://img.shields.io/conda/dn/bioconda/r-graphstatsr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-graphstatsr
   :alt:   (downloads)
.. |docker_r-graphstatsr| image:: https://quay.io/repository/biocontainers/r-graphstatsr/status
   :target: https://quay.io/repository/biocontainers/r-graphstatsr
.. _`r-graphstatsr/tags`: https://quay.io/repository/biocontainers/r-graphstatsr?tab=tags


.. raw:: html

    <script>
        var package = "r-graphstatsr";
        var versions = ["2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-graphstatsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-graphstatsr/README.html