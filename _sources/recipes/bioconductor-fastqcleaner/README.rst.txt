:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastqcleaner'
.. highlight: bash

bioconductor-fastqcleaner
=========================

.. conda:recipe:: bioconductor-fastqcleaner
   :replaces_section_title:

   A Shiny Application for Quality Control\, Filtering and Trimming of FASTQ Files

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/FastqCleaner.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fastqcleaner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastqcleaner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastqcleaner/meta.yaml>`_

   An interactive web application for quality control\, filtering and trimming of FASTQ files. This user\-friendly tool combines a pipeline for data processing based on Biostrings and ShortRead infrastructure\, with a cutting\-edge visual environment. Single\-Read and Paired\-End files can be locally processed. Diagnostic interactive plots \(CG content\, per\-base sequence quality\, etc.\) are provided for both the input and output files.


.. conda:package:: bioconductor-fastqcleaner

   |downloads_bioconductor-fastqcleaner| |docker_bioconductor-fastqcleaner|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-shortread: >=1.46.0,<1.47.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dt: 
   :depends r-htmltools: 
   :depends r-rcpp: >=0.12.12
   :depends r-shiny: 
   :depends r-shinybs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fastqcleaner

   and update with::

      conda update bioconductor-fastqcleaner

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fastqcleaner:<tag>

   (see `bioconductor-fastqcleaner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fastqcleaner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastqcleaner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastqcleaner
   :alt:   (downloads)
.. |docker_bioconductor-fastqcleaner| image:: https://quay.io/repository/biocontainers/bioconductor-fastqcleaner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastqcleaner
.. _`bioconductor-fastqcleaner/tags`: https://quay.io/repository/biocontainers/bioconductor-fastqcleaner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastqcleaner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastqcleaner/README.html