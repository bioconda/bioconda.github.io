.. _`bbmap`:

bbmap
=====

|downloads|

BBMap is a short read aligner, as well as various other bioinformatic tools

======== ===========
Home     https://sourceforge.net/projects/bbmap
Versions 35.85, 36.32
License  UC-LBL license (see package)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bbmap

and update with::

   conda update bbmap

Notes
-----

BBMap is a series of Java programs, but they come with a number of custom wrapper shell scripts. Each of these is symlinked to the conda bin directory during install.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bbmap.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bbmap/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bbmap/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bbmap/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bbmap
.. |docker| image:: https://quay.io/repository/biocontainers/bbmap/status
                :target: https://quay.io/repository/biocontainers/bbmap


