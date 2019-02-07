.. title:: Package Recipe 'perl-test-sys-info'
.. highlight: bash


perl-test-sys-info
==================

.. conda:recipe:: perl-test-sys-info
   :replaces_section_title:

   Centralized test suite for Sys\:\:Info.

   :homepage: http://metacpan.org/pod/Test::Sys::Info
   :license: perl_5
   :recipe: /`perl-test-sys-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-sys-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-sys-info/meta.yaml>`_

   


.. conda:package:: perl-test-sys-info

   |downloads_perl-test-sys-info| |docker_perl-test-sys-info|

   :versions: 0.23, 0.21

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-exporter`  

   :required~by: |required_by_perl-test-sys-info|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-sys-info

   and update with::

      conda update perl-test-sys-info

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-sys-info


.. |required_by_perl-test-sys-info| conda:required_by:: perl-test-sys-info
.. |downloads_perl-test-sys-info| image:: https://img.shields.io/conda/dn/bioconda/perl-test-sys-info.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-sys-info| image:: https://quay.io/repository/biocontainers/perl-test-sys-info/status
   :target: https://quay.io/repository/biocontainers/perl-test-sys-info







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-sys-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-sys-info/README.html

