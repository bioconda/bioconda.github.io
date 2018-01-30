.. _`filtlong`:

filtlong
========

|downloads|

Filtlong is a tool for filtering long reads. It can take a set of long reads and produce a smaller, better subset. It uses both read length (longer is better) and read identity (higher is better) when choosing which reads pass the filter.

======== ===========
Home     https://github.com/rrwick/Filtlong
Versions 0.1.0, 0.1.1, 0.2.0
License  GPL-3.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/filtlong
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install filtlong

and update with::

   conda update filtlong



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/filtlong.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/filtlong/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/filtlong/README.html
.. |downloads| image:: https://anaconda.org/bioconda/filtlong/badges/downloads.svg
               :target: https://anaconda.org/bioconda/filtlong
.. |docker| image:: https://quay.io/repository/biocontainers/filtlong/status
                :target: https://quay.io/repository/biocontainers/filtlong


