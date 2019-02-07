.. title:: Package Recipe 'perl-posix'
.. highlight: bash


perl-posix
==========

.. conda:recipe:: perl-posix/1.38_03
   :replaces_section_title:

   

   :homepage: http://metacpan.org/pod/POSIX
   :license: perl_5
   :recipe: /`perl-posix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix>`_/`1.38_03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix/1.38_03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix/1.38_03/meta.yaml>`_

   


.. conda:package:: perl-posix

   |downloads_perl-posix| |docker_perl-posix|

   :versions: 1.38_03

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-posix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-posix

   and update with::

      conda update perl-posix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-posix


.. |required_by_perl-posix| conda:required_by:: perl-posix
.. |downloads_perl-posix| image:: https://img.shields.io/conda/dn/bioconda/perl-posix.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-posix| image:: https://quay.io/repository/biocontainers/perl-posix/status
   :target: https://quay.io/repository/biocontainers/perl-posix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-posix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-posix/README.html

