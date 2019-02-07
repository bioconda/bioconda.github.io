.. title:: Package Recipe 'perl-lwp-simple'
.. highlight: bash


perl-lwp-simple
===============

.. conda:recipe:: perl-lwp-simple
   :replaces_section_title:

   simple procedural interface to LWP

   :homepage: https://metacpan.org/pod/LWP::Simple
   :license: Perl
   :recipe: /`perl-lwp-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-simple/meta.yaml>`_

   


.. conda:package:: perl-lwp-simple

   |downloads_perl-lwp-simple| |docker_perl-lwp-simple|

   :versions: 6.15

   :depends: :conda:package:`perl-encode-locale`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-lwp-simple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-lwp-simple

   and update with::

      conda update perl-lwp-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-lwp-simple


.. |required_by_perl-lwp-simple| conda:required_by:: perl-lwp-simple
.. |downloads_perl-lwp-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-lwp-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-lwp-simple| image:: https://quay.io/repository/biocontainers/perl-lwp-simple/status
   :target: https://quay.io/repository/biocontainers/perl-lwp-simple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lwp-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lwp-simple/README.html

