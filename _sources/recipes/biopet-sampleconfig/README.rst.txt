.. _`biopet-sampleconfig`:

biopet-sampleconfig
===================

|downloads|

\#\#\#\# Tools \- ExtractTsv  This mean can extract samples\, libraries and readgroups from a sample config file.

============= ===========
Home          https://github.com/biopet/sampleconfig
Versions      0.1, 0.2
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-sampleconfig



============= ===========

\#\#\#\# Tools \- ExtractTsv

This mean can extract samples\, libraries and readgroups from a sample config file. This meant as a supporting tool inside wdl pipelines.
It can also output a single layer as tsv file.
    
        

\#\#\#\# Tools \- ReadFromTsv

This tool enables a user to create a full sample sheet in JSON format or
YAML format\, suitable for all Biopet Queue pipelines\, from TSV file\(s\).
    
        

\#\#\#\# Tools \- CromwellArrays

This tool will convert the sample configs to a array based format that can be used inside wdl pipelines.
This tool is only to support biowdl pipelines.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/sampleconfig

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-sampleconfig

and update with::

   conda update biopet-sampleconfig


Notes
-----
biopet\-sampleconfig is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-sampleconfig\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-sampleconfig \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-sampleconfig.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-sampleconfig/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-sampleconfig/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-sampleconfig/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-sampleconfig
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-sampleconfig/status
                :target: https://quay.io/repository/biocontainers/biopet-sampleconfig

