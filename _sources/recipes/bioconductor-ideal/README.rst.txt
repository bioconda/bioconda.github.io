:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ideal'
.. highlight: bash

bioconductor-ideal
==================

.. conda:recipe:: bioconductor-ideal
   :replaces_section_title:

   This package provides functions for an Interactive Differential Expression AnaLysis of RNA\-sequencing datasets\, to extract quickly and effectively information downstream the step of differential expression. A Shiny application encapsulates the whole package.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ideal.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ideal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideal/meta.yaml>`_

   


.. conda:package:: bioconductor-ideal

   |downloads_bioconductor-ideal| |docker_bioconductor-ideal|

   :versions: 1.8.0-1, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-deseq2: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-go.db: >=3.8.0,<3.9.0
   :depends bioconductor-goseq: >=1.36.0,<1.37.0
   :depends bioconductor-gostats: >=2.50.0,<2.51.0
   :depends bioconductor-ihw: >=1.12.0,<1.13.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-pcaexplorer: >=2.10.0,<2.11.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-topgo: >=2.36.0,<2.37.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-base64enc: 
   :depends r-d3heatmap: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: >=2.0.0
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-pheatmap: 
   :depends r-rentrez: 
   :depends r-rintrojs: 
   :depends r-rmarkdown: 
   :depends r-shiny: >=0.12.0
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ideal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ideal/README.html