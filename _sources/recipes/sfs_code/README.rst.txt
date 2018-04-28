.. _`sfs_code`:

sfs_code
========

|downloads|

This article introduces a new forward population genetic simulation program that can efficiently generate samples from populations with complex demographic histories under various models of natural selection. The program \(SFS\_CODE\) is highly flexible\, allowing the user to simulate realistic genomic regions with several loci evolving according to a variety of mutation models \(from simple to context\-dependent\)\, and allows for insertions and deletions. Each locus can be annotated as either coding or non\-coding\, sex\-linked or autosomal\, selected or neutral\, and have an arbitrary linkage structure \(from completely linked to independent\). © The Author 2008. Published by Oxford University Press. All rights reserved.

============= ===========
Home          http://sfscode.sourceforge.net/SFS_CODE/index/index.html
Versions      20150910
License       file
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs_code



Links         biotools: :biotools:`sfs_code`, doi: :doi:`10.1093/bioinformatics/btn522`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install sfs_code

and update with::

   conda update sfs_code



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/sfs_code.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/sfs_code/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/sfs_code/README.html
.. |downloads| image:: https://anaconda.org/bioconda/sfs_code/badges/downloads.svg
               :target: https://anaconda.org/bioconda/sfs_code
.. |docker| image:: https://quay.io/repository/biocontainers/sfs_code/status
                :target: https://quay.io/repository/biocontainers/sfs_code

