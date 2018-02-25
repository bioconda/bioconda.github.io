.. _`bioconductor-crisprseek`:

bioconductor-crisprseek
=======================

|downloads|

The package includes functions to find potential guide RNAs for input target sequences\, optionally filter guide RNAs without restriction enzyme cut site\, or without paired guide RNAs\, genome\-wide search for off\-targets\, score\, rank\, fetch flank sequence and indicate whether the target and off\-targets are located in exon region or not\. Potential guide RNAs are annotated with total score of the top5 and topN off\-targets\, detailed topN mismatch sites\, restriction enzyme cut sites\, and paired guide RNAs\. If GeneRfold and GeneR are installed \(http\:\/\/bioconductor\.case\.edu\/bioconductor\/2\.8\/bioc\/html\/GeneRfold\.html\, http\:\/\/bioc\.ism\.ac\.jp\/packages\/2\.8\/bioc\/html\/GeneR\.html\)\, then the minimum free energy and bracket notation of secondary structure of gRNA and gRNA backbone constant region will be included in the summary file\. This package leverages Biostrings and BSgenome packages\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/CRISPRseek.html
Versions      1.18.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-crisprseek

and update with::

   conda update bioconductor-crisprseek



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-crisprseek.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-crisprseek/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-crisprseek
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-crisprseek/status
                :target: https://quay.io/repository/biocontainers/bioconductor-crisprseek

