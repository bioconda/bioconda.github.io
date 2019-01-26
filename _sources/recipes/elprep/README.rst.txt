.. _`elprep`:

elprep
======

|downloads|

elPrep is a high\-performance tool for preparing .sam\/.bam files for variant calling in sequencing pipelines. It can be used as a drop\-in replacement for SAMtools\/Picard\/GATK4\, and was extensively tested with different pipelines for variant analysis with GATK. The key advantage of elPrep is that it only performs a single\-pass to process a .sam\/.bam file\, independent of the number of processing steps that need to be applied in a particular pipeline\, greatly improving runtime performance.

============= ===========
Home          https://github.com/ExaScience/elprep
Versions      4.1.0, 4.0.1, 4.0.0, 3.04
License       GNU AFFERO GENERAL PUBLIC LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/elprep/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install elprep

and update with::

   conda update elprep



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/elprep.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/elprep/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/elprep/README.html
.. |downloads| image:: https://anaconda.org/bioconda/elprep/badges/downloads.svg
               :target: https://anaconda.org/bioconda/elprep
.. |docker| image:: https://quay.io/repository/biocontainers/elprep/status
                :target: https://quay.io/repository/biocontainers/elprep

