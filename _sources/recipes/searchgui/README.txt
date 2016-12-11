.. _`searchgui`:

searchgui
=========

|downloads|

SearchGUI is a user-friendly open-source graphical user interface for configuring and running proteomics identification search engines, currently supporting X!Tandem, MS-GF+, MS Amanda, MyriMatch, Comet, Tide, Andromeda and OMSSA.


======== ===========
Home     https://github.com/compomics/searchgui
Versions 2.1.4, 2.9.0, 3.1.4
License  Apache License, Version 2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/searchgui
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install searchgui

and update with::

   conda update searchgui

Notes
-----

SearchGUI is Java program that comes with a custom wrapper shell script.
This shell wrapper is called "opsin" and is on $PATH by default. By default
"-Xms512m -Xmx1g" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have _JAVA_OPTIONS
set globally this will take precedence.
For example run it with "searchgui -Xms512m -Xmx1g"


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/searchgui.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/searchgui/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/searchgui/README.html
.. |downloads| image:: https://anaconda.org/bioconda/searchgui/badges/downloads.svg
               :target: https://anaconda.org/bioconda/searchgui
.. |docker| image:: https://quay.io/repository/biocontainers/searchgui/status
                :target: https://quay.io/repository/biocontainers/searchgui


