.. title:: Package Recipe 'perl-file-slurper'
.. highlight: bash


perl-file-slurper
=================

.. conda:recipe:: perl-file-slurper
   :replaces_section_title:

   A simple\, sane and efficient module to slurp a file

   :homepage: http://metacpan.org/pod/File-Slurper
   :license: perl_5
   :recipe: /`perl-file-slurper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper/meta.yaml>`_

   


.. conda:package:: perl-file-slurper

   |downloads_perl-file-slurper| |docker_perl-file-slurper|

   :versions: 0.012, 0.008

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-encode`  :conda:package:`perl-exporter`  

   :required~by: |required_by_perl-file-slurper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-slurper

   and update with::

      conda update perl-file-slurper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-slurper


.. |required_by_perl-file-slurper| conda:required_by:: perl-file-slurper
.. |downloads_perl-file-slurper| image:: https://img.shields.io/conda/dn/bioconda/perl-file-slurper.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-slurper| image:: https://quay.io/repository/biocontainers/perl-file-slurper/status
   :target: https://quay.io/repository/biocontainers/perl-file-slurper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-slurper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-slurper/README.html

