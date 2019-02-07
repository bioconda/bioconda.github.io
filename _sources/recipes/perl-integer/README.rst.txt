.. title:: Package Recipe 'perl-integer'
.. highlight: bash


perl-integer
============

.. conda:recipe:: perl-integer/1.01
   :replaces_section_title:

   Perl pragma to use integer arithmetic instead of floating point

   :homepage: http://metacpan.org/pod/integer
   :license: perl_5
   :recipe: /`perl-integer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-integer>`_/`1.01 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-integer/1.01>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-integer/1.01/meta.yaml>`_

   


.. conda:package:: perl-integer

   |downloads_perl-integer| |docker_perl-integer|

   :versions: 1.01

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-integer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-integer

   and update with::

      conda update perl-integer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-integer


.. |required_by_perl-integer| conda:required_by:: perl-integer
.. |downloads_perl-integer| image:: https://img.shields.io/conda/dn/bioconda/perl-integer.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-integer| image:: https://quay.io/repository/biocontainers/perl-integer/status
   :target: https://quay.io/repository/biocontainers/perl-integer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-integer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-integer/README.html

