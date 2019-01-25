.. _`lightassembler`:

lightassembler
==============

|downloads|

Lightweight assembly algorithm designed to be executed on a desktop machine. It uses a pair of cache oblivious Bloom filters\, one holding a uniform sample of g\-spaced sequenced k\-mers and the other holding k\-mers classified as likely correct\, using a simple statistical test.

============= ===========
Home          https://github.com/SaraEl-Metwally/LightAssembler
Versions      1.0
License       GPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/lightassembler/meta.yaml



Links         biotools: :biotools:`LightAssembler`, doi: :doi:`10.1093/bioinformatics/btw470`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install lightassembler

and update with::

   conda update lightassembler



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/lightassembler.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/lightassembler/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/lightassembler/README.html
.. |downloads| image:: https://anaconda.org/bioconda/lightassembler/badges/downloads.svg
               :target: https://anaconda.org/bioconda/lightassembler
.. |docker| image:: https://quay.io/repository/biocontainers/lightassembler/status
                :target: https://quay.io/repository/biocontainers/lightassembler

