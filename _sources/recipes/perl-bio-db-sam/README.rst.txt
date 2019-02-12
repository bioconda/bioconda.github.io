:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-db-sam'
.. highlight: bash

perl-bio-db-sam
===============

.. conda:recipe:: perl-bio-db-sam
   :replaces_section_title:

   Read SAM\/BAM database files

   :homepage: https://metacpan.org/pod/Bio::DB::Sam
   :license: Perl
   :recipe: /`perl-bio-db-sam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-sam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-sam/meta.yaml>`_

   


.. conda:package:: perl-bio-db-sam

   |downloads_perl-bio-db-sam| |docker_perl-bio-db-sam|

   :versions: 1.41-2, 1.41-1, 1.41-0
   
   :depends libgcc: 
   
   :depends perl-bioperl: 
   
   :depends perl-threaded: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-db-sam

   and update with::

      conda update perl-bio-db-sam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-db-sam:<tag>

   (see `perl-bio-db-sam/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-db-sam| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-db-sam.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-db-sam| image:: https://quay.io/repository/biocontainers/perl-bio-db-sam/status
   :target: https://quay.io/repository/biocontainers/perl-bio-db-sam
.. _`perl-bio-db-sam/tags`: https://quay.io/repository/biocontainers/perl-bio-db-sam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-db-sam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-db-sam/README.html