:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srnapipe'
.. highlight: bash

srnapipe
========

.. conda:recipe:: srnapipe
   :replaces_section_title:

   Pipeline for bioinformatic in\-depth exploration of small RNA\-seq data

   :homepage: https://github.com/GReD-Clermont/sRNAPipe-cli
   :license: Academic Free License v3.0
   :recipe: /`srnapipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnapipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnapipe/meta.yaml>`_

   


.. conda:package:: srnapipe

   |downloads_srnapipe| |docker_srnapipe|

   :versions: 1.1.1-0, 1.1-3, 1.1-0
   
   :depends bedtools: >=2.24.0
   :depends bioconductor-sushi: 
   :depends bwa: >=0.7.12
   :depends fonts-conda-ecosystem: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-file-copy-recursive: 
   :depends perl-getopt-long: 
   :depends perl-math-cdf: 
   :depends perl-parallel-forkmanager: 
   :depends perl-statistics-r: 
   :depends perl-string-random: 
   :depends r-base: >=3.5,<3.6.0a0
   :depends r-ggplot2: 
   :depends r-plotrix: 
   :depends r-rcolorbrewer: 
   :depends samtools: >=1.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install srnapipe

   and update with::

      conda update srnapipe

   or use the docker container::

      docker pull quay.io/biocontainers/srnapipe:<tag>

   (see `srnapipe/tags`_ for valid values for ``<tag>``)


.. |downloads_srnapipe| image:: https://img.shields.io/conda/dn/bioconda/srnapipe.svg?style=flat
   :target: https://anaconda.org/bioconda/srnapipe
   :alt:   (downloads)
.. |docker_srnapipe| image:: https://quay.io/repository/biocontainers/srnapipe/status
   :target: https://quay.io/repository/biocontainers/srnapipe
.. _`srnapipe/tags`: https://quay.io/repository/biocontainers/srnapipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srnapipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srnapipe/README.html