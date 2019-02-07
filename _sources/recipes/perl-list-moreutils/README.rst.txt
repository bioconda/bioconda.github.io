.. title:: Package Recipe 'perl-list-moreutils'
.. highlight: bash


perl-list-moreutils
===================

.. conda:recipe:: perl-list-moreutils
   :replaces_section_title:

   Provide the stuff missing in List\:\:Util

   :homepage: https://metacpan.org/release/List-MoreUtils
   :license: apache_2_0
   :recipe: /`perl-list-moreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils/meta.yaml>`_

   


.. conda:package:: perl-list-moreutils

   |downloads_perl-list-moreutils| |docker_perl-list-moreutils|

   :versions: 0.428, 0.413, 0.15

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-exporter-tiny`  

   :required~by: |required_by_perl-list-moreutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-list-moreutils

   and update with::

      conda update perl-list-moreutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-list-moreutils


.. |required_by_perl-list-moreutils| conda:required_by:: perl-list-moreutils
.. |downloads_perl-list-moreutils| image:: https://img.shields.io/conda/dn/bioconda/perl-list-moreutils.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-list-moreutils| image:: https://quay.io/repository/biocontainers/perl-list-moreutils/status
   :target: https://quay.io/repository/biocontainers/perl-list-moreutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-moreutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-moreutils/README.html

