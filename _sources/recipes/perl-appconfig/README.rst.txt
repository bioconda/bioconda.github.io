.. title:: Package Recipe 'perl-appconfig'
.. highlight: bash


perl-appconfig
==============

.. conda:recipe:: perl-appconfig
   :replaces_section_title:

   AppConfig is a bundle of Perl5 modules for reading configuration files and parsing command line arguments.

   :homepage: http://metacpan.org/pod/AppConfig
   :license: perl_5
   :recipe: /`perl-appconfig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-appconfig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-appconfig/meta.yaml>`_

   


.. conda:package:: perl-appconfig

   |downloads_perl-appconfig| |docker_perl-appconfig|

   :versions: 1.71

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-appconfig|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-appconfig

   and update with::

      conda update perl-appconfig

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-appconfig


.. |required_by_perl-appconfig| conda:required_by:: perl-appconfig
.. |downloads_perl-appconfig| image:: https://img.shields.io/conda/dn/bioconda/perl-appconfig.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-appconfig| image:: https://quay.io/repository/biocontainers/perl-appconfig/status
   :target: https://quay.io/repository/biocontainers/perl-appconfig







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-appconfig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-appconfig/README.html

