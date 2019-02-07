.. title:: Package Recipe 'perl-bio-asn1-entrezgene'
.. highlight: bash


perl-bio-asn1-entrezgene
========================

.. conda:recipe:: perl-bio-asn1-entrezgene
   :replaces_section_title:

   Regular expression\-based Perl Parser for NCBI Entrez Gene

   :homepage: http://search.cpan.org/dist/Bio-ASN1-EntrezGene
   :license: perl_5
   :recipe: /`perl-bio-asn1-entrezgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-asn1-entrezgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-asn1-entrezgene/meta.yaml>`_

   


.. conda:package:: perl-bio-asn1-entrezgene

   |downloads_perl-bio-asn1-entrezgene| |docker_perl-bio-asn1-entrezgene|

   :versions: 1.73, 1.72, 1.70

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-bioperl-core`  :conda:package:`perl-carp`  :conda:package:`perl-data-dumper`  :conda:package:`perl-parent`  :conda:package:`perl-test-most`  

   :required~by: |required_by_perl-bio-asn1-entrezgene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-asn1-entrezgene

   and update with::

      conda update perl-bio-asn1-entrezgene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-asn1-entrezgene


.. |required_by_perl-bio-asn1-entrezgene| conda:required_by:: perl-bio-asn1-entrezgene
.. |downloads_perl-bio-asn1-entrezgene| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-asn1-entrezgene.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-asn1-entrezgene| image:: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene/status
   :target: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-asn1-entrezgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-asn1-entrezgene/README.html

