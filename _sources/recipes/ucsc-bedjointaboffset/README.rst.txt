.. _`ucsc-bedjointaboffset`:

ucsc-bedjointaboffset
=====================

|downloads|

given a bed file and tab file where each have a column with matching values\: first get the value of column0\, the offset and line length from inTabFile. Then go over the bed file\, use the name field and append its offset and length to the bed file as two separate fields. Write the new bed file to outBed.

============= ===========
Home          http://hgdownload.cse.ucsc.edu/admin/exe/
Versions      366
License       varies; see http://genome.ucsc.edu/license
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/ucsc-bedjointaboffset/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install ucsc-bedjointaboffset

and update with::

   conda update ucsc-bedjointaboffset



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/ucsc-bedjointaboffset.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html
.. |downloads| image:: https://anaconda.org/bioconda/ucsc-bedjointaboffset/badges/downloads.svg
               :target: https://anaconda.org/bioconda/ucsc-bedjointaboffset
.. |docker| image:: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset/status
                :target: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset

