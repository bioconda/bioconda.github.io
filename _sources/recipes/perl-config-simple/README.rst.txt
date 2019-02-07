.. title:: Package Recipe 'perl-config-simple'
.. highlight: bash


perl-config-simple
==================

.. conda:recipe:: perl-config-simple
   :replaces_section_title:

   simple configuration file class

   :homepage: http://metacpan.org/pod/Config::Simple
   :license: unknown
   :recipe: /`perl-config-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-simple/meta.yaml>`_

   


.. conda:package:: perl-config-simple

   |downloads_perl-config-simple| |docker_perl-config-simple|

   :versions: 4.58

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-config-simple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-config-simple

   and update with::

      conda update perl-config-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-config-simple


.. |required_by_perl-config-simple| conda:required_by:: perl-config-simple
.. |downloads_perl-config-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-config-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-config-simple| image:: https://quay.io/repository/biocontainers/perl-config-simple/status
   :target: https://quay.io/repository/biocontainers/perl-config-simple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-simple/README.html

