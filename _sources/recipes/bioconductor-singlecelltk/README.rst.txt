.. title:: Package Recipe 'bioconductor-singlecelltk'
.. highlight: bash


bioconductor-singlecelltk
=========================

.. conda:recipe:: bioconductor-singlecelltk
   :replaces_section_title:

   Run common single cell analysis directly through your browser including differential expression\, downsampling analysis\, and clustering.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/singleCellTK.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-singlecelltk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk/meta.yaml>`_

   


.. conda:package:: bioconductor-singlecelltk

   |downloads_bioconductor-singlecelltk| |docker_bioconductor-singlecelltk|

   :versions: 1.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-ggtree` >=1.14.0,<1.15.0 :conda:package:`bioconductor-gsva` >=1.30.0,<1.31.0 :conda:package:`bioconductor-gsvadata` >=1.18.0,<1.19.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-mast` >=1.8.0,<1.9.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-cluster`  :conda:package:`r-colourpicker`  :conda:package:`r-data.table`  :conda:package:`r-dt`  :conda:package:`r-enrichr`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-matrixstats`  :conda:package:`r-plotly`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-rtsne`  :conda:package:`r-shiny`  :conda:package:`r-shinyalert`  :conda:package:`r-shinycssloaders`  :conda:package:`r-shinyjs`  

   :required~by: |required_by_bioconductor-singlecelltk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlecelltk

   and update with::

      conda update bioconductor-singlecelltk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-singlecelltk


.. |required_by_bioconductor-singlecelltk| conda:required_by:: bioconductor-singlecelltk
.. |downloads_bioconductor-singlecelltk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecelltk.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-singlecelltk| image:: https://quay.io/repository/biocontainers/bioconductor-singlecelltk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecelltk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecelltk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecelltk/README.html

