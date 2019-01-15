.. _`ensembl-vep`:

ensembl-vep
===========

|downloads|

The VEP determines the effect of your variants \(SNPs\, insertions\, deletions\, CNVs or structural variants\) on genes\, transcripts\, and protein sequence\, as well as regulatory regions.

============= ===========
Home          http://www.ensembl.org/info/docs/tools/vep/index.html
Versions      95.0, 94.5, 94.4, 94.0, 93.4, 93.2, 92.4, 92.3, 92.0, 91.3, 91.2, 91.1, 91.0, 90.10, 90.9, 90.7, 90.6, 90.5, 90.3, 90.1, 89.7, 89.4, 89.1, 88.10, 88.9, 88.8, 88
License       Apache 2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-vep



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install ensembl-vep

and update with::

   conda update ensembl-vep


Notes
-----
This package installs only the variant effect predictor \(VEP\) library
code. To install data libraries\, you can use the \'vep\_install\' command
installed along with it. For example\, to install the VEP library for human
GRCh38 to a directory

vep\_install \-a cf \-s homo\_sapiens \-y GRCh38 \-c \/output\/path\/to\/GRCh38\/vep \-\-CONVERT

\(note that vep\_install is renamed from INSTALL.pl
 to avoid having generic script names in the PATH\)

The \-\-CONVERT flag is not required but improves lookup speeds during
runs. See the VEP documentation for more details

http\:\/\/www.ensembl.org\/info\/docs\/tools\/vep\/script\/vep\_cache.html



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/ensembl-vep.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/ensembl-vep/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/ensembl-vep/README.html
.. |downloads| image:: https://anaconda.org/bioconda/ensembl-vep/badges/downloads.svg
               :target: https://anaconda.org/bioconda/ensembl-vep
.. |docker| image:: https://quay.io/repository/biocontainers/ensembl-vep/status
                :target: https://quay.io/repository/biocontainers/ensembl-vep

