.. title:: Package Recipe 'perl-version-next'
.. highlight: bash


perl-version-next
=================

.. conda:recipe:: perl-version-next
   :replaces_section_title:

   increment module version numbers simply and correctly

   :homepage: https://github.com/dagolden/Version-Next
   :license: apache_2_0
   :recipe: /`perl-version-next <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next/meta.yaml>`_

   


.. conda:package:: perl-version-next

   |downloads_perl-version-next| |docker_perl-version-next|

   :versions: 1.000

   :depends: :conda:package:`perl-apache-test`  :conda:package:`perl-perl-version`  :conda:package:`perl-sub-exporter`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-version-next|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-version-next

   and update with::

      conda update perl-version-next

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-version-next


.. |required_by_perl-version-next| conda:required_by:: perl-version-next
.. |downloads_perl-version-next| image:: https://img.shields.io/conda/dn/bioconda/perl-version-next.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-version-next| image:: https://quay.io/repository/biocontainers/perl-version-next/status
   :target: https://quay.io/repository/biocontainers/perl-version-next







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-version-next/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-version-next/README.html

