:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-nowarnings'
.. highlight: bash

perl-test-nowarnings
====================

.. conda:recipe:: perl-test-nowarnings
   :replaces_section_title:

   Make sure you didn\'t emit any warnings while testing

   :homepage: https://metacpan.org/pod/Test::NoWarnings
   :license: Perl
   :recipe: /`perl-test-nowarnings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-nowarnings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-nowarnings/meta.yaml>`_

   


.. conda:package:: perl-test-nowarnings

   |downloads_perl-test-nowarnings| |docker_perl-test-nowarnings|

   :versions: 1.04-3, 1.04-2, 1.04-1, 1.04-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-nowarnings

   and update with::

      conda update perl-test-nowarnings

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-nowarnings:<tag>

   (see `perl-test-nowarnings/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-nowarnings| image:: https://img.shields.io/conda/dn/bioconda/perl-test-nowarnings.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-nowarnings| image:: https://quay.io/repository/biocontainers/perl-test-nowarnings/status
   :target: https://quay.io/repository/biocontainers/perl-test-nowarnings
.. _`perl-test-nowarnings/tags`: https://quay.io/repository/biocontainers/perl-test-nowarnings?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-nowarnings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-nowarnings/README.html