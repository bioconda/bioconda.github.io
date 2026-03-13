:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicsviewer'
.. highlight: bash

bioconductor-omicsviewer
========================

.. conda:recipe:: bioconductor-omicsviewer
   :replaces_section_title:
   :noindex:

   Interactive and explorative visualization of SummarizedExperssionSet or ExpressionSet using omicsViewer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/omicsViewer.html
   :license: GPL-2
   :recipe: /`bioconductor-omicsviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsviewer/meta.yaml>`_

   omicsViewer visualizes ExpressionSet \(or SummarizedExperiment\) in an interactive way. The omicsViewer has a separate back\- and front\-end. In the back\-end\, users need to prepare an ExpressionSet that contains all the necessary information for the downstream data interpretation. Some extra requirements on the headers of phenotype data or feature data are imposed so that the provided information can be clearly recognized by the front\-end\, at the same time\, keep a minimum modification on the existing ExpressionSet object. The pure dependency on R\/Bioconductor guarantees maximum flexibility in the statistical analysis in the back\-end. Once the ExpressionSet is prepared\, it can be visualized using the front\-end\, implemented by shiny and plotly. Both features and samples could be selected from \(data\) tables or graphs \(scatter plot\/heatmap\). Different types of analyses\, such as enrichment analysis \(using Bioconductor package fgsea or fisher\'s exact test\) and STRING network analysis\, will be performed on the fly and the results are visualized simultaneously. When a subset of samples and a phenotype variable is selected\, a significance test on means \(t\-test or ranked based test\; when phenotype variable is quantitative\) or test of independence \(chi\-square or fisher’s exact test\; when phenotype data is categorical\) will be performed to test the association between the phenotype of interest with the selected samples. Additionally\, other analyses can be easily added as extra shiny modules. Therefore\, omicsViewer will greatly facilitate data exploration\, many different hypotheses can be explored in a short time without the need for knowledge of R. In addition\, the resulting data could be easily shared using a shiny server. Otherwise\, a standalone version of omicsViewer together with designated omics data could be easily created by integrating it with portable R\, which can be shared with collaborators or submitted as supplementary data together with a manuscript.


.. conda:package:: bioconductor-omicsviewer

   |downloads_bioconductor-omicsviewer| |docker_bioconductor-omicsviewer|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-beeswarm: 
   :depends on r-curl: 
   :depends on r-drc: 
   :depends on r-dt: 
   :depends on r-fastmatch: 
   :depends on r-flatxml: 
   :depends on r-ggplot2: 
   :depends on r-ggseqlogo: 
   :depends on r-htmlwidgets: 
   :depends on r-httr: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-networkd3: 
   :depends on r-openxlsx: 
   :depends on r-plotly: 
   :depends on r-psych: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rocr: 
   :depends on r-rsqlite: 
   :depends on r-shiny: 
   :depends on r-shinybusy: 
   :depends on r-shinycssloaders: 
   :depends on r-shinyjs: 
   :depends on r-shinythemes: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
   :depends on r-survival: 
   :depends on r-survminer: 

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

    pixi global install bioconductor-omicsviewer

to add into an existing workspace instead, run::

    pixi add bioconductor-omicsviewer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-omicsviewer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-omicsviewer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-omicsviewer:<tag>

(see `bioconductor-omicsviewer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-omicsviewer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicsviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicsviewer
   :alt:   (downloads)
.. |docker_bioconductor-omicsviewer| image:: https://quay.io/repository/biocontainers/bioconductor-omicsviewer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicsviewer
.. _`bioconductor-omicsviewer/tags`: https://quay.io/repository/biocontainers/bioconductor-omicsviewer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicsviewer";
        var versions = ["1.14.0","1.10.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicsviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicsviewer/README.html