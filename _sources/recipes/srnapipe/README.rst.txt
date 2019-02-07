.. title:: Package Recipe 'srnapipe'
.. highlight: bash


srnapipe
========

.. conda:recipe:: srnapipe/1.1
   :replaces_section_title:

   Pipeline for bioinformatic in\-depth exploration of small RNA\-seq data

   :homepage: https://github.com/GReD-Clermont/sRNAPipe-cli
   :license: Academic Free License v3.0
   :recipe: /`srnapipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnapipe>`_/`1.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnapipe/1.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnapipe/1.1/meta.yaml>`_

   


.. conda:package:: srnapipe

   |downloads_srnapipe| |docker_srnapipe|

   :versions: 1.1

   :depends: :conda:package:`bedtools` >=2.24.0 :conda:package:`bioconductor-sushi`  :conda:package:`bwa` >=0.7.12 :conda:package:`perl` >=5.22.0.1,<5.22.1.0a0 :conda:package:`perl-file-copy-recursive`  :conda:package:`perl-getopt-long`  :conda:package:`perl-math-cdf`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-statistics-r`  :conda:package:`perl-string-random`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-plotrix`  :conda:package:`r-rcolorbrewer`  :conda:package:`samtools` >=1.5 

   :required~by: |required_by_srnapipe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install srnapipe

   and update with::

      conda update srnapipe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/srnapipe


.. |required_by_srnapipe| conda:required_by:: srnapipe
.. |downloads_srnapipe| image:: https://img.shields.io/conda/dn/bioconda/srnapipe.svg?style=flat
   :alt:   (downloads)
.. |docker_srnapipe| image:: https://quay.io/repository/biocontainers/srnapipe/status
   :target: https://quay.io/repository/biocontainers/srnapipe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srnapipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srnapipe/README.html

