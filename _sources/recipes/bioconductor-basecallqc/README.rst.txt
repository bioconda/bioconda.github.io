.. _`bioconductor-basecallqc`:

bioconductor-basecallqc
=======================

|downloads|

The basecallQC package provides tools to work with Illumina bcl2Fastq \(versions \>\= 2.1.7\) software.Prior to basecalling and demultiplexing using the bcl2Fastq software\, basecallQC functions allow the user to update Illumina sample sheets from versions \<\= 1.8.9 to \>\= 2.1.7 standards\, clean sample sheets of common problems such as invalid sample names and IDs\, create read and index basemasks and the bcl2Fastq command. Following the generation of basecalled and demultiplexed data\, the basecallQC packages allows the user to generate HTML tables\, plots and a self contained report of summary metrics from Illumina XML output files.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/basecallQC.html
Versions      1.4.0, 1.2.0
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basecallqc



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-basecallqc

and update with::

   conda update bioconductor-basecallqc


Notes
-----
\'This package relies on bcl2fastq being available in the system PATH.  Due to licensing
restrictions Bioconda does not provide this package.\'



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-basecallqc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-basecallqc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-basecallqc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-basecallqc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-basecallqc

