.. title:: Package Recipe 'perl-locale'
.. highlight: bash


perl-locale
===========

.. conda:recipe:: perl-locale/1.03
   :replaces_section_title:

   Perl pragma to use or avoid POSIX locales for built\-in operations

   :homepage: http://metacpan.org/pod/locale
   :license: perl_5
   :recipe: /`perl-locale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-locale>`_/`1.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-locale/1.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-locale/1.03/meta.yaml>`_

   


.. conda:package:: perl-locale

   |downloads_perl-locale| |docker_perl-locale|

   :versions: 1.03

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-locale|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-locale

   and update with::

      conda update perl-locale

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-locale


.. |required_by_perl-locale| conda:required_by:: perl-locale
.. |downloads_perl-locale| image:: https://img.shields.io/conda/dn/bioconda/perl-locale.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-locale| image:: https://quay.io/repository/biocontainers/perl-locale/status
   :target: https://quay.io/repository/biocontainers/perl-locale







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-locale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-locale/README.html

