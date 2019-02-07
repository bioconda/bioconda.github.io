.. title:: Package Recipe 'perl-cpan-meta-check'
.. highlight: bash


perl-cpan-meta-check
====================

.. conda:recipe:: perl-cpan-meta-check
   :replaces_section_title:

   Verify requirements in a CPAN\:\:Meta object

   :homepage: http://metacpan.org/pod/CPAN::Meta::Check
   :license: perl_5
   :recipe: /`perl-cpan-meta-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-check>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-check/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta-check

   |downloads_perl-cpan-meta-check| |docker_perl-cpan-meta-check|

   :versions: 0.014, 0.012

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-cpan-meta-requirements`  :conda:package:`perl-exporter`  :conda:package:`perl-module-metadata`  

   :required~by: |required_by_perl-cpan-meta-check|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cpan-meta-check

   and update with::

      conda update perl-cpan-meta-check

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cpan-meta-check


.. |required_by_perl-cpan-meta-check| conda:required_by:: perl-cpan-meta-check
.. |downloads_perl-cpan-meta-check| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta-check.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cpan-meta-check| image:: https://quay.io/repository/biocontainers/perl-cpan-meta-check/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta-check







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta-check/README.html

