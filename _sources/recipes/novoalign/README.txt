.. _`novoalign`:

novoalign
=========

|downloads|

Powerful tool designed for mapping of short reads onto a reference genome from Illumina, Ion Torrent, and 454 NGS platforms

======== ===========
Home     http://www.novocraft.com/products/novoalign/
Versions 3.03.02, 3.04.04
License  Commercial (requires license for multithreaded use)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoalign
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install novoalign

and update with::

   conda update novoalign

Notes
-----

Novoalign runs in single-threaded mode by default unless a "novoalign.lic" license file is provided in the same directory as its binaries. The license file can be copied in to the conda environment via the "novoalign-license-register" command.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/novoalign.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/novoalign/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/novoalign/README.html
.. |downloads| image:: https://anaconda.org/bioconda/novoalign/badges/downloads.svg
               :target: https://anaconda.org/bioconda/novoalign
.. |docker| image:: https://quay.io/repository/biocontainers/novoalign/status
                :target: https://quay.io/repository/biocontainers/novoalign


