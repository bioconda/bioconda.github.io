.. _`je-suite`:

je-suite
========

|downloads|

Je is a suite to handle barcoded fastq files with \(or without\) Unique Molecule Identifiers \(UMIs\) and filter
read duplicates using these UMIs


============= ===========
Home          https://gbcs.embl.de/Je
Versions      1.2
License       MIT License
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/je-suite



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install je-suite

and update with::

   conda update je-suite


Notes
-----
Je is Java program that comes with a wrapper shell script\.
By default \"\-Xmx4G \-Xms256m\" is set in the wrapper\. If you want to overwrite it you can
specify these values directly after your binaries\. If you have \_JAVA\_OPTIONS
set globally this will take precedence\.
For example run it with \"je \-Xms512m \-Xmx1g\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/je-suite.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/je-suite/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/je-suite/README.html
.. |downloads| image:: https://anaconda.org/bioconda/je-suite/badges/downloads.svg
               :target: https://anaconda.org/bioconda/je-suite
.. |docker| image:: https://quay.io/repository/biocontainers/je-suite/status
                :target: https://quay.io/repository/biocontainers/je-suite

