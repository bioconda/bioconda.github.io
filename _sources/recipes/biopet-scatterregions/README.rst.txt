.. _`biopet-scatterregions`:

biopet-scatterregions
=====================

|downloads|

This tool breaks a reference or bed file into smaller scatter regions of equal size.

============= ===========
Home          https://github.com/biopet/scatterregions
Versions      0.2, 0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/biopet-scatterregions/meta.yaml



============= ===========

This tool breaks a reference or bed file into smaller scatter regions of equal size. This can be used for processing inside a pipeline.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/scatterregions


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-scatterregions

and update with::

   conda update biopet-scatterregions


Notes
-----
biopet\-scatterregions is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-scatterregions\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-scatterregions \-Xms512m \-Xmx1g\'.



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-scatterregions.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-scatterregions/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-scatterregions/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-scatterregions/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-scatterregions
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-scatterregions/status
                :target: https://quay.io/repository/biocontainers/biopet-scatterregions

