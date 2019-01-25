.. _`break-point-inspector`:

break-point-inspector
=====================

|downloads|

BPI uses Manta’s variant calls to re\-analyse BAM files and precisely determine the location of the breaks\, and applies a set of filters to remove false positives\, thereby increasing the accuracy of Manta’s calls.

============= ===========
Home          https://github.com/hartwigmedical/hmftools/tree/master/break-point-inspector
Versions      1.5
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/break-point-inspector/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install break-point-inspector

and update with::

   conda update break-point-inspector



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/break-point-inspector.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/break-point-inspector/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/break-point-inspector/README.html
.. |downloads| image:: https://anaconda.org/bioconda/break-point-inspector/badges/downloads.svg
               :target: https://anaconda.org/bioconda/break-point-inspector
.. |docker| image:: https://quay.io/repository/biocontainers/break-point-inspector/status
                :target: https://quay.io/repository/biocontainers/break-point-inspector

