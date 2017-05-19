.. _`weeder`:

weeder
======

|downloads|

Motif (transcription factor binding sites) discovery in sequences from coregulated genes of a single species. This is a new Weeder release rewritten to be faster and optimized for large ChIP-Seq data.

======== ===========
Home     http://159.149.160.51/modtools/
Versions 2.0
License  GPL3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/weeder
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install weeder

and update with::

   conda update weeder

Notes
-----

Includes a simple wrapper script to be able to run weeder from any directory. It passes arguments transparently to the weeder2 executable.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/weeder.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/weeder/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/weeder/README.html
.. |downloads| image:: https://anaconda.org/bioconda/weeder/badges/downloads.svg
               :target: https://anaconda.org/bioconda/weeder
.. |docker| image:: https://quay.io/repository/biocontainers/weeder/status
                :target: https://quay.io/repository/biocontainers/weeder


