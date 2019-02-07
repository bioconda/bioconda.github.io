.. title:: Package Recipe 'perl-app-cpanminus'
.. highlight: bash


perl-app-cpanminus
==================

.. conda:recipe:: perl-app-cpanminus
   :replaces_section_title:

   get\, unpack\, build and install modules from CPAN

   :homepage: https://github.com/miyagawa/cpanminus
   :license: perl_5
   :recipe: /`perl-app-cpanminus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-app-cpanminus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-app-cpanminus/meta.yaml>`_

   


.. conda:package:: perl-app-cpanminus

   |downloads_perl-app-cpanminus| |docker_perl-app-cpanminus|

   :versions: 1.7044, 1.7043, 1.7039

   :depends: :conda:package:`perl` >=5.26.2,<5.27.0a0 

   :required~by: |required_by_perl-app-cpanminus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-app-cpanminus

   and update with::

      conda update perl-app-cpanminus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-app-cpanminus


.. |required_by_perl-app-cpanminus| conda:required_by:: perl-app-cpanminus
.. |downloads_perl-app-cpanminus| image:: https://img.shields.io/conda/dn/bioconda/perl-app-cpanminus.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-app-cpanminus| image:: https://quay.io/repository/biocontainers/perl-app-cpanminus/status
   :target: https://quay.io/repository/biocontainers/perl-app-cpanminus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-app-cpanminus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-app-cpanminus/README.html

