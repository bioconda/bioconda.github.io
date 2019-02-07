.. title:: Package Recipe 'perl-storable'
.. highlight: bash


perl-storable
=============

.. conda:recipe:: perl-storable
   :replaces_section_title:

   persistence for Perl data structures

   :homepage: http://metacpan.org/pod/Storable
   :license: perl_5
   :recipe: /`perl-storable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-storable>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-storable/meta.yaml>`_

   


.. conda:package:: perl-storable

   |downloads_perl-storable| |docker_perl-storable|

   :versions: 3.11

   :depends: :conda:package:`perl` >=5.26.2,<5.27.0a0 :conda:package:`perl-xsloader`  

   :required~by: |required_by_perl-storable|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-storable

   and update with::

      conda update perl-storable

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-storable


.. |required_by_perl-storable| conda:required_by:: perl-storable
.. |downloads_perl-storable| image:: https://img.shields.io/conda/dn/bioconda/perl-storable.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-storable| image:: https://quay.io/repository/biocontainers/perl-storable/status
   :target: https://quay.io/repository/biocontainers/perl-storable







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-storable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-storable/README.html

