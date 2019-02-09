.. title:: Package Recipe 'bioconductor-fastqcleaner'
.. highlight: bash


bioconductor-fastqcleaner
=========================

.. conda:recipe:: bioconductor-fastqcleaner
   :replaces_section_title:

   An interactive web application for quality control\, filtering and trimming of FASTQ files. This user\-friendly tool combines a pipeline for data processing based on Biostrings and ShortRead infrastructure\, with a cutting\-edge visual environment. Single\-Read and Paired\-End files can be locally processed. Diagnostic interactive plots \(CG content\, per\-base sequence quality\, etc.\) are provided for both the input and output files.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FastqCleaner.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fastqcleaner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastqcleaner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastqcleaner/meta.yaml>`_

   


.. conda:package:: bioconductor-fastqcleaner

   |downloads_bioconductor-fastqcleaner| |docker_bioconductor-fastqcleaner|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dt`  :conda:package:`r-htmltools`  :conda:package:`r-rcpp` >=0.12.12 :conda:package:`r-shiny`  :conda:package:`r-shinybs`  

   :required~by: |required_by_bioconductor-fastqcleaner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fastqcleaner

   and update with::

      conda update bioconductor-fastqcleaner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fastqcleaner


.. |required_by_bioconductor-fastqcleaner| conda:required_by:: bioconductor-fastqcleaner
.. |downloads_bioconductor-fastqcleaner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastqcleaner.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fastqcleaner| image:: https://quay.io/repository/biocontainers/bioconductor-fastqcleaner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastqcleaner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastqcleaner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastqcleaner/README.html

