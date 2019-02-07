.. title:: Package Recipe 'perl-perl4-corelibs'
.. highlight: bash


perl-perl4-corelibs
===================

.. conda:recipe:: perl-perl4-corelibs/0.004
   :replaces_section_title:

   libraries historically supplied with Perl 4

   :homepage: http://metacpan.org/pod/Perl4-CoreLibs
   :license: GPL / GPL-3.0
   :recipe: /`perl-perl4-corelibs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl4-corelibs>`_/`0.004 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl4-corelibs/0.004>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl4-corelibs/0.004/meta.yaml>`_

   


.. conda:package:: perl-perl4-corelibs

   |downloads_perl-perl4-corelibs| |docker_perl-perl4-corelibs|

   :versions: 0.004

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-getopt-long`  :conda:package:`perl-socket`  :conda:package:`perl-text-parsewords`  :conda:package:`perl-time-local`  

   :required~by: |required_by_perl-perl4-corelibs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perl4-corelibs

   and update with::

      conda update perl-perl4-corelibs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-perl4-corelibs


.. |required_by_perl-perl4-corelibs| conda:required_by:: perl-perl4-corelibs
.. |downloads_perl-perl4-corelibs| image:: https://img.shields.io/conda/dn/bioconda/perl-perl4-corelibs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-perl4-corelibs| image:: https://quay.io/repository/biocontainers/perl-perl4-corelibs/status
   :target: https://quay.io/repository/biocontainers/perl-perl4-corelibs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl4-corelibs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl4-corelibs/README.html

