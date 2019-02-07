.. title:: Package Recipe 'perl-specio'
.. highlight: bash


perl-specio
===========

.. conda:recipe:: perl-specio
   :replaces_section_title:

   Type constraints and coercions for Perl

   :homepage: http://metacpan.org/release/Specio
   :license: artistic_2
   :recipe: /`perl-specio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-specio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-specio/meta.yaml>`_

   


.. conda:package:: perl-specio

   |downloads_perl-specio| |docker_perl-specio|

   :versions: 0.43, 0.42

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-devel-stacktrace`  :conda:package:`perl-eval-closure`  :conda:package:`perl-exporter`  :conda:package:`perl-module-runtime`  :conda:package:`perl-mro-compat`  :conda:package:`perl-parent`  :conda:package:`perl-role-tiny`  :conda:package:`perl-storable`  :conda:package:`perl-sub-quote`  :conda:package:`perl-test-fatal`  :conda:package:`perl-try-tiny`  :conda:package:`perl-version`  

   :required~by: |required_by_perl-specio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-specio

   and update with::

      conda update perl-specio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-specio


.. |required_by_perl-specio| conda:required_by:: perl-specio
.. |downloads_perl-specio| image:: https://img.shields.io/conda/dn/bioconda/perl-specio.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-specio| image:: https://quay.io/repository/biocontainers/perl-specio/status
   :target: https://quay.io/repository/biocontainers/perl-specio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-specio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-specio/README.html

