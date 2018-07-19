.. _`illumina-interop`:

illumina-interop
================

|downloads|

The Illumina InterOp libraries are a set of common routines used for reading and writing InterOp metric files. These metric files are binary files produced during a run providing detailed statistics about a run. In a few cases\, the metric files are produced after a run during secondary analysis \(index metrics\) or for faster display of a subset of the original data \(collapsed quality scores\).

============= ===========
Home          http://illumina.github.io/interop/index.html
Versions      1.0.25, 1.1.4
License       GPL-3.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-interop


Development   https://github.com/Illumina/interop


============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install illumina-interop

and update with::

   conda update illumina-interop



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/illumina-interop.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/illumina-interop/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/illumina-interop/README.html
.. |downloads| image:: https://anaconda.org/bioconda/illumina-interop/badges/downloads.svg
               :target: https://anaconda.org/bioconda/illumina-interop
.. |docker| image:: https://quay.io/repository/biocontainers/illumina-interop/status
                :target: https://quay.io/repository/biocontainers/illumina-interop

