.. title:: Package Recipe 'perl-exception-class'
.. highlight: bash


perl-exception-class
====================

.. conda:recipe:: perl-exception-class
   :replaces_section_title:

   A module that allows you to declare real exception classes in Perl

   :homepage: http://metacpan.org/release/Exception-Class
   :license: perl_5
   :recipe: /`perl-exception-class <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exception-class>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exception-class/meta.yaml>`_

   


.. conda:package:: perl-exception-class

   |downloads_perl-exception-class| |docker_perl-exception-class|

   :versions: 1.44, 1.40

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-class-data-inheritable`  :conda:package:`perl-devel-stacktrace`  

   :required~by: |required_by_perl-exception-class|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-exception-class

   and update with::

      conda update perl-exception-class

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-exception-class


.. |required_by_perl-exception-class| conda:required_by:: perl-exception-class
.. |downloads_perl-exception-class| image:: https://img.shields.io/conda/dn/bioconda/perl-exception-class.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-exception-class| image:: https://quay.io/repository/biocontainers/perl-exception-class/status
   :target: https://quay.io/repository/biocontainers/perl-exception-class







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-exception-class/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-exception-class/README.html

