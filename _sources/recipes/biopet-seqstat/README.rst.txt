.. _`biopet-seqstat`:

biopet-seqstat
==============

|downloads|

SeqStat is a package that contains tools to generate stats from a FastQ file\, merge those stats for multiple samples\, and validate the generated stats files.

============= ===========
Home          https://github.com/biopet/seqstat
Versions      1.0.1, 1.0, 0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seqstat



============= ===========

SeqStat is a package that contains tools
to generate stats from a FastQ file\,
merge those stats for multiple samples\,
and validate the generated stats files.

     
\#\#\#\# Mode \- Generate

Generate outputs several stats on a FASTQ file.

Outputted stats\:

\- Bases
   \- Total number
   \- Base qualities\, with the number of bases having that quality
   \- Number of each nucleotide
\- Reads
   \- Total number
   \- minimum length
   \- maximum length
   \- A histogram of the average base qualities
   \- The quality encoding \(Sanger\, solexa etc.\)
   \- A histogram of the read lengths.
    
        

\#\#\#\# Mode \- Merge

This module will merge seqstat files together and keep the sample\/library\/readgroup structure.
If required it\'s also possible to collapse this\, the output file then des not have any sample\/library\/readgroup structure.
    
        

 aggregation values can not be regenerated the file is considered corrupt.
This should only happen when the user will edit the seqstat file manually.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/seqstat

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-seqstat

and update with::

   conda update biopet-seqstat


Notes
-----
biopet\-seqstat is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-seqstat\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-seqstat \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-seqstat.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-seqstat/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-seqstat/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-seqstat/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-seqstat
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-seqstat/status
                :target: https://quay.io/repository/biocontainers/biopet-seqstat

