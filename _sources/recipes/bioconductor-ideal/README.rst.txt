:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ideal'
.. highlight: bash

bioconductor-ideal
==================

.. conda:recipe:: bioconductor-ideal
   :replaces_section_title:
   :noindex:

   Interactive Differential Expression AnaLysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ideal.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ideal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideal/meta.yaml>`_

   This package provides functions for an Interactive Differential Expression AnaLysis of RNA\-sequencing datasets\, to extract quickly and effectively information downstream the step of differential expression. A Shiny application encapsulates the whole package.


.. conda:package:: bioconductor-ideal

   |downloads_bioconductor-ideal| |docker_bioconductor-ideal|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-deseq2: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-go.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-goseq: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gostats: ``>=2.60.0,<2.61.0``
   :depends bioconductor-ihw: ``>=1.22.0,<1.23.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-pcaexplorer: ``>=2.20.0,<2.21.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-topgo: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-base64enc: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: ``>=2.0.0``
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-heatmaply: 
   :depends r-knitr: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-rentrez: 
   :depends r-rintrojs: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-shiny: ``>=0.12.0``
   :depends r-shinyace: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-stringr: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ideal

   and update with::

      conda update bioconductor-ideal

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ideal:<tag>

   (see `bioconductor-ideal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ideal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ideal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ideal
   :alt:   (downloads)
.. |docker_bioconductor-ideal| image:: https://quay.io/repository/biocontainers/bioconductor-ideal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ideal
.. _`bioconductor-ideal/tags`: https://quay.io/repository/biocontainers/bioconductor-ideal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ideal";
        var versions = ["1.18.0","1.16.0","1.14.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ideal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ideal/README.html