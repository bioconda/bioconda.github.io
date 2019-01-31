.. _`biopet-validatefastq`:

biopet-validatefastq
====================

|downloads|

This tool validates a FASTQ file.

============= ===========
Home          https://github.com/biopet/validatefastq
Versions      0.1.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//biopet-validatefastq/meta.yaml



============= ===========

This tool validates a FASTQ file. When data is paired it can
also validate a pair of FASTQ files.
ValidateFastq will check if the FASTQ is in valid FASTQ format.
This includes checking for duplicate reads and checking whether
a pair of FASTQ files contains the same amount of reads and headers match.
It also check whether the quality encodings are correct and outputs
the most likely encoding format \(Sanger\, Solexa etc.\).

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validatefastq

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-validatefastq

and update with::

   conda update biopet-validatefastq


Notes
-----
biopet\-validatefastq is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validatefastq\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validatefastq \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-validatefastq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-validatefastq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-validatefastq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-validatefastq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-validatefastq
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-validatefastq/status
                :target: https://quay.io/repository/biocontainers/biopet-validatefastq

