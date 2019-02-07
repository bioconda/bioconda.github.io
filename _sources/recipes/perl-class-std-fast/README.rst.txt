.. title:: Package Recipe 'perl-class-std-fast'
.. highlight: bash


perl-class-std-fast
===================

.. conda:recipe:: perl-class-std-fast
   :replaces_section_title:

   faster but less secure than Class\:\:Std

   :homepage: http://metacpan.org/pod/Class-Std-Fast
   :license: perl_5
   :recipe: /`perl-class-std-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std-fast/meta.yaml>`_

   


.. conda:package:: perl-class-std-fast

   |downloads_perl-class-std-fast| |docker_perl-class-std-fast|

   :versions: 0.0.8

   :depends: :conda:package:`perl-class-std`  :conda:package:`perl-scalar-list-utils`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-class-std-fast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-std-fast

   and update with::

      conda update perl-class-std-fast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-class-std-fast


.. |required_by_perl-class-std-fast| conda:required_by:: perl-class-std-fast
.. |downloads_perl-class-std-fast| image:: https://img.shields.io/conda/dn/bioconda/perl-class-std-fast.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-class-std-fast| image:: https://quay.io/repository/biocontainers/perl-class-std-fast/status
   :target: https://quay.io/repository/biocontainers/perl-class-std-fast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-std-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-std-fast/README.html

