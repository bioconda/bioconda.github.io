.. title:: Package Recipe 'perl-test-most'
.. highlight: bash


perl-test-most
==============

.. conda:recipe:: perl-test-most
   :replaces_section_title:

   Most commonly needed test functions and features

   :homepage: http://metacpan.org/pod/Test-Most
   :license: unknown
   :recipe: /`perl-test-most <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most/meta.yaml>`_

   


.. conda:package:: perl-test-most

   |downloads_perl-test-most| |docker_perl-test-most|

   :versions: 0.35, 0.34

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-exception-class`  :conda:package:`perl-test-deep`  :conda:package:`perl-test-differences`  :conda:package:`perl-test-exception`  :conda:package:`perl-test-warn`  

   :required~by: |required_by_perl-test-most|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-most

   and update with::

      conda update perl-test-most

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-most


.. |required_by_perl-test-most| conda:required_by:: perl-test-most
.. |downloads_perl-test-most| image:: https://img.shields.io/conda/dn/bioconda/perl-test-most.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-most| image:: https://quay.io/repository/biocontainers/perl-test-most/status
   :target: https://quay.io/repository/biocontainers/perl-test-most







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-most/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-most/README.html

