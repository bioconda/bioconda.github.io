.. title:: Package Recipe 'perl-test-file-contents'
.. highlight: bash


perl-test-file-contents
=======================

.. conda:recipe:: perl-test-file-contents/0.23
   :replaces_section_title:

   Test routines for examining the contents of files

   :homepage: http://search.cpan.org/dist/Test-File-Contents/
   :license: perl_5
   :recipe: /`perl-test-file-contents <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents>`_/`0.23 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents/0.23>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents/0.23/meta.yaml>`_

   


.. conda:package:: perl-test-file-contents

   |downloads_perl-test-file-contents| |docker_perl-test-file-contents|

   :versions: 0.23

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-digest-md5`  :conda:package:`perl-file-spec`  :conda:package:`perl-test-pod`  :conda:package:`perl-test-pod-coverage`  :conda:package:`perl-text-diff`  

   :required~by: |required_by_perl-test-file-contents|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-file-contents

   and update with::

      conda update perl-test-file-contents

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-file-contents


.. |required_by_perl-test-file-contents| conda:required_by:: perl-test-file-contents
.. |downloads_perl-test-file-contents| image:: https://img.shields.io/conda/dn/bioconda/perl-test-file-contents.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-file-contents| image:: https://quay.io/repository/biocontainers/perl-test-file-contents/status
   :target: https://quay.io/repository/biocontainers/perl-test-file-contents







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-file-contents/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-file-contents/README.html

