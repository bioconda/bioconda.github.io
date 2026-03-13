:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsshiny'
.. highlight: bash

bioconductor-msstatsshiny
=========================

.. conda:recipe:: bioconductor-msstatsshiny
   :replaces_section_title:
   :noindex:

   MSstats GUI for Statistical Anaylsis of Proteomics Experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MSstatsShiny.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsshiny/meta.yaml>`_

   MSstatsShiny is an R\-Shiny graphical user interface \(GUI\) integrated with the R packages MSstats\, MSstatsTMT\, and MSstatsPTM. It provides a point and click end\-to\-end analysis pipeline applicable to a wide variety of experimental designs. These include data\-dependedent acquisitions \(DDA\) which are label\-free or tandem mass tag \(TMT\)\-based\, as well as DIA\, SRM\, and PRM acquisitions and those targeting post\-translational modifications \(PTMs\). The application automatically saves users selections and builds an R script that recreates their analysis\, supporting reproducible data analysis.


.. conda:package:: bioconductor-msstatsshiny

   |downloads_bioconductor-msstatsshiny| |docker_bioconductor-msstatsshiny|

   :versions:
      
      

      ``1.12.1-0``,  ``1.4.1-0``,  ``1.2.3-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-marray: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-msstats: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-msstatsbionet: ``>=1.2.0,<1.3.0``
   :depends on bioconductor-msstatsconvert: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-msstatsptm: ``>=2.12.0,<2.13.0``
   :depends on bioconductor-msstatsresponse: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-msstatstmt: ``>=2.18.0,<2.19.0``
   :depends on r-arrow: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gplots: 
   :depends on r-hmisc: 
   :depends on r-htmltools: 
   :depends on r-mockery: 
   :depends on r-plotly: 
   :depends on r-readxl: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinybusy: 
   :depends on r-shinydashboard: 
   :depends on r-shinyjs: 
   :depends on r-tidyr: 
   :depends on r-uuid: 

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

    pixi global install bioconductor-msstatsshiny

to add into an existing workspace instead, run::

    pixi add bioconductor-msstatsshiny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msstatsshiny

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msstatsshiny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msstatsshiny:<tag>

(see `bioconductor-msstatsshiny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msstatsshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsshiny
   :alt:   (downloads)
.. |docker_bioconductor-msstatsshiny| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsshiny
.. _`bioconductor-msstatsshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsshiny";
        var versions = ["1.12.1","1.4.1","1.2.3","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsshiny/README.html