.. _`meraculous`:

meraculous
==========

|downloads|

Meraculous is a whole genome assembler for Next Generation Sequencing data\, geared for large genomes. It\'s hybrid k\-mer\/read\-based approach capitalizes on the high accuracy of Illumina sequence by eschewing an explicit error correction step which we argue to be redundant with the assembly process. Meraculous achieves high performance with large datasets by utilizing lightweight data structures and multi\-threaded parallelization\, allowing to assemble human\-sized genomes on a high\-cpu cluster in under a day. The process pipeline implements a highly transparent and portable model of job control and monitoring where different assembly stages can be executed and re\-executed separately or in unison on a wide variety of architectures.


============= ===========
Home          https://jgi.doe.gov/data-and-tools/meraculous/
Versions      2.2.4, 2.2.5, 2.2.5.1.1.ga103cd6
License       GPLv3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meraculous



Links         doi: :doi:`10.1371/journal.pone.0023501`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install meraculous

and update with::

   conda update meraculous



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/meraculous.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/meraculous/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/meraculous/README.html
.. |downloads| image:: https://anaconda.org/bioconda/meraculous/badges/downloads.svg
               :target: https://anaconda.org/bioconda/meraculous
.. |docker| image:: https://quay.io/repository/biocontainers/meraculous/status
                :target: https://quay.io/repository/biocontainers/meraculous

