.. title:: Package Recipe 'perl-yaml-libyaml'
.. highlight: bash


perl-yaml-libyaml
=================

.. conda:recipe:: perl-yaml-libyaml/0.63
   :replaces_section_title:

   Perl YAML Serialization using XS and libyaml 

   :homepage: https://metacpan.org/release/YAML-LibYAML
   :license: perl_5
   :recipe: /`perl-yaml-libyaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-libyaml>`_/`0.63 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-libyaml/0.63>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-libyaml/0.63/meta.yaml>`_

   


.. conda:package:: perl-yaml-libyaml

   |downloads_perl-yaml-libyaml| |docker_perl-yaml-libyaml|

   :versions: 0.66, 0.63

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-yaml-libyaml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-yaml-libyaml

   and update with::

      conda update perl-yaml-libyaml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-yaml-libyaml


.. |required_by_perl-yaml-libyaml| conda:required_by:: perl-yaml-libyaml
.. |downloads_perl-yaml-libyaml| image:: https://img.shields.io/conda/dn/bioconda/perl-yaml-libyaml.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-yaml-libyaml| image:: https://quay.io/repository/biocontainers/perl-yaml-libyaml/status
   :target: https://quay.io/repository/biocontainers/perl-yaml-libyaml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-yaml-libyaml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-yaml-libyaml/README.html

