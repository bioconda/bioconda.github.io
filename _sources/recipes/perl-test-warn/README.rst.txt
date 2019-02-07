.. title:: Package Recipe 'perl-test-warn'
.. highlight: bash


perl-test-warn
==============

.. conda:recipe:: perl-test-warn
   :replaces_section_title:

   Perl extension to test methods for warnings

   :homepage: http://metacpan.org/pod/Test-Warn
   :license: perl_5
   :recipe: /`perl-test-warn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-warn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-warn/meta.yaml>`_

   


.. conda:package:: perl-test-warn

   |downloads_perl-test-warn| |docker_perl-test-warn|

   :versions: 0.36, 0.30

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-sub-uplevel`  

   :required~by: |required_by_perl-test-warn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-warn

   and update with::

      conda update perl-test-warn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-warn


.. |required_by_perl-test-warn| conda:required_by:: perl-test-warn
.. |downloads_perl-test-warn| image:: https://img.shields.io/conda/dn/bioconda/perl-test-warn.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-warn| image:: https://quay.io/repository/biocontainers/perl-test-warn/status
   :target: https://quay.io/repository/biocontainers/perl-test-warn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-warn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-warn/README.html

