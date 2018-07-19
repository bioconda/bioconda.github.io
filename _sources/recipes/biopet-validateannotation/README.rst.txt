.. _`biopet-validateannotation`:

biopet-validateannotation
=========================

|downloads|

ValidateAnnotationvalidates whether an annotation file is correct.

============= ===========
Home          https://github.com/biopet/validateannotation
Versions      0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validateannotation



============= ===========

ValidateAnnotationvalidates whether an annotation file is correct.
It checks whether all the annotated contigs are present on the reference.
It can check gtf or refflat files. It can also check both\,
in which case it will also check for dissimilarities between the refflat and
GTF files.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validateannotation

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-validateannotation

and update with::

   conda update biopet-validateannotation


Notes
-----
biopet\-validateannotation is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validateannotation\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validateannotation \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-validateannotation.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-validateannotation/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-validateannotation/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-validateannotation/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-validateannotation
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-validateannotation/status
                :target: https://quay.io/repository/biocontainers/biopet-validateannotation

