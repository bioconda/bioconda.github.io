.. _`biopet-seattleseqkit`:

biopet-seattleseqkit
====================

|downloads|

\#\#\#\# Tool \- Filter  This tool can filter a seattle seq file.

============= ===========
Home          https://github.com/biopet/seattleseqkit
Versions      0.2, 0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seattleseqkit



============= ===========

\#\#\#\# Tool \- Filter

This tool can filter a seattle seq file.
A given bed file will only select variants inside this regions.
Filtering on specific fields is also possible.
    
        

\#\#\#\# Tool \- MergeGenes

This tool can merge gene counts from the filter step into 1 combined matrix. Genes that are not there will be filled with 0.
    
        

\#\#\#\# Tool \- MultiFilter

This tool can filter a seattle seq file.
A given bed file will only select variants inside this regions.
Filtering on specific fields is also possible.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/seattleseqkit

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-seattleseqkit

and update with::

   conda update biopet-seattleseqkit


Notes
-----
biopet\-seattleseqkit is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-seattleseqkit\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-seattleseqkit \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-seattleseqkit.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-seattleseqkit/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-seattleseqkit
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-seattleseqkit/status
                :target: https://quay.io/repository/biocontainers/biopet-seattleseqkit

