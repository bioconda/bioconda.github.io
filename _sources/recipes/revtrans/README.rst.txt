.. _`revtrans`:

revtrans
========

|downloads|

revtrans \- performs a reverse translation of a peptide alignment.

============= ===========
Home          http://www.cbs.dtu.dk/services/RevTrans-2.0/web/download.php
Versions      1.4
License       GPLv2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/revtrans/meta.yaml



Links         biotools: :biotools:`revtrans`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install revtrans

and update with::

   conda update revtrans


Notes
-----
This package includes a modified version of the program named \'revtrans\_jarmo.py\' that works with peptide fragments instead of full length sequences.


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/revtrans.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/revtrans/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/revtrans/README.html
.. |downloads| image:: https://anaconda.org/bioconda/revtrans/badges/downloads.svg
               :target: https://anaconda.org/bioconda/revtrans
.. |docker| image:: https://quay.io/repository/biocontainers/revtrans/status
                :target: https://quay.io/repository/biocontainers/revtrans

