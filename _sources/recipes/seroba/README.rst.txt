.. _`seroba`:

seroba
======

|downloads|

SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references.

============= ===========
Home          https://github.com/sanger-pathogens/seroba
Versions      1.0.0
License       GPL3.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba



============= ===========

SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references.
You can use SeroBA to download references from \(https\:\/\/github.com\/phe\-bioinformatics\/PneumoCaT\)
to do identify the capsular type of Streptococcus pneumoniae.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install seroba

and update with::

   conda update seroba



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/seroba.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/seroba/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/seroba/README.html
.. |downloads| image:: https://anaconda.org/bioconda/seroba/badges/downloads.svg
               :target: https://anaconda.org/bioconda/seroba
.. |docker| image:: https://quay.io/repository/biocontainers/seroba/status
                :target: https://quay.io/repository/biocontainers/seroba

