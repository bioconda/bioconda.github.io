.. _`snver`:

snver
=====

|downloads|

SNVer is a statistical tool for calling common and rare variants in analysis of pool or individual next\-generation sequencing data.
It reports one single overall p\-value for evaluating the significance of a candidate locus being a variant\, based on which multiplicity control can be obtained.
Loci with any \(low\) coverage can be tested and depth of coverage will be quantitatively factored into final significance calculation.
SNVer runs very fast\, making it feasible for analysis of whole\-exome sequencing data\, or even whole\-genome sequencing data.


============= ===========
Home          http://snver.sourceforge.net/
Versions      0.5.3
License       GNU General Public License version 3.0 (GPLv3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/snver/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install snver

and update with::

   conda update snver


Notes
-----
SNVer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"snver \-Xms512m \-Xmx1g\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/snver.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/snver/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/snver/README.html
.. |downloads| image:: https://anaconda.org/bioconda/snver/badges/downloads.svg
               :target: https://anaconda.org/bioconda/snver
.. |docker| image:: https://quay.io/repository/biocontainers/snver/status
                :target: https://quay.io/repository/biocontainers/snver

