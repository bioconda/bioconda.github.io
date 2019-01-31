.. _`uropa`:

uropa
=====

|downloads|

UROPA \(Universal RObust Peak Annotator\) is a command line based tool\, intended for genomic region annotation from e.g. peak calling.
It detects the most appropriate annotation by taking parameters such as feature type\, anchor\, direction and strand into account.
Furthermore\, it allows filtering for GTF attribute values\, e.g. protein\_coding.


============= ===========
Home          https://github.molgen.mpg.de/loosolab/UROPA
Versions      2.0.3, 2.0.2a0, 2.0.0a0, 1.2.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//uropa/meta.yaml

Documentation http://uropa-manual.readthedocs.io



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install uropa

and update with::

   conda update uropa



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/uropa.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/uropa/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/uropa/README.html
.. |downloads| image:: https://anaconda.org/bioconda/uropa/badges/downloads.svg
               :target: https://anaconda.org/bioconda/uropa
.. |docker| image:: https://quay.io/repository/biocontainers/uropa/status
                :target: https://quay.io/repository/biocontainers/uropa

