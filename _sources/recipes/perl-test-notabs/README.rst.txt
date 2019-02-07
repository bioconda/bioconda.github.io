.. title:: Package Recipe 'perl-test-notabs'
.. highlight: bash


perl-test-notabs
================

.. conda:recipe:: perl-test-notabs
   :replaces_section_title:

   Check the presence of tabs in your project

   :homepage: http://metacpan.org/pod/Test-NoTabs
   :license: perl_5
   :recipe: /`perl-test-notabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-notabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-notabs/meta.yaml>`_

   


.. conda:package:: perl-test-notabs

   |downloads_perl-test-notabs| |docker_perl-test-notabs|

   :versions: 2.02, 1.4

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-test-notabs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-notabs

   and update with::

      conda update perl-test-notabs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-notabs


.. |required_by_perl-test-notabs| conda:required_by:: perl-test-notabs
.. |downloads_perl-test-notabs| image:: https://img.shields.io/conda/dn/bioconda/perl-test-notabs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-notabs| image:: https://quay.io/repository/biocontainers/perl-test-notabs/status
   :target: https://quay.io/repository/biocontainers/perl-test-notabs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-notabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-notabs/README.html

