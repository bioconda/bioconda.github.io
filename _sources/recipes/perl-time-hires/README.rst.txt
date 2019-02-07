.. title:: Package Recipe 'perl-time-hires'
.. highlight: bash


perl-time-hires
===============

.. conda:recipe:: perl-time-hires
   :replaces_section_title:

   High resolution alarm\, sleep\, gettimeofday\, interval timers

   :homepage: http://metacpan.org/pod/Time::HiRes
   :license: perl_5
   :recipe: /`perl-time-hires <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-hires>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-hires/meta.yaml>`_

   


.. conda:package:: perl-time-hires

   |downloads_perl-time-hires| |docker_perl-time-hires|

   :versions: 1.9758, 1.9728, 1.9726

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-extutils-makemaker`  :conda:package:`perl-xsloader`  

   :required~by: |required_by_perl-time-hires|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-time-hires

   and update with::

      conda update perl-time-hires

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-time-hires


.. |required_by_perl-time-hires| conda:required_by:: perl-time-hires
.. |downloads_perl-time-hires| image:: https://img.shields.io/conda/dn/bioconda/perl-time-hires.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-time-hires| image:: https://quay.io/repository/biocontainers/perl-time-hires/status
   :target: https://quay.io/repository/biocontainers/perl-time-hires







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-hires/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-hires/README.html

