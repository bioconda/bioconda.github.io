.. _`clove`:

clove
=====

|downloads|

CLOVE\: Classification of genomic fusions into structural variation events\.

======== ===========
Home     https://github.com/PapenfussLab/clove
Versions 0.17
License  GPL-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clove

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install clove

and update with::

   conda update clove


Notes
-----
Clove is a Java program that comes with a custom wrapper shell script\.
This shell wrapper is called \"clove\" and is on \$PATH by default\. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper\. If you want to overwrite it you can
specify these values directly after your binaries\. If you have \_JAVA\_OPTIONS
set globally this will take precedence\.
For example run it with \"clove \-Xms512m \-Xmx1g\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/clove.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/clove/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/clove/README.html
.. |downloads| image:: https://anaconda.org/bioconda/clove/badges/downloads.svg
               :target: https://anaconda.org/bioconda/clove
.. |docker| image:: https://quay.io/repository/biocontainers/clove/status
                :target: https://quay.io/repository/biocontainers/clove

