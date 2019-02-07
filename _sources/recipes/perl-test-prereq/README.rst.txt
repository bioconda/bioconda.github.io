.. title:: Package Recipe 'perl-test-prereq'
.. highlight: bash


perl-test-prereq
================

.. conda:recipe:: perl-test-prereq/2.002
   :replaces_section_title:

   check if Makefile.PL has the right pre\-requisites

   :homepage: https://github.com/briandfoy/test-prereq
   :license: artistic_2
   :recipe: /`perl-test-prereq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq>`_/`2.002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq/2.002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq/2.002/meta.yaml>`_

   


.. conda:package:: perl-test-prereq

   |downloads_perl-test-prereq| |docker_perl-test-prereq|

   :versions: 2.002

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-carp`  :conda:package:`perl-file-find`  :conda:package:`perl-lib`  :conda:package:`perl-module-build`  :conda:package:`perl-module-extract-use`  :conda:package:`perl-parent`  

   :required~by: |required_by_perl-test-prereq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-prereq

   and update with::

      conda update perl-test-prereq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-prereq


.. |required_by_perl-test-prereq| conda:required_by:: perl-test-prereq
.. |downloads_perl-test-prereq| image:: https://img.shields.io/conda/dn/bioconda/perl-test-prereq.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-prereq| image:: https://quay.io/repository/biocontainers/perl-test-prereq/status
   :target: https://quay.io/repository/biocontainers/perl-test-prereq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-prereq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-prereq/README.html

