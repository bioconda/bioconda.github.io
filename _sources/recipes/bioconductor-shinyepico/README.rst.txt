:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shinyepico'
.. highlight: bash

bioconductor-shinyepico
=======================

.. conda:recipe:: bioconductor-shinyepico
   :replaces_section_title:
   :noindex:

   ShinyÉPICo

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/shinyepico.html
   :license: AGPL-3 + file LICENSE
   :recipe: /`bioconductor-shinyepico <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinyepico>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinyepico/meta.yaml>`_

   ShinyÉPICo is a graphical pipeline to analyze Illumina DNA methylation arrays \(450k or EPIC\). It allows to calculate differentially methylated positions and differentially methylated regions in a user\-friendly interface. Moreover\, it includes several options to export the results and obtain files to perform downstream analysis.


.. conda:package:: bioconductor-shinyepico

   |downloads_bioconductor-shinyepico| |docker_bioconductor-shinyepico|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-minfi: ``>=1.38.0,<1.39.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.13.0``
   :depends r-doparallel: ``>=1.0.0``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-dt: ``>=0.15.0``
   :depends r-foreach: ``>=1.5.0``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-gplots: ``>=3.0.0``
   :depends r-heatmaply: ``>=1.1.0``
   :depends r-plotly: ``>=4.9.2``
   :depends r-reshape2: ``>=1.4.0``
   :depends r-rlang: ``>=0.4.0``
   :depends r-rmarkdown: ``>=2.3.0``
   :depends r-shiny: ``>=1.5.0``
   :depends r-shinycssloaders: ``>=0.3.0``
   :depends r-shinyjs: ``>=1.1.0``
   :depends r-shinythemes: ``>=1.1.0``
   :depends r-shinywidgets: ``>=0.5.0``
   :depends r-statmod: ``>=1.4.0``
   :depends r-tidyr: ``>=1.1.0``
   :depends r-zip: ``>=2.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shinyepico

   and update with::

      conda update bioconductor-shinyepico

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shinyepico:<tag>

   (see `bioconductor-shinyepico/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shinyepico| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinyepico.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shinyepico
   :alt:   (downloads)
.. |docker_bioconductor-shinyepico| image:: https://quay.io/repository/biocontainers/bioconductor-shinyepico/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinyepico
.. _`bioconductor-shinyepico/tags`: https://quay.io/repository/biocontainers/bioconductor-shinyepico?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinyepico/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinyepico/README.html