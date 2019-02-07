.. title:: Package Recipe 'perl-digest-md5'
.. highlight: bash


perl-digest-md5
===============

.. conda:recipe:: perl-digest-md5
   :replaces_section_title:

   Perl interface to the MD\-5 algorithm

   :homepage: http://metacpan.org/pod/Digest-MD5
   :license: perl_5
   :recipe: /`perl-digest-md5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-md5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-md5/meta.yaml>`_

   


.. conda:package:: perl-digest-md5

   |downloads_perl-digest-md5| |docker_perl-digest-md5|

   :versions: 2.55, 2.52

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-digest-md5|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-digest-md5

   and update with::

      conda update perl-digest-md5

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-digest-md5


.. |required_by_perl-digest-md5| conda:required_by:: perl-digest-md5
.. |downloads_perl-digest-md5| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-md5.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-digest-md5| image:: https://quay.io/repository/biocontainers/perl-digest-md5/status
   :target: https://quay.io/repository/biocontainers/perl-digest-md5







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-md5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-md5/README.html

