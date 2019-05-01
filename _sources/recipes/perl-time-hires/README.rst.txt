:orphan:  .. only available via index, not via toctree

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

   :versions: 1.9760-1, 1.9760-0, 1.9758-1, 1.9758-0, 1.9728-5, 1.9728-4, 1.9728-2, 1.9728-1, 1.9728-0, 1.9726-0
   
   :depends libgcc-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-extutils-makemaker: 
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-time-hires

   and update with::

      conda update perl-time-hires

   or use the docker container::

      docker pull quay.io/biocontainers/perl-time-hires:<tag>

   (see `perl-time-hires/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-time-hires| image:: https://img.shields.io/conda/dn/bioconda/perl-time-hires.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-time-hires| image:: https://quay.io/repository/biocontainers/perl-time-hires/status
   :target: https://quay.io/repository/biocontainers/perl-time-hires
.. _`perl-time-hires/tags`: https://quay.io/repository/biocontainers/perl-time-hires?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-hires/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-hires/README.html