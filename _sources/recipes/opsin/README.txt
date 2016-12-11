.. _`opsin`:

opsin
=====

|downloads|

OPSIN is a Java(1.6+) library for IUPAC name-to-structure conversion offering high recall and precision on organic chemical nomenclature.

======== ===========
Home     https://bitbucket.org/dan2097/opsin/
Versions 1.4.0, 2.1.0
License  Artistic License 2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin/2.1.0
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install opsin

and update with::

   conda update opsin

Notes
-----

Opsin is Java program that comes with a custom wrapper shell script.
This shell wrapper is called "opsin" and is on $PATH by default. By default
"-Xms512m -Xmx1g" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have _JAVA_OPTIONS
set globally this will take precedence.
For example run opsin with "opsin -Xms512m -Xmx1g --help"


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/opsin.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/opsin/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/opsin/README.html
.. |downloads| image:: https://anaconda.org/bioconda/opsin/badges/downloads.svg
               :target: https://anaconda.org/bioconda/opsin
.. |docker| image:: https://quay.io/repository/biocontainers/opsin/status
                :target: https://quay.io/repository/biocontainers/opsin


