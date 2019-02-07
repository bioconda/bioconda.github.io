.. title:: Package Recipe 'fastq-screen'
.. highlight: bash


fastq-screen
============

.. conda:recipe:: fastq-screen
   :replaces_section_title:

   FastQ Screen allows you to screen a library of sequences in FastQ format against a set of sequence databases so you can see if the composition of the library matches with what you expect

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/fastq_screen/
   :license: GPLv3
   :recipe: /`fastq-screen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-screen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-screen/meta.yaml>`_

   


.. conda:package:: fastq-screen

   |downloads_fastq-screen| |docker_fastq-screen|

   :versions: 0.13.0, 0.11.3, 0.11.1, 0.5.2

   :depends: :conda:package:`bowtie`  :conda:package:`bowtie2`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-gdgraph`  

   :required~by: |required_by_fastq-screen|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-screen

   and update with::

      conda update fastq-screen

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastq-screen


.. |required_by_fastq-screen| conda:required_by:: fastq-screen
.. |downloads_fastq-screen| image:: https://img.shields.io/conda/dn/bioconda/fastq-screen.svg?style=flat
   :alt:   (downloads)
.. |docker_fastq-screen| image:: https://quay.io/repository/biocontainers/fastq-screen/status
   :target: https://quay.io/repository/biocontainers/fastq-screen







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-screen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-screen/README.html

