.. _`pathwaymatcher`:

pathwaymatcher
==============

|downloads|

PathwayMatcher is a software tool writen in Java to search for pathways related to a list of proteins in Reactome.


============= ===========
Home          https://github.com/PathwayAnalysisPlatform/PathwayMatcher
Versions      1.7, 1.8, 1.8.1
License       Apache License, Version 2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathwaymatcher



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install pathwaymatcher

and update with::

   conda update pathwaymatcher


Notes
-----
PathwayMatcher is Java program that comes with a custom wrapper shell script.
By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"java \-Xms512m \-Xmx1g \-jar PathwayMatcher.jar\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/pathwaymatcher.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/pathwaymatcher/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/pathwaymatcher/README.html
.. |downloads| image:: https://anaconda.org/bioconda/pathwaymatcher/badges/downloads.svg
               :target: https://anaconda.org/bioconda/pathwaymatcher
.. |docker| image:: https://quay.io/repository/biocontainers/pathwaymatcher/status
                :target: https://quay.io/repository/biocontainers/pathwaymatcher

