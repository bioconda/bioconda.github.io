.. title:: Package Recipe 'ensembl-vep'
.. highlight: bash


ensembl-vep
===========

.. conda:recipe:: ensembl-vep
   :replaces_section_title:

   The VEP determines the effect of your variants \(SNPs\, insertions\, deletions\, CNVs or structural variants\) on genes\, transcripts\, and protein sequence\, as well as regulatory regions.

   :homepage: http://www.ensembl.org/info/docs/tools/vep/index.html
   :license: Apache 2.0
   :recipe: /`ensembl-vep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-vep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-vep/meta.yaml>`_

   


.. conda:package:: ensembl-vep

   |downloads_ensembl-vep| |docker_ensembl-vep|

   :versions: 95.1, 95.0, 94.5, 94.4, 94.0, 93.4, 93.2, 92.4, 92.3, 92.0, 91.3, 91.2, 91.1, 91.0, 90.10, 90.9, 90.7, 90.6, 90.5, 90.3, 90.1, 89.7, 89.4, 89.1, 88.10, 88.9, 88.8, 88

   :depends: :conda:package:`htslib`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bio-db-hts` >=2.7 :conda:package:`perl-bioperl` >=1.7.2 :conda:package:`perl-dbd-mysql`  :conda:package:`perl-dbi`  :conda:package:`perl-io-compress`  :conda:package:`perl-json`  :conda:package:`perl-perlio-gzip`  :conda:package:`perl-sereal`  :conda:package:`perl-set-intervaltree`  :conda:package:`perl-text-csv`  :conda:package:`unzip`  

   :required~by: |required_by_ensembl-vep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ensembl-vep

   and update with::

      conda update ensembl-vep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ensembl-vep


.. |required_by_ensembl-vep| conda:required_by:: ensembl-vep
.. |downloads_ensembl-vep| image:: https://img.shields.io/conda/dn/bioconda/ensembl-vep.svg?style=flat
   :alt:   (downloads)
.. |docker_ensembl-vep| image:: https://quay.io/repository/biocontainers/ensembl-vep/status
   :target: https://quay.io/repository/biocontainers/ensembl-vep






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


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ensembl-vep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ensembl-vep/README.html

