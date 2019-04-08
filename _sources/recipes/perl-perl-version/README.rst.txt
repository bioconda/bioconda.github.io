:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-version'
.. highlight: bash

perl-perl-version
=================

.. conda:recipe:: perl-perl-version
   :replaces_section_title:

   Parse and manipulate Perl version strings

   :homepage: http://metacpan.org/pod/Perl::Version
   :license: perl_5
   :recipe: /`perl-perl-version <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-version>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-version/meta.yaml>`_

   


.. conda:package:: perl-perl-version

   |downloads_perl-perl-version| |docker_perl-perl-version|

   :versions: 1.013-3, 1.013-2, 1.013-1, 1.013-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-file-slurp-tiny: 
   :depends perl-getopt-long: 
   :depends perl-pod-usage: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perl-version

   and update with::

      conda update perl-perl-version

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perl-version:<tag>

   (see `perl-perl-version/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perl-version| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-version.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-perl-version| image:: https://quay.io/repository/biocontainers/perl-perl-version/status
   :target: https://quay.io/repository/biocontainers/perl-perl-version
.. _`perl-perl-version/tags`: https://quay.io/repository/biocontainers/perl-perl-version?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-version/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-version/README.html