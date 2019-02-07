.. title:: Package Recipe 'perl-devel-size'
.. highlight: bash


perl-devel-size
===============

.. conda:recipe:: perl-devel-size
   :replaces_section_title:

   Perl extension for finding the memory usage of Perl variables

   :homepage: http://metacpan.org/pod/Devel::Size
   :license: perl_5
   :recipe: /`perl-devel-size <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-size>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-size/meta.yaml>`_

   


.. conda:package:: perl-devel-size

   |downloads_perl-devel-size| |docker_perl-devel-size|

   :versions: 0.82, 0.80

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-test-simple`  

   :required~by: |required_by_perl-devel-size|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-size

   and update with::

      conda update perl-devel-size

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-devel-size


.. |required_by_perl-devel-size| conda:required_by:: perl-devel-size
.. |downloads_perl-devel-size| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-size.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-devel-size| image:: https://quay.io/repository/biocontainers/perl-devel-size/status
   :target: https://quay.io/repository/biocontainers/perl-devel-size







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-size/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-size/README.html

