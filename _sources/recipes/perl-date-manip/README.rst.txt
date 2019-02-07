.. title:: Package Recipe 'perl-date-manip'
.. highlight: bash


perl-date-manip
===============

.. conda:recipe:: perl-date-manip
   :replaces_section_title:

   Date manipulation routines

   :homepage: http://metacpan.org/pod/Date::Manip
   :license: perl_5
   :recipe: /`perl-date-manip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-manip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-manip/meta.yaml>`_

   


.. conda:package:: perl-date-manip

   |downloads_perl-date-manip| |docker_perl-date-manip|

   :versions: 6.75, 6.73, 6.72, 6.57

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-data-dumper`  :conda:package:`perl-encode`  :conda:package:`perl-storable`  

   :required~by: |required_by_perl-date-manip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-date-manip

   and update with::

      conda update perl-date-manip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-date-manip


.. |required_by_perl-date-manip| conda:required_by:: perl-date-manip
.. |downloads_perl-date-manip| image:: https://img.shields.io/conda/dn/bioconda/perl-date-manip.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-date-manip| image:: https://quay.io/repository/biocontainers/perl-date-manip/status
   :target: https://quay.io/repository/biocontainers/perl-date-manip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-date-manip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-date-manip/README.html

