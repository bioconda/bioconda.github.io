.. title:: Package Recipe 'perl-cpan-meta'
.. highlight: bash


perl-cpan-meta
==============

.. conda:recipe:: perl-cpan-meta
   :replaces_section_title:

   the distribution metadata for a CPAN dist

   :homepage: https://github.com/dagolden/cpan-meta
   :license: perl_5
   :recipe: /`perl-cpan-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta

   |downloads_perl-cpan-meta| |docker_perl-cpan-meta|

   :versions: 2.150010, 2.120921

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-cpan-meta-requirements`  :conda:package:`perl-cpan-meta-yaml`  :conda:package:`perl-encode`  :conda:package:`perl-exporter`  :conda:package:`perl-json-pp`  :conda:package:`perl-version`  

   :required~by: |required_by_perl-cpan-meta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cpan-meta

   and update with::

      conda update perl-cpan-meta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cpan-meta


.. |required_by_perl-cpan-meta| conda:required_by:: perl-cpan-meta
.. |downloads_perl-cpan-meta| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cpan-meta| image:: https://quay.io/repository/biocontainers/perl-cpan-meta/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta/README.html

