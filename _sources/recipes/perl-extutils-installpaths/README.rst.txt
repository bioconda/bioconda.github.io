.. title:: Package Recipe 'perl-extutils-installpaths'
.. highlight: bash


perl-extutils-installpaths
==========================

.. conda:recipe:: perl-extutils-installpaths
   :replaces_section_title:

   Build.PL install path logic made easy

   :homepage: http://metacpan.org/pod/ExtUtils::InstallPaths
   :license: perl_5
   :recipe: /`perl-extutils-installpaths <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-installpaths>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-installpaths/meta.yaml>`_

   


.. conda:package:: perl-extutils-installpaths

   |downloads_perl-extutils-installpaths| |docker_perl-extutils-installpaths|

   :versions: 0.012, 0.011

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-extutils-config`  

   :required~by: |required_by_perl-extutils-installpaths|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-installpaths

   and update with::

      conda update perl-extutils-installpaths

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-installpaths


.. |required_by_perl-extutils-installpaths| conda:required_by:: perl-extutils-installpaths
.. |downloads_perl-extutils-installpaths| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-installpaths.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-installpaths| image:: https://quay.io/repository/biocontainers/perl-extutils-installpaths/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-installpaths







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-installpaths/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-installpaths/README.html

