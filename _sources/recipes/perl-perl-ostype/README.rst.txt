.. title:: Package Recipe 'perl-perl-ostype'
.. highlight: bash


perl-perl-ostype
================

.. conda:recipe:: perl-perl-ostype/1.010
   :replaces_section_title:

   Map Perl operating system names to generic types

   :homepage: https://github.com/Perl-Toolchain-Gang/Perl-OSType
   :license: perl_5
   :recipe: /`perl-perl-ostype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-ostype>`_/`1.010 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-ostype/1.010>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-ostype/1.010/meta.yaml>`_

   


.. conda:package:: perl-perl-ostype

   |downloads_perl-perl-ostype| |docker_perl-perl-ostype|

   :versions: 1.010

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-exporter`  

   :required~by: |required_by_perl-perl-ostype|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perl-ostype

   and update with::

      conda update perl-perl-ostype

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-perl-ostype


.. |required_by_perl-perl-ostype| conda:required_by:: perl-perl-ostype
.. |downloads_perl-perl-ostype| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-ostype.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-perl-ostype| image:: https://quay.io/repository/biocontainers/perl-perl-ostype/status
   :target: https://quay.io/repository/biocontainers/perl-perl-ostype







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-ostype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-ostype/README.html

