.. _`bioconductor-dmrcaller`:

bioconductor-dmrcaller
======================

|downloads|

Uses Bisulfite sequencing data in two conditions and identifies differentially methylated regions between the conditions in CG and non\-CG context. The input is the CX report files produced by Bismark and the output is a list of DMRs stored as GRanges objects.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DMRcaller.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-dmrcaller/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dmrcaller

and update with::

   conda update bioconductor-dmrcaller



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dmrcaller.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dmrcaller/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dmrcaller/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dmrcaller/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dmrcaller
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dmrcaller/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dmrcaller

