.. title:: Package Recipe 'perl-yaml-tiny'
.. highlight: bash


perl-yaml-tiny
==============

.. conda:recipe:: perl-yaml-tiny
   :replaces_section_title:

   Read\/Write YAML files with as little code as possible

   :homepage: http://search.cpan.org/dist/YAML-Tiny/lib/YAML/Tiny.pm
   :license: perl
   :recipe: /`perl-yaml-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-tiny/meta.yaml>`_

   


.. conda:package:: perl-yaml-tiny

   |downloads_perl-yaml-tiny| |docker_perl-yaml-tiny|

   :versions: 1.73, 1.70

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-yaml-tiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-yaml-tiny

   and update with::

      conda update perl-yaml-tiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-yaml-tiny


.. |required_by_perl-yaml-tiny| conda:required_by:: perl-yaml-tiny
.. |downloads_perl-yaml-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-yaml-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-yaml-tiny| image:: https://quay.io/repository/biocontainers/perl-yaml-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-yaml-tiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-yaml-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-yaml-tiny/README.html

