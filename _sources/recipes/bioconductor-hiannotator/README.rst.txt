.. _`bioconductor-hiannotator`:

bioconductor-hiannotator
========================

|downloads|

hiAnnotator contains set of functions which allow users to annotate a GRanges object with custom set of annotations. The basic philosophy of this package is to take two GRanges objects \(query \& subject\) with common set of seqnames \(i.e. chromosomes\) and return associated annotation per seqnames and rows from the query matching seqnames and rows from the subject \(i.e. genes or cpg islands\). The package comes with three types of annotation functions which calculates if a position from query is\: within a feature\, near a feature\, or count features in defined window sizes. Moreover\, each function is equipped with parallel backend to utilize the foreach package. In addition\, the package is equipped with wrapper functions\, which finds appropriate columns needed to make a GRanges object from a common data frame.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/hiAnnotator.html
Versions      1.14.0, 1.11.1
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-hiannotator/meta.yaml



Links         biotools: :biotools:`hiannotator`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hiannotator

and update with::

   conda update bioconductor-hiannotator



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hiannotator.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hiannotator/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hiannotator
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hiannotator/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hiannotator

