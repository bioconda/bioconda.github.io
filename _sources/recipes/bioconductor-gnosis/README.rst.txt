:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gnosis'
.. highlight: bash

bioconductor-gnosis
===================

.. conda:recipe:: bioconductor-gnosis
   :replaces_section_title:
   :noindex:

   Genomics explorer using statistical and survival analysis in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GNOSIS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gnosis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnosis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnosis/meta.yaml>`_

   GNOSIS incorporates a range of R packages enabling users to efficiently explore and visualise clinical and genomic data obtained from cBioPortal. GNOSIS uses an intuitive GUI and multiple tab panels supporting a range of functionalities. These include data upload and initial exploration\, data recoding and subsetting\, multiple visualisations\, survival analysis\, statistical analysis and mutation analysis\, in addition to facilitating reproducible research.


.. conda:package:: bioconductor-gnosis

   |downloads_bioconductor-gnosis| |docker_bioconductor-gnosis|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-cbioportaldata: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-maftools: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-car: 
   :depends on r-comparegroups: 
   :depends on r-dashboardthemes: 
   :depends on r-desctools: 
   :depends on r-dt: 
   :depends on r-fabricatr: 
   :depends on r-fontawesome: 
   :depends on r-magrittr: 
   :depends on r-operator.tools: 
   :depends on r-partykit: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rpart: 
   :depends on r-rstatix: 
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinydashboard: 
   :depends on r-shinydashboardplus: 
   :depends on r-shinyjs: 
   :depends on r-shinylogs: 
   :depends on r-shinymeta: 
   :depends on r-shinywidgets: 
   :depends on r-survival: 
   :depends on r-survminer: 
   :depends on r-tidyverse: 

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

    pixi global install bioconductor-gnosis

to add into an existing workspace instead, run::

    pixi add bioconductor-gnosis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gnosis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gnosis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gnosis:<tag>

(see `bioconductor-gnosis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gnosis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gnosis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gnosis
   :alt:   (downloads)
.. |docker_bioconductor-gnosis| image:: https://quay.io/repository/biocontainers/bioconductor-gnosis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gnosis
.. _`bioconductor-gnosis/tags`: https://quay.io/repository/biocontainers/bioconductor-gnosis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gnosis";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gnosis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gnosis/README.html