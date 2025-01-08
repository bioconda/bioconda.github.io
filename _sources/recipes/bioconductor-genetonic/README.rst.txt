:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genetonic'
.. highlight: bash

bioconductor-genetonic
======================

.. conda:recipe:: bioconductor-genetonic
   :replaces_section_title:
   :noindex:

   Enjoy Analyzing And Integrating The Results From Differential Expression Analysis And Functional Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeneTonic.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-genetonic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetonic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetonic/meta.yaml>`_

   This package provides functionality to combine the existing pieces of the transcriptome data and results\, making it easier to generate insightful observations and hypothesis. Its usage is made easy with a Shiny application\, combining the benefits of interactivity and reproducibility e.g. by capturing the features and gene sets of interest highlighted during the live session\, and creating an HTML report as an artifact where text\, code\, and output coexist. Using the GeneTonicList as a standardized container for all the required components\, it is possible to simplify the generation of multiple visualizations and summaries.


.. conda:package:: bioconductor-genetonic

   |downloads_bioconductor-genetonic| |docker_bioconductor-genetonic|

   :versions:
      
      

      ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-backbone: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bs4dash: ``>=2.0.0``
   :depends r-circlize: 
   :depends r-colorspace: 
   :depends r-colourpicker: 
   :depends r-complexupset: 
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-dynamictreecut: 
   :depends r-expm: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rintrojs: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyace: 
   :depends r-shinycssloaders: 
   :depends r-shinywidgets: 
   :depends r-tidyr: 
   :depends r-tippy: 
   :depends r-viridis: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-genetonic

   and update with::

      mamba update bioconductor-genetonic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genetonic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genetonic:<tag>

   (see `bioconductor-genetonic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genetonic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genetonic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genetonic
   :alt:   (downloads)
.. |docker_bioconductor-genetonic| image:: https://quay.io/repository/biocontainers/bioconductor-genetonic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genetonic
.. _`bioconductor-genetonic/tags`: https://quay.io/repository/biocontainers/bioconductor-genetonic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genetonic";
        var versions = ["2.6.0","2.4.0","2.2.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genetonic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genetonic/README.html