.. title:: Package Recipe 'perl-bio-db-hts'
.. highlight: bash


perl-bio-db-hts
===============

.. conda:recipe:: perl-bio-db-hts
   :replaces_section_title:

   Read files using HTSlib including BAM\/CRAM\, Tabix and BCF database files

   :homepage: https://metacpan.org/pod/Bio::DB::HTS
   :license: Apache v2.0
   :recipe: /`perl-bio-db-hts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-hts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-hts/meta.yaml>`_

   


.. conda:package:: perl-bio-db-hts

   |downloads_perl-bio-db-hts| |docker_perl-bio-db-hts|

   :versions: 2.7, 2.4

   :depends: :conda:package:`htslib` 1.4* :conda:package:`perl` 5.22.0* :conda:package:`perl-bioperl`  :conda:package:`zlib`  

   :required~by: |required_by_perl-bio-db-hts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-db-hts

   and update with::

      conda update perl-bio-db-hts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-db-hts


.. |required_by_perl-bio-db-hts| conda:required_by:: perl-bio-db-hts
.. |downloads_perl-bio-db-hts| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-db-hts.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-db-hts| image:: https://quay.io/repository/biocontainers/perl-bio-db-hts/status
   :target: https://quay.io/repository/biocontainers/perl-bio-db-hts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-db-hts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-db-hts/README.html

