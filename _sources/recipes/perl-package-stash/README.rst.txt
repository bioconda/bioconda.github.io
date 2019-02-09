.. title:: Package Recipe 'perl-package-stash'
.. highlight: bash


perl-package-stash
==================

.. conda:recipe:: perl-package-stash
   :replaces_section_title:

   routines for manipulating stashes

   :homepage: http://metacpan.org/release/Package-Stash
   :license: perl_5
   :recipe: /`perl-package-stash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-stash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-stash/meta.yaml>`_

   


.. conda:package:: perl-package-stash

   |downloads_perl-package-stash| |docker_perl-package-stash|

   :versions: 0.38, 0.37

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-apache-test`  :conda:package:`perl-app-cpanminus`  :conda:package:`perl-dist-checkconflicts`  :conda:package:`perl-getopt-long`  :conda:package:`perl-module-implementation`  :conda:package:`perl-package-stash-xs`  :conda:package:`perl-scalar-list-utils`  

   :required~by: |required_by_perl-package-stash|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-package-stash

   and update with::

      conda update perl-package-stash

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-package-stash


.. |required_by_perl-package-stash| conda:required_by:: perl-package-stash
.. |downloads_perl-package-stash| image:: https://img.shields.io/conda/dn/bioconda/perl-package-stash.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-package-stash| image:: https://quay.io/repository/biocontainers/perl-package-stash/status
   :target: https://quay.io/repository/biocontainers/perl-package-stash







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-package-stash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-package-stash/README.html

