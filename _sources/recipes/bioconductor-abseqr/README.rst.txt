.. title:: Package Recipe 'bioconductor-abseqr'
.. highlight: bash


bioconductor-abseqr
===================

.. conda:recipe:: bioconductor-abseqr
   :replaces_section_title:

   AbSeq is a comprehensive bioinformatic pipeline for the analysis of sequencing datasets generated from antibody libraries and abseqR is one of its packages. abseqR empowers the users of abseqPy \(https\:\/\/github.com\/malhamdoosh\/abseqPy\) with plotting and reporting capabilities and allows them to generate interactive HTML reports for the convenience of viewing and sharing with other researchers. Additionally\, abseqR extends abseqPy to compare multiple repertoire analyses and perform further downstream analysis on its output.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/abseqR.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-abseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abseqr/meta.yaml>`_

   


.. conda:package:: bioconductor-abseqr

   |downloads_bioconductor-abseqr| |docker_bioconductor-abseqr|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-flexdashboard`  :conda:package:`r-ggcorrplot`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-knitr`  :conda:package:`r-plotly`  :conda:package:`r-plyr`  :conda:package:`r-png`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-rmarkdown`  :conda:package:`r-stringr`  :conda:package:`r-vegan`  :conda:package:`r-venndiagram`  

   :required~by: |required_by_bioconductor-abseqr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-abseqr

   and update with::

      conda update bioconductor-abseqr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-abseqr


.. |required_by_bioconductor-abseqr| conda:required_by:: bioconductor-abseqr
.. |downloads_bioconductor-abseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-abseqr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-abseqr| image:: https://quay.io/repository/biocontainers/bioconductor-abseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-abseqr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-abseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-abseqr/README.html

