.. _`ucsc-overlapselect`:

ucsc-overlapselect
==================

|downloads|

 Select records based on overlapping chromosome ranges.  The ranges are specified in the selectFile\, with each block specifying a range. Records are copied from the inFile to outFile based on the selection criteria.  Selection is based on blocks or exons rather than entire range. 

============= ===========
Home          http://hgdownload.cse.ucsc.edu/admin/exe/
Versions      366, 357
License       varies; see http://genome.ucsc.edu/license
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//ucsc-overlapselect/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install ucsc-overlapselect

and update with::

   conda update ucsc-overlapselect



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/ucsc-overlapselect.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/ucsc-overlapselect/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/ucsc-overlapselect/README.html
.. |downloads| image:: https://anaconda.org/bioconda/ucsc-overlapselect/badges/downloads.svg
               :target: https://anaconda.org/bioconda/ucsc-overlapselect
.. |docker| image:: https://quay.io/repository/biocontainers/ucsc-overlapselect/status
                :target: https://quay.io/repository/biocontainers/ucsc-overlapselect

