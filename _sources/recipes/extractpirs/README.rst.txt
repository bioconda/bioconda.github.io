.. _`extractpirs`:

extractpirs
===========

|downloads|

A phase informative read (PIR) is a sequencing read that span at least 2 heterozyguous sites. In the following, we require first that the sequence data is stored in BAM files and second that the genotype data to be phased is in VCF format. We developed a small tool, extractPIRs, to extract the PIRs from BAM files that relies on the samtools API for efficiency

======== ===========
Home     https://mathgen.stats.ox.ac.uk/genetics_software/shapeit/shapeit.html
Versions 1.0
License  Free for Academic Use
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extractpirs
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install extractpirs

and update with::

   conda update extractpirs



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/extractpirs.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/extractpirs/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/extractpirs/README.html
.. |downloads| image:: https://anaconda.org/bioconda/extractpirs/badges/downloads.svg
               :target: https://anaconda.org/bioconda/extractpirs
.. |docker| image:: https://quay.io/repository/biocontainers/extractpirs/status
                :target: https://quay.io/repository/biocontainers/extractpirs


