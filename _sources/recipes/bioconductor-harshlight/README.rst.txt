.. _`bioconductor-harshlight`:

bioconductor-harshlight
=======================

|downloads|

The package is used to detect extended\, diffuse and compact blemishes on microarray chips. Harshlight automatically marks the areas in a collection of chips \(affybatch objects\) and a corrected AffyBatch object is returned\, in which the defected areas are substituted with NAs or the median of the values of the same probe in the other chips in the collection. The new version handle the substitute value as whole matrix to solve the memory problem.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/Harshlight.html
Versions      1.52.0, 1.50.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-harshlight/meta.yaml



Links         biotools: :biotools:`harshlight`, doi: :doi:`10.1186/1471-2105-6-294`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-harshlight

and update with::

   conda update bioconductor-harshlight



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-harshlight.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-harshlight/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-harshlight/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-harshlight/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-harshlight
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-harshlight/status
                :target: https://quay.io/repository/biocontainers/bioconductor-harshlight

