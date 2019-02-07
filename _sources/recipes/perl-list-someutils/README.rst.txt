.. title:: Package Recipe 'perl-list-someutils'
.. highlight: bash


perl-list-someutils
===================

.. conda:recipe:: perl-list-someutils
   :replaces_section_title:

   Provide the stuff missing in List\:\:Util

   :homepage: http://metacpan.org/release/List-SomeUtils
   :license: perl_5
   :recipe: /`perl-list-someutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils/meta.yaml>`_

   


.. conda:package:: perl-list-someutils

   |downloads_perl-list-someutils| |docker_perl-list-someutils|

   :versions: 0.56, 0.53

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-module-implementation`  

   :required~by: |required_by_perl-list-someutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-list-someutils

   and update with::

      conda update perl-list-someutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-list-someutils


.. |required_by_perl-list-someutils| conda:required_by:: perl-list-someutils
.. |downloads_perl-list-someutils| image:: https://img.shields.io/conda/dn/bioconda/perl-list-someutils.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-list-someutils| image:: https://quay.io/repository/biocontainers/perl-list-someutils/status
   :target: https://quay.io/repository/biocontainers/perl-list-someutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-someutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-someutils/README.html

