.. title:: Package Recipe 'meraculous'
.. highlight: bash


meraculous
==========

.. conda:recipe:: meraculous
   :replaces_section_title:

   Meraculous is a whole genome assembler for Next Generation Sequencing data\, geared for large genomes. It\'s hybrid k\-mer\/read\-based approach capitalizes on the high accuracy of Illumina sequence by eschewing an explicit error correction step which we argue to be redundant with the assembly process. Meraculous achieves high performance with large datasets by utilizing lightweight data structures and multi\-threaded parallelization\, allowing to assemble human\-sized genomes on a high\-cpu cluster in under a day. The process pipeline implements a highly transparent and portable model of job control and monitoring where different assembly stages can be executed and re\-executed separately or in unison on a wide variety of architectures.


   :homepage: https://jgi.doe.gov/data-and-tools/meraculous/
   :license: GPLv3
   :recipe: /`meraculous <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meraculous>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meraculous/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0023501`

   


.. conda:package:: meraculous

   |downloads_meraculous| |docker_meraculous|

   :versions: 2.2.6, 2.2.5.1.1.ga103cd6, 2.2.5, 2.2.4

   :depends: :conda:package:`boost-cpp` >=1.67.0,<1.67.1.0a0 :conda:package:`gnuplot` >=3.7 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libgd` >=2.0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-log-log4perl` >=1.31 

   :required~by: |required_by_meraculous|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meraculous

   and update with::

      conda update meraculous

   or use the docker container::

      docker pull quay.io/repository/biocontainers/meraculous


.. |required_by_meraculous| conda:required_by:: meraculous
.. |downloads_meraculous| image:: https://img.shields.io/conda/dn/bioconda/meraculous.svg?style=flat
   :alt:   (downloads)
.. |docker_meraculous| image:: https://quay.io/repository/biocontainers/meraculous/status
   :target: https://quay.io/repository/biocontainers/meraculous







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meraculous/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meraculous/README.html

