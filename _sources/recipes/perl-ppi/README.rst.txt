.. title:: Package Recipe 'perl-ppi'
.. highlight: bash


perl-ppi
========

.. conda:recipe:: perl-ppi/1.236
   :replaces_section_title:

   Parse\, Analyze and Manipulate Perl \(without perl\)

   :homepage: https://github.com/adamkennedy/PPI
   :license: perl_5
   :recipe: /`perl-ppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi>`_/`1.236 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236/meta.yaml>`_

   


.. conda:package:: perl-ppi

   |downloads_perl-ppi| |docker_perl-ppi|

   :versions: 1.236

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-class-xsaccessor`  :conda:package:`perl-clone`  :conda:package:`perl-digest-md5`  :conda:package:`perl-file-spec`  :conda:package:`perl-hook-lexwrap`  :conda:package:`perl-io-string`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-list-util`  :conda:package:`perl-params-util`  :conda:package:`perl-task-weaken`  

   :required~by: |required_by_perl-ppi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ppi

   and update with::

      conda update perl-ppi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-ppi


.. |required_by_perl-ppi| conda:required_by:: perl-ppi
.. |downloads_perl-ppi| image:: https://img.shields.io/conda/dn/bioconda/perl-ppi.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-ppi| image:: https://quay.io/repository/biocontainers/perl-ppi/status
   :target: https://quay.io/repository/biocontainers/perl-ppi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ppi/README.html

