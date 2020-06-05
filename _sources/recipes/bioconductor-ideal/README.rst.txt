:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ideal'
.. highlight: bash

bioconductor-ideal
==================

.. conda:recipe:: bioconductor-ideal
   :replaces_section_title:
   :noindex:

   Interactive Differential Expression AnaLysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ideal.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ideal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideal/meta.yaml>`_

   This package provides functions for an Interactive Differential Expression AnaLysis of RNA\-sequencing datasets\, to extract quickly and effectively information downstream the step of differential expression. A Shiny application encapsulates the whole package.


.. conda:package:: bioconductor-ideal

   |downloads_bioconductor-ideal| |docker_bioconductor-ideal|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.48.0,<1.49.0``
   :depends bioconductor-biocparallel: ``>=1.20.0,<1.21.0``
   :depends bioconductor-deseq2: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.38.0,<1.39.0``
   :depends bioconductor-go.db: ``>=3.10.0,<3.11.0``
   :depends bioconductor-goseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-gostats: ``>=2.52.0,<2.53.0``
   :depends bioconductor-ihw: ``>=1.14.0,<1.15.0``
   :depends bioconductor-iranges: ``>=2.20.0,<2.21.0``
   :depends bioconductor-limma: ``>=3.42.0,<3.43.0``
   :depends bioconductor-pcaexplorer: ``>=2.12.0,<2.13.0``
   :depends bioconductor-s4vectors: ``>=0.24.0,<0.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-topgo: ``>=2.37.0,<2.38.0``
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-base64enc: 
   :depends r-d3heatmap: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: ``>=2.0.0``
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-pheatmap: 
   :depends r-rentrez: 
   :depends r-rintrojs: 
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ideal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ideal/README.html