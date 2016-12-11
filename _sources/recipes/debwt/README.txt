.. _`debwt`:

debwt
=====

|downloads|

A efficient method to construct BWT index of a given DNA sequence, especially
useful for gigantic and high similar genome.
DeBWT has good scalability to construct BWT in parallel computing.
It is well-suited to run on multiple core servers or clusters to
construct the BWT of large collections of genome sequences.


======== ===========
Home     https://github.com/DixianZhu/deBWT
Versions 1.0.1
License  Unknown
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debwt
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install debwt

and update with::

   conda update debwt



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/debwt.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/debwt/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/debwt/README.html
.. |downloads| image:: https://anaconda.org/bioconda/debwt/badges/downloads.svg
               :target: https://anaconda.org/bioconda/debwt
.. |docker| image:: https://quay.io/repository/biocontainers/debwt/status
                :target: https://quay.io/repository/biocontainers/debwt


