.. _`ucsc-estorient`:

ucsc-estorient
==============

|downloads|

 Read ESTs from a database and determine orientation based on estOrientInfo table or direction in gbCdnaInfo table.  Update PSLs so that the strand reflects the direction of transcription. By default, PSLs where the direction can't be determined are dropped. 

======== ===========
Home     http://hgdownload.cse.ucsc.edu/admin/exe/
Versions 332
License  varies; see http://genome.ucsc.edu/license
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-estorient
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install ucsc-estorient

and update with::

   conda update ucsc-estorient



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/ucsc-estorient.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/ucsc-estorient/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/ucsc-estorient/README.html
.. |downloads| image:: https://anaconda.org/bioconda/ucsc-estorient/badges/downloads.svg
               :target: https://anaconda.org/bioconda/ucsc-estorient
.. |docker| image:: https://quay.io/repository/biocontainers/ucsc-estorient/status
                :target: https://quay.io/repository/biocontainers/ucsc-estorient


