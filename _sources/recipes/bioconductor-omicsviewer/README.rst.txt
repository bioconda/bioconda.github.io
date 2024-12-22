:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicsviewer'
.. highlight: bash

bioconductor-omicsviewer
========================

.. conda:recipe:: bioconductor-omicsviewer
   :replaces_section_title:
   :noindex:

   Interactive and explorative visualization of SummarizedExperssionSet or ExpressionSet using omicsViewer

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/omicsViewer.html
   :license: GPL-2
   :recipe: /`bioconductor-omicsviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsviewer/meta.yaml>`_

   omicsViewer visualizes ExpressionSet \(or SummarizedExperiment\) in an interactive way. The omicsViewer has a separate back\- and front\-end. In the back\-end\, users need to prepare an ExpressionSet that contains all the necessary information for the downstream data interpretation. Some extra requirements on the headers of phenotype data or feature data are imposed so that the provided information can be clearly recognized by the front\-end\, at the same time\, keep a minimum modification on the existing ExpressionSet object. The pure dependency on R\/Bioconductor guarantees maximum flexibility in the statistical analysis in the back\-end. Once the ExpressionSet is prepared\, it can be visualized using the front\-end\, implemented by shiny and plotly. Both features and samples could be selected from \(data\) tables or graphs \(scatter plot\/heatmap\). Different types of analyses\, such as enrichment analysis \(using Bioconductor package fgsea or fisher\'s exact test\) and STRING network analysis\, will be performed on the fly and the results are visualized simultaneously. When a subset of samples and a phenotype variable is selected\, a significance test on means \(t\-test or ranked based test\; when phenotype variable is quantitative\) or test of independence \(chi\-square or fisher’s exact test\; when phenotype data is categorical\) will be performed to test the association between the phenotype of interest with the selected samples. Additionally\, other analyses can be easily added as extra shiny modules. Therefore\, omicsViewer will greatly facilitate data exploration\, many different hypotheses can be explored in a short time without the need for knowledge of R. In addition\, the resulting data could be easily shared using a shiny server. Otherwise\, a standalone version of omicsViewer together with designated omics data could be easily created by integrating it with portable R\, which can be shared with collaborators or submitted as supplementary data together with a manuscript.


.. conda:package:: bioconductor-omicsviewer

   |downloads_bioconductor-omicsviewer| |docker_bioconductor-omicsviewer|

   :versions:
      
      

      ``1.10.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-beeswarm: 
   :depends r-curl: 
   :depends r-drc: 
   :depends r-dt: 
   :depends r-fastmatch: 
   :depends r-flatxml: 
   :depends r-ggplot2: 
   :depends r-ggseqlogo: 
   :depends r-htmlwidgets: 
   :depends r-httr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-networkd3: 
   :depends r-openxlsx: 
   :depends r-plotly: 
   :depends r-psych: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-rsqlite: 
   :depends r-shiny: 
   :depends r-shinybusy: 
   :depends r-shinycssloaders: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-shinywidgets: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-survminer: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-omicsviewer

   and update with::

      mamba update bioconductor-omicsviewer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omicsviewer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicsviewer:<tag>

   (see `bioconductor-omicsviewer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicsviewer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicsviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicsviewer
   :alt:   (downloads)
.. |docker_bioconductor-omicsviewer| image:: https://quay.io/repository/biocontainers/bioconductor-omicsviewer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicsviewer
.. _`bioconductor-omicsviewer/tags`: https://quay.io/repository/biocontainers/bioconductor-omicsviewer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicsviewer";
        var versions = ["1.10.0","1.2.0"];
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