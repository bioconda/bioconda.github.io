.. title:: Package Recipe 'perl-dbm-deep'
.. highlight: bash


perl-dbm-deep
=============

.. conda:recipe:: perl-dbm-deep
   :replaces_section_title:

   A pure perl multi\-level hash\/array DBM that supports transactions

   :homepage: http://metacpan.org/pod/DBM::Deep
   :license: perl_5
   :recipe: /`perl-dbm-deep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbm-deep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbm-deep/meta.yaml>`_

   


.. conda:package:: perl-dbm-deep

   |downloads_perl-dbm-deep| |docker_perl-dbm-deep|

   :versions: 2.0013

   :depends: :conda:package:`perl-dbi`  :conda:package:`perl-digest-md5`  :conda:package:`perl-scalar-list-utils`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-dbm-deep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbm-deep

   and update with::

      conda update perl-dbm-deep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-dbm-deep


.. |required_by_perl-dbm-deep| conda:required_by:: perl-dbm-deep
.. |downloads_perl-dbm-deep| image:: https://img.shields.io/conda/dn/bioconda/perl-dbm-deep.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-dbm-deep| image:: https://quay.io/repository/biocontainers/perl-dbm-deep/status
   :target: https://quay.io/repository/biocontainers/perl-dbm-deep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbm-deep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbm-deep/README.html

