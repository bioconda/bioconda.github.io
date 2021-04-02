:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-debrowser'
.. highlight: bash

bioconductor-debrowser
======================

.. conda:recipe:: bioconductor-debrowser
   :replaces_section_title:
   :noindex:

   Interactive Differential Expresion Analysis Browser

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/debrowser.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-debrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debrowser/meta.yaml>`_

   Bioinformatics platform containing interactive plots and tables for differential gene and region expression studies. Allows visualizing expression data much more deeply in an interactive and faster way. By changing the parameters\, users can easily discover different parts of the data that like never have been done before. Manually creating and looking these plots takes time. With DEBrowser users can prepare plots without writing any code. Differential expression\, PCA and clustering analysis are made on site and the results are shown in various plots such as scatter\, bar\, box\, volcano\, ma plots and Heatmaps.


.. conda:package:: bioconductor-debrowser

   |downloads_bioconductor-debrowser| |docker_bioconductor-debrowser|

   :versions:
      
      

      ``1.18.2-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``

      

   
   :depends bioconductor-annotate: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-apeglm: ``>=1.12.0,<1.13.0``
   :depends bioconductor-clusterprofiler: ``>=3.18.0,<3.19.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-dose: ``>=3.16.0,<3.17.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-enrichplot: ``>=1.10.0,<1.11.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-harman: ``>=1.18.0,<1.19.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-pathview: ``>=1.30.0,<1.31.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-sva: ``>=3.38.0,<3.39.0``
   :depends r-ashr: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-colourpicker: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-heatmaply: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-stringi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-debrowser

   and update with::

      conda update bioconductor-debrowser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-debrowser:<tag>

   (see `bioconductor-debrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-debrowser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-debrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-debrowser
   :alt:   (downloads)
.. |docker_bioconductor-debrowser| image:: https://quay.io/repository/biocontainers/bioconductor-debrowser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-debrowser
.. _`bioconductor-debrowser/tags`: https://quay.io/repository/biocontainers/bioconductor-debrowser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-debrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-debrowser/README.html