:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-gff3'
.. highlight: bash

perl-bio-gff3
=============

.. conda:recipe:: perl-bio-gff3
   :replaces_section_title:

   fast\, low\-level GFF3 manipulation

   :homepage: http://metacpan.org/release/Bio-GFF3
   :license: perl_5
   :recipe: /`perl-bio-gff3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-gff3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-gff3/meta.yaml>`_

   


.. conda:package:: perl-bio-gff3

   |downloads_perl-bio-gff3| |docker_perl-bio-gff3|

   :versions: 2.0-1, 2.0-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-extutils-makemaker: 
   
   :depends perl-file-readbackwards: 
   
   :depends perl-io-string: 
   
   :depends perl-list-moreutils: 
   
   :depends perl-pathtools: 
   
   :depends perl-scalar-list-utils: 
   
   :depends perl-test-simple: 
   
   :depends perl-uri: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-gff3

   and update with::

      conda update perl-bio-gff3

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-gff3:<tag>

   (see `perl-bio-gff3/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-gff3| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-gff3.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-gff3| image:: https://quay.io/repository/biocontainers/perl-bio-gff3/status
   :target: https://quay.io/repository/biocontainers/perl-bio-gff3
.. _`perl-bio-gff3/tags`: https://quay.io/repository/biocontainers/perl-bio-gff3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-gff3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-gff3/README.html