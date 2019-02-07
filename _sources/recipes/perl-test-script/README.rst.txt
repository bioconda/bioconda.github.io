.. title:: Package Recipe 'perl-test-script'
.. highlight: bash


perl-test-script
================

.. conda:recipe:: perl-test-script
   :replaces_section_title:

   Basic cross\-platform tests for scripts

   :homepage: https://metacpan.org/pod/Test::Script
   :license: perl_5
   :recipe: /`perl-test-script <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-script>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-script/meta.yaml>`_

   


.. conda:package:: perl-test-script

   |downloads_perl-test-script| |docker_perl-test-script|

   :versions: 1.25

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-capture-tiny`  :conda:package:`perl-probe-perl`  :conda:package:`perl-text-parsewords`  

   :required~by: |required_by_perl-test-script|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-script

   and update with::

      conda update perl-test-script

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-script


.. |required_by_perl-test-script| conda:required_by:: perl-test-script
.. |downloads_perl-test-script| image:: https://img.shields.io/conda/dn/bioconda/perl-test-script.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-script| image:: https://quay.io/repository/biocontainers/perl-test-script/status
   :target: https://quay.io/repository/biocontainers/perl-test-script







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-script/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-script/README.html

