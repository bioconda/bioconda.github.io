.. title:: Package Recipe 'perl-module-build-tiny'
.. highlight: bash


perl-module-build-tiny
======================

.. conda:recipe:: perl-module-build-tiny
   :replaces_section_title:

   A tiny replacement for Module\:\:Build

   :homepage: http://metacpan.org/pod/Module::Build::Tiny
   :license: perl_5
   :recipe: /`perl-module-build-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-build-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-build-tiny/meta.yaml>`_

   


.. conda:package:: perl-module-build-tiny

   |downloads_perl-module-build-tiny| |docker_perl-module-build-tiny|

   :versions: 0.039

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-extutils-makemaker`  :conda:package:`perl-pathtools`  

   :required~by: |required_by_perl-module-build-tiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-build-tiny

   and update with::

      conda update perl-module-build-tiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-build-tiny


.. |required_by_perl-module-build-tiny| conda:required_by:: perl-module-build-tiny
.. |downloads_perl-module-build-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-module-build-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-build-tiny| image:: https://quay.io/repository/biocontainers/perl-module-build-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-module-build-tiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-build-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-build-tiny/README.html

