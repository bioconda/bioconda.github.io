.. _`indelfixer`:

indelfixer
==========

|downloads|

A sensitive aligner for 454\, Illumina and PacBio data\, employing a full Smith\-Waterman alignment against a reference.

============= ===========
Home          https://github.com/cbg-ethz/InDelFixer
Versions      1.1
License       GNU General Public License v3.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/indelfixer/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install indelfixer

and update with::

   conda update indelfixer


Notes
-----
InDelFixer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"InDelFixer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"InDelFixer \-Xms512m \-Xmx1G\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/indelfixer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/indelfixer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/indelfixer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/indelfixer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/indelfixer
.. |docker| image:: https://quay.io/repository/biocontainers/indelfixer/status
                :target: https://quay.io/repository/biocontainers/indelfixer

