.. title:: Package Recipe 'bioconductor-strandcheckr'
.. highlight: bash


bioconductor-strandcheckr
=========================

.. conda:recipe:: bioconductor-strandcheckr
   :replaces_section_title:

   This package aims to quantify and remove putative double strand DNA from a strand\-specific RNA sample. There are also options and methods to plot the positive\/negative proportions of all sliding windows\, which allow users to have an idea of how much the sample was contaminated and the appropriate threshold to be used for filtering.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/strandCheckR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-strandcheckr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-strandcheckr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-strandcheckr/meta.yaml>`_

   


.. conda:package:: bioconductor-strandcheckr

   |downloads_bioconductor-strandcheckr| |docker_bioconductor-strandcheckr|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg38.knowngene` >=3.4.0,<3.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-magrittr`  :conda:package:`r-reshape2`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-strandcheckr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-strandcheckr

   and update with::

      conda update bioconductor-strandcheckr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-strandcheckr


.. |required_by_bioconductor-strandcheckr| conda:required_by:: bioconductor-strandcheckr
.. |downloads_bioconductor-strandcheckr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-strandcheckr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-strandcheckr| image:: https://quay.io/repository/biocontainers/bioconductor-strandcheckr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-strandcheckr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-strandcheckr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-strandcheckr/README.html

