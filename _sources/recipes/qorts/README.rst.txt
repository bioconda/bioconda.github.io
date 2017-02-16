.. _`qorts`:

qorts
=====

|downloads|

The QoRTs software package is a fast, efficient, and portable multifunction toolkit designed to assist in the analysis, quality control, and data management of RNA-Seq datasets.

======== ===========
Home     http://hartleys.github.io/QoRTs/
Versions 1.1.8
License  Public Domain
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install qorts

and update with::

   conda update qorts

Notes
-----

QoRTs is Java program that comes with a custom wrapper shell script.
This shell wrapper is called "qorts" and is on $PATH by default. By default
"-Xms512m -Xmx1g" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have _JAVA_OPTIONS
set globally this will take precedence.
For example run it with "qorts -Xms512m -Xmx1g"


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/qorts.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/qorts/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/qorts/README.html
.. |downloads| image:: https://anaconda.org/bioconda/qorts/badges/downloads.svg
               :target: https://anaconda.org/bioconda/qorts
.. |docker| image:: https://quay.io/repository/biocontainers/qorts/status
                :target: https://quay.io/repository/biocontainers/qorts


