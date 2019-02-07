.. title:: Package Recipe 'perl-file-pushd'
.. highlight: bash


perl-file-pushd
===============

.. conda:recipe:: perl-file-pushd
   :replaces_section_title:

   change directory temporarily for a limited scope

   :homepage: https://github.com/dagolden/File-pushd
   :license: apache_2_0
   :recipe: /`perl-file-pushd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-pushd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-pushd/meta.yaml>`_

   


.. conda:package:: perl-file-pushd

   |downloads_perl-file-pushd| |docker_perl-file-pushd|

   :versions: 1.016

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-file-path`  :conda:package:`perl-file-temp`  

   :required~by: |required_by_perl-file-pushd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-pushd

   and update with::

      conda update perl-file-pushd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-pushd


.. |required_by_perl-file-pushd| conda:required_by:: perl-file-pushd
.. |downloads_perl-file-pushd| image:: https://img.shields.io/conda/dn/bioconda/perl-file-pushd.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-pushd| image:: https://quay.io/repository/biocontainers/perl-file-pushd/status
   :target: https://quay.io/repository/biocontainers/perl-file-pushd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-pushd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-pushd/README.html

