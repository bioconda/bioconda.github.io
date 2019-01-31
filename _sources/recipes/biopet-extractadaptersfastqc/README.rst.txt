.. _`biopet-extractadaptersfastqc`:

biopet-extractadaptersfastqc
============================

|downloads|

ExtractAdaptersFastqc reads which adapter sequences where found from a FastQC raw report.

============= ===========
Home          https://github.com/biopet/extractadaptersfastqc
Versions      0.2, 0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//biopet-extractadaptersfastqc/meta.yaml



============= ===========

ExtractAdaptersFastqc reads which adapter sequences where found from a FastQC raw report.
These sequences can be used as input for a QC tool such as cutadapt.
The sequences can be output in plain text format with a
newline character as a separator between the sequences.
Alternatively the sequences can be output in FASTA format.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/extractadaptersfastqc

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-extractadaptersfastqc

and update with::

   conda update biopet-extractadaptersfastqc


Notes
-----
biopet\-extractadaptersfastqc is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-extractadaptersfastqc\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-extractadaptersfastqc \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-extractadaptersfastqc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-extractadaptersfastqc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-extractadaptersfastqc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-extractadaptersfastqc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-extractadaptersfastqc
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-extractadaptersfastqc/status
                :target: https://quay.io/repository/biocontainers/biopet-extractadaptersfastqc

