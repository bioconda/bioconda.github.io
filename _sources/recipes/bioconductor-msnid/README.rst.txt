.. _`bioconductor-msnid`:

bioconductor-msnid
==================

|downloads|

Extracts MS\/MS ID data from mzIdentML \(leveraging mzID package\) or text files. After collating the search results from multiple datasets it assesses their identification quality and optimize filtering criteria to achieve the maximum number of identifications while not exceeding a specified false discovery rate. Also contains a number of utilities to explore the MS\/MS results and assess missed and irregular enzymatic cleavages\, mass measurement accuracy\, etc.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/MSnID.html
Versions      1.16.1, 1.12.1
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-msnid/meta.yaml



Links         biotools: :biotools:`msnid`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-msnid

and update with::

   conda update bioconductor-msnid



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-msnid.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-msnid/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-msnid/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-msnid/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-msnid
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-msnid/status
                :target: https://quay.io/repository/biocontainers/bioconductor-msnid

