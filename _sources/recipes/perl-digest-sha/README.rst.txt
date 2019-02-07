.. title:: Package Recipe 'perl-digest-sha'
.. highlight: bash


perl-digest-sha
===============

.. conda:recipe:: perl-digest-sha/5.88
   :replaces_section_title:

   Perl extension for SHA\-1\/224\/256\/384\/512

   :homepage: http://metacpan.org/pod/Digest::SHA
   :license: perl_5
   :recipe: /`perl-digest-sha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha>`_/`5.88 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88/meta.yaml>`_

   


.. conda:package:: perl-digest-sha

   |downloads_perl-digest-sha| |docker_perl-digest-sha|

   :versions: 5.88

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-digest-sha|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-digest-sha

   and update with::

      conda update perl-digest-sha

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-digest-sha


.. |required_by_perl-digest-sha| conda:required_by:: perl-digest-sha
.. |downloads_perl-digest-sha| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-sha.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-digest-sha| image:: https://quay.io/repository/biocontainers/perl-digest-sha/status
   :target: https://quay.io/repository/biocontainers/perl-digest-sha







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-sha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-sha/README.html

