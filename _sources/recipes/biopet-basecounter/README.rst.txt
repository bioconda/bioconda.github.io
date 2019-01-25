.. _`biopet-basecounter`:

biopet-basecounter
==================

|downloads|

BaseCounter counts the bases from genes and transcripts and outputs information on the counts in exonic and intronic regions as well as information on the counts on the sense and antisense strands.

============= ===========
Home          https://github.com/biopet/basecounter
Versions      0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/biopet-basecounter/meta.yaml



============= ===========

BaseCounter counts the bases from genes and transcripts and
outputs information on the counts in exonic and intronic
regions as well as information on the counts on the sense
and antisense strands.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/basecounter

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-basecounter

and update with::

   conda update biopet-basecounter


Notes
-----
biopet\-basecounter is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-basecounter\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-basecounter \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-basecounter.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-basecounter/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-basecounter/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-basecounter/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-basecounter
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-basecounter/status
                :target: https://quay.io/repository/biocontainers/biopet-basecounter

