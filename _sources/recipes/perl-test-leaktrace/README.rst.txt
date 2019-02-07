.. title:: Package Recipe 'perl-test-leaktrace'
.. highlight: bash


perl-test-leaktrace
===================

.. conda:recipe:: perl-test-leaktrace
   :replaces_section_title:

   Traces memory leaks

   :homepage: http://metacpan.org/pod/Test-LeakTrace
   :license: perl_5
   :recipe: /`perl-test-leaktrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-leaktrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-leaktrace/meta.yaml>`_

   


.. conda:package:: perl-test-leaktrace

   |downloads_perl-test-leaktrace| |docker_perl-test-leaktrace|

   :versions: 0.16, 0.15

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-test-leaktrace|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-leaktrace

   and update with::

      conda update perl-test-leaktrace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-leaktrace


.. |required_by_perl-test-leaktrace| conda:required_by:: perl-test-leaktrace
.. |downloads_perl-test-leaktrace| image:: https://img.shields.io/conda/dn/bioconda/perl-test-leaktrace.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-leaktrace| image:: https://quay.io/repository/biocontainers/perl-test-leaktrace/status
   :target: https://quay.io/repository/biocontainers/perl-test-leaktrace







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-leaktrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-leaktrace/README.html

