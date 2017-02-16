.. _`r-digest`:

r-digest
========

|downloads|

Implementation of a function 'digest()' for the creation  of hash digests of arbitrary R objects (using the md5, sha-1, sha-256,  crc32, xxhash and murmurhash algorithms) permitting easy comparison of R language objects, as well as a function 'hmac()' to create hash-based message authentication code. . The md5 algorithm by Ron Rivest is specified in RFC 1321, the sha-1  and sha-256 algorithms are specified in FIPS-180-1 and FIPS-180-2,  and the crc32 algorithm is described in  ftp://ftp.rocksoft.com/cliens/rocksoft/papers/crc_v3.txt. . For md5, sha-1, sha-256 and aes, this package uses small standalone implementations that were provided by Christophe Devine. For crc32, code from the zlib library is used. For sha-512, an implementation by Aaron D. Gifford is used. For xxhash, the implementation by Yann Collet is used. For murmurhash, an implementation by Shane Day is used. . Please note that this package is not meant to be deployed for  cryptographic purposes for which more comprehensive (and widely  tested) libraries such as OpenSSL should be used.

======== ===========
Home     http://dirk.eddelbuettel.com/code/digest.html
Versions 0.6.9
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-digest
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-digest

and update with::

   conda update r-digest



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-digest.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-digest/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-digest/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-digest/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-digest
.. |docker| image:: https://quay.io/repository/biocontainers/r-digest/status
                :target: https://quay.io/repository/biocontainers/r-digest


