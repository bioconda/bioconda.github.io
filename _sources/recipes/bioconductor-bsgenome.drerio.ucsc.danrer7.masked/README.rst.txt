.. _`bioconductor-bsgenome.drerio.ucsc.danrer7.masked`:

bioconductor-bsgenome.drerio.ucsc.danrer7.masked
================================================

|downloads|

Full genome sequences for Danio rerio \(Zebrafish\) as provided by UCSC \(danRer7\, Jul. 2010\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Drerio.UCSC.danRer7\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/annotation/html/BSgenome.Drerio.UCSC.danRer7.masked.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-bsgenome.drerio.ucsc.danrer7.masked/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bsgenome.drerio.ucsc.danrer7.masked

and update with::

   conda update bioconductor-bsgenome.drerio.ucsc.danrer7.masked



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bsgenome.drerio.ucsc.danrer7.masked.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bsgenome.drerio.ucsc.danrer7.masked/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.drerio.ucsc.danrer7.masked/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bsgenome.drerio.ucsc.danrer7.masked/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bsgenome.drerio.ucsc.danrer7.masked
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.drerio.ucsc.danrer7.masked/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.drerio.ucsc.danrer7.masked

