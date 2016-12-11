.. _`peptide-shaker`:

peptide-shaker
==============

|downloads|

PeptideShaker is a search engine independent platform for interpretation of proteomics identification results from multiple search engines,
currently supporting X!Tandem, MS-GF+, MS Amanda, OMSSA, MyriMatch, Comet, Tide, Mascot, Andromeda and mzIdentML.
By combining the results from multiple search engines, while re-calculating PTM localization scores and redoing the protein inference,
PeptideShaker attempts to give you the best possible understanding of your proteomics data!


======== ===========
Home     https://github.com/compomics/peptide-shaker
Versions 1.1.3, 1.11.0, 1.13.3, 1.13.6
License  Apache License, Version 2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptide-shaker
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install peptide-shaker

and update with::

   conda update peptide-shaker

Notes
-----

PeptideShaker is Java program that comes with a custom wrapper shell script.
This shell wrapper is called "opsin" and is on $PATH by default. By default
"-Xms512m -Xmx1g" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have _JAVA_OPTIONS
set globally this will take precedence.
For example run it with "peptide-shaker -Xms512m -Xmx1g"


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/peptide-shaker.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/peptide-shaker/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/peptide-shaker/README.html
.. |downloads| image:: https://anaconda.org/bioconda/peptide-shaker/badges/downloads.svg
               :target: https://anaconda.org/bioconda/peptide-shaker
.. |docker| image:: https://quay.io/repository/biocontainers/peptide-shaker/status
                :target: https://quay.io/repository/biocontainers/peptide-shaker


