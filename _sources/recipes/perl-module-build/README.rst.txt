.. title:: Package Recipe 'perl-module-build'
.. highlight: bash


perl-module-build
=================

.. conda:recipe:: perl-module-build
   :replaces_section_title:

   Build and install Perl modules

   :homepage: http://metacpan.org/pod/Module-Build
   :license: perl_5
   :recipe: /`perl-module-build <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-build>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-build/meta.yaml>`_

   


.. conda:package:: perl-module-build

   |downloads_perl-module-build| |docker_perl-module-build|

   :versions: 0.4224, 0.4214

   :depends: :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-module-build|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-build

   and update with::

      conda update perl-module-build

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-build


.. |required_by_perl-module-build| conda:required_by:: perl-module-build
.. |downloads_perl-module-build| image:: https://img.shields.io/conda/dn/bioconda/perl-module-build.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-build| image:: https://quay.io/repository/biocontainers/perl-module-build/status
   :target: https://quay.io/repository/biocontainers/perl-module-build







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-build/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-build/README.html

