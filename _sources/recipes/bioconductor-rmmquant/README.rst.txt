.. _`bioconductor-rmmquant`:

bioconductor-rmmquant
=====================

|downloads|

RNA\-Seq is currently used routinely\, and it provides accurate information on gene transcription. However\, the method cannot accurately estimate duplicated genes expression. Several strategies have been previously used\, but all of them provide biased results. With Rmmquant\, if a read maps at different positions\, the tool detects that the corresponding genes are duplicated\; it merges the genes and creates a merged gene. The counts of ambiguous reads is then based on the input genes and the merged genes. Rmmquant is a drop\-in replacement of the widely used tools findOverlaps and featureCounts that handles multi\-mapping reads in an unabiased way.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/Rmmquant.html
Versions      1.0.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-rmmquant/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rmmquant

and update with::

   conda update bioconductor-rmmquant



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rmmquant.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rmmquant/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rmmquant/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rmmquant/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rmmquant
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rmmquant/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rmmquant

