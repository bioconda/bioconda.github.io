.. _`biopet-bamstats`:

biopet-bamstats
===============

|downloads|

BamStats is a package that contains tools to generate stats from a BAM file\, merge those stats for multiple samples\, and validate the generated stats files.

============= ===========
Home          https://github.com/biopet/bamstats
Versions      1.0.1, 1.0
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//biopet-bamstats/meta.yaml



============= ===========

BamStats is a package that contains tools
to generate stats from a BAM file\,
merge those stats for multiple samples\,
and validate the generated stats files.



Generate reports clipping stats\, flag stats\, insert size and mapping quality on a BAM file. It outputs
a JSON file\, but can optionally also output in TSV format.

The output of the JSON file is organized in a sample \- library \- readgroup tree structure.
If readgroups in the BAM file are not annotated with sample \(\`SM\`\) and library \(\`LB\`\) tags
an error will be thrown.
This can be fixed by using \`samtools addreplacerg\` or \`picard AddOrReplaceReadGroups\`.



This module will merge bamstats files together and keep the sample\/library\/readgroup structure.
Values for the same readgroups will be added.
It will also validate the resulting file.



Validates a BamStats file.
If aggregation values can not be regenerated the file is considered corrupt.
This should only happen when the file has been manually edited.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/bamstats


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-bamstats

and update with::

   conda update biopet-bamstats


Notes
-----
biopet\-bamstats is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-bamstats\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-bamstats \-Xms512m \-Xmx1g\'.



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-bamstats.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-bamstats/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-bamstats/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-bamstats/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-bamstats
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-bamstats/status
                :target: https://quay.io/repository/biocontainers/biopet-bamstats

