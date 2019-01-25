.. _`biopet-vcffilter`:

biopet-vcffilter
================

|downloads|

This tool enables a user to filter VCF files.

============= ===========
Home          https://github.com/biopet/vcffilter
Versions      0.2
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/biopet-vcffilter/meta.yaml



============= ===========

This tool enables a user to filter VCF files. For example on sample depth and\/or total depth. It can also be used to
filter out the reference calls and\/or minimum number of sample passes. There is a wide set of options which one can
use to change the filter settings.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/vcffilter

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-vcffilter

and update with::

   conda update biopet-vcffilter


Notes
-----
biopet\-vcffilter is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-vcffilter\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-vcffilter \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-vcffilter.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-vcffilter/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-vcffilter/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-vcffilter/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-vcffilter
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-vcffilter/status
                :target: https://quay.io/repository/biocontainers/biopet-vcffilter

