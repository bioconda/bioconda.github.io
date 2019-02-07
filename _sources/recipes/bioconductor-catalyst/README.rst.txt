.. title:: Package Recipe 'bioconductor-catalyst'
.. highlight: bash


bioconductor-catalyst
=====================

.. conda:recipe:: bioconductor-catalyst
   :replaces_section_title:

   Mass cytometry \(CyTOF\) uses heavy metal isotopes rather than fluorescent tags as reporters to label antibodies\, thereby substantially decreasing spectral overlap and allowing for examination of over 50 parameters at the single cell level. While spectral overlap is significantly less pronounced in CyTOF than flow cytometry\, spillover due to detection sensitivity\, isotopic impurities\, and oxide formation can impede data interpretability. We designed CATALYST \(Cytometry dATa anALYSis Tools\) to provide a pipeline for preprocessing of cytometry data\, including i\) normalization using bead standards\, ii\) single\-cell deconvolution\, and iii\) bead\-based compensation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CATALYST.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-catalyst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst/meta.yaml>`_

   


.. conda:package:: bioconductor-catalyst

   |downloads_bioconductor-catalyst| |docker_bioconductor-catalyst|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-consensusclusterplus` >=1.46.0,<1.47.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowsom` >=1.14.0,<1.15.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-dplyr`  :conda:package:`r-drc`  :conda:package:`r-dt`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-ggridges`  :conda:package:`r-gridextra`  :conda:package:`r-htmltools`  :conda:package:`r-magrittr`  :conda:package:`r-matrix`  :conda:package:`r-matrixstats`  :conda:package:`r-nnls`  :conda:package:`r-plotly`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-rtsne`  :conda:package:`r-scales`  :conda:package:`r-shiny`  :conda:package:`r-shinybs`  :conda:package:`r-shinydashboard`  :conda:package:`r-shinyjs`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-catalyst|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-catalyst

   and update with::

      conda update bioconductor-catalyst

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-catalyst


.. |required_by_bioconductor-catalyst| conda:required_by:: bioconductor-catalyst
.. |downloads_bioconductor-catalyst| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-catalyst.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-catalyst| image:: https://quay.io/repository/biocontainers/bioconductor-catalyst/status
   :target: https://quay.io/repository/biocontainers/bioconductor-catalyst







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-catalyst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-catalyst/README.html

