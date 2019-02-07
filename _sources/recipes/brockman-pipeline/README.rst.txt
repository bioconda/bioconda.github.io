.. title:: Package Recipe 'brockman-pipeline'
.. highlight: bash


brockman-pipeline
=================

.. conda:recipe:: brockman-pipeline
   :replaces_section_title:

   Brockman Representation Of Chromatin by K\-mers in Mark\-Associated Nucleotides

   :homepage: https://github.com/Carldeboer/Brockman
   :license: GPL-3.0
   :recipe: /`brockman-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline/meta.yaml>`_

   


.. conda:package:: brockman-pipeline

   |downloads_brockman-pipeline| |docker_brockman-pipeline|

   :versions: 1.0

   :depends: :conda:package:`amused`  :conda:package:`bedtools`  :conda:package:`bowtie2`  :conda:package:`bzip2`  :conda:package:`jemalloc`  :conda:package:`libgcc`  :conda:package:`ncurses`  :conda:package:`ruby` >=2.4 :conda:package:`ruby-dna-tools`  :conda:package:`samtools`  :conda:package:`trimmomatic`  :conda:package:`ucsc-twobittofa`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_brockman-pipeline|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install brockman-pipeline

   and update with::

      conda update brockman-pipeline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/brockman-pipeline


.. |required_by_brockman-pipeline| conda:required_by:: brockman-pipeline
.. |downloads_brockman-pipeline| image:: https://img.shields.io/conda/dn/bioconda/brockman-pipeline.svg?style=flat
   :alt:   (downloads)
.. |docker_brockman-pipeline| image:: https://quay.io/repository/biocontainers/brockman-pipeline/status
   :target: https://quay.io/repository/biocontainers/brockman-pipeline







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brockman-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brockman-pipeline/README.html

