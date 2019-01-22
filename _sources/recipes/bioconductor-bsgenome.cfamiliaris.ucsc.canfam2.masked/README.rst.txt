.. _`bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked`:

bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked
=====================================================

|downloads|

Full genome sequences for Canis lupus familiaris \(Dog\) as provided by UCSC \(canFam2\, May 2005\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Cfamiliaris.UCSC.canFam2\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/annotation/html/BSgenome.Cfamiliaris.UCSC.canFam2.masked.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked

and update with::

   conda update bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.cfamiliaris.ucsc.canfam2.masked

