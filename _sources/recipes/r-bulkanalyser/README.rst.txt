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
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-edger: 
   :depends bioconductor-genie3: 
   :depends bioconductor-preprocesscore: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggforce: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggrastr: 
   :depends r-ggrepel: 
   :depends r-ggvenndiagram: 
   :depends r-glue: 
   :depends r-gprofiler2: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-noisyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyjqui: 
   :depends r-shinyjs: 
   :depends r-shinylp: 
   :depends r-shinywidgets: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-upsetr: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bulkanalyser

   and update with::

      conda update r-bulkanalyser

   or use the docker container::

      docker pull quay.io/biocontainers/r-bulkanalyser:<tag>

   (see `r-bulkanalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bulkanalyser| image:: https://img.shields.io/conda/dn/bioconda/r-bulkanalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bulkanalyser
   :alt:   (downloads)
.. |docker_r-bulkanalyser| image:: https://quay.io/repository/biocontainers/r-bulkanalyser/status
   :target: https://quay.io/repository/biocontainers/r-bulkanalyser
.. _`r-bulkanalyser/tags`: https://quay.io/repository/biocontainers/r-bulkanalyser?tab=tags


.. raw:: html

    <script>
        var package = "r-bulkanalyser";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.0","1.0.0"];
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