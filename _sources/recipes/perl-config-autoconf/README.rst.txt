.. title:: Package Recipe 'perl-config-autoconf'
.. highlight: bash


perl-config-autoconf
====================

.. conda:recipe:: perl-config-autoconf
   :replaces_section_title:

   A module to implement some of AutoConf macros in pure perl.

   :homepage: https://metacpan.org/release/Config-AutoConf
   :license: perl_5
   :recipe: /`perl-config-autoconf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf/meta.yaml>`_

   


.. conda:package:: perl-config-autoconf

   |downloads_perl-config-autoconf| |docker_perl-config-autoconf|

   :versions: 0.317, 0.311

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-capture-tiny`  :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-file-temp`  :conda:package:`perl-text-parsewords`  

   :required~by: |required_by_perl-config-autoconf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-config-autoconf

   and update with::

      conda update perl-config-autoconf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-config-autoconf


.. |required_by_perl-config-autoconf| conda:required_by:: perl-config-autoconf
.. |downloads_perl-config-autoconf| image:: https://img.shields.io/conda/dn/bioconda/perl-config-autoconf.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-config-autoconf| image:: https://quay.io/repository/biocontainers/perl-config-autoconf/status
   :target: https://quay.io/repository/biocontainers/perl-config-autoconf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-autoconf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-autoconf/README.html

