.. _`bioconductor-sradb`:

bioconductor-sradb
==================

|downloads|

The Sequence Read Archive (SRA) is the largest public repository of sequencing data from the next generation of sequencing platforms including Roche 454 GS System, Illumina Genome Analyzer, Applied Biosystems SOLiD System, Helicos Heliscope, and others. However, finding data of interest can be challenging using current tools. SRAdb is an attempt to make access to the metadata associated with submission, study, sample, experiment and run much more feasible. This is accomplished by parsing all the NCBI SRA metadata into a SQLite database that can be stored and queried locally. Fulltext search in the package make querying metadata very flexible and powerful.  fastq and sra files can be downloaded for doing alignment locally. Beside ftp protocol, the SRAdb has funcitons supporting fastp protocol (ascp from Aspera Connect) for faster downloading large data files over long distance. The SQLite database is updated regularly as new data is added to SRA and can be downloaded at will for the most up-to-date metadata.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/SRAdb.html
Versions 1.28.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sradb
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sradb

and update with::

   conda update bioconductor-sradb



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sradb.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sradb/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sradb/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sradb/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sradb
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sradb/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sradb


