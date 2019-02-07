.. title:: Package Recipe 'perl-crypt-rc4'
.. highlight: bash


perl-crypt-rc4
==============

.. conda:recipe:: perl-crypt-rc4
   :replaces_section_title:

   Perl implementation of the RC4 encryption algorithm

   :homepage: http://metacpan.org/pod/Crypt-RC4
   :license: unknown
   :recipe: /`perl-crypt-rc4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-rc4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-rc4/meta.yaml>`_

   


.. conda:package:: perl-crypt-rc4

   |downloads_perl-crypt-rc4| |docker_perl-crypt-rc4|

   :versions: 2.02

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-crypt-rc4|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-crypt-rc4

   and update with::

      conda update perl-crypt-rc4

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-crypt-rc4


.. |required_by_perl-crypt-rc4| conda:required_by:: perl-crypt-rc4
.. |downloads_perl-crypt-rc4| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-rc4.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-crypt-rc4| image:: https://quay.io/repository/biocontainers/perl-crypt-rc4/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-rc4







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-rc4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-rc4/README.html

