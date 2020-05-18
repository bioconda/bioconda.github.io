:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-strandcheckr'
.. highlight: bash

bioconductor-strandcheckr
=========================

.. conda:recipe:: bioconductor-strandcheckr
   :replaces_section_title:

   Calculate strandness information of a bam file

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/strandCheckR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-strandcheckr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-strandcheckr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-strandcheckr/meta.yaml>`_

   This package aims to quantify and remove putative double strand DNA from a strand\-specific RNA sample. There are also options and methods to plot the positive\/negative proportions of all sliding windows\, which allow users to have an idea of how much the sample was contaminated and the appropriate threshold to be used for filtering.


.. conda:package:: bioconductor-strandcheckr

   |downloads_bioconductor-strandcheckr| |docker_bioconductor-strandcheckr|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicalignments: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: >=3.10.0,<3.11.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-strandcheckr

   and update with::

      conda update bioconductor-strandcheckr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-strandcheckr:<tag>

   (see `bioconductor-strandcheckr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-strandcheckr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-strandcheckr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-strandcheckr
   :alt:   (downloads)
.. |docker_bioconductor-strandcheckr| image:: https://quay.io/repository/biocontainers/bioconductor-strandcheckr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-strandcheckr
.. _`bioconductor-strandcheckr/tags`: https://quay.io/repository/biocontainers/bioconductor-strandcheckr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-strandcheckr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-strandcheckr/README.html