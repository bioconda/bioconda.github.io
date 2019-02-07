.. title:: Package Recipe 'perl-lib'
.. highlight: bash


perl-lib
========

.. conda:recipe:: perl-lib/0.63
   :replaces_section_title:

   manipulate \@INC at compile time

   :homepage: http://metacpan.org/pod/lib
   :license: perl_5
   :recipe: /`perl-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lib>`_/`0.63 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lib/0.63>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lib/0.63/meta.yaml>`_

   


.. conda:package:: perl-lib

   |downloads_perl-lib| |docker_perl-lib|

   :versions: 0.63

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-lib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-lib

   and update with::

      conda update perl-lib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-lib


.. |required_by_perl-lib| conda:required_by:: perl-lib
.. |downloads_perl-lib| image:: https://img.shields.io/conda/dn/bioconda/perl-lib.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-lib| image:: https://quay.io/repository/biocontainers/perl-lib/status
   :target: https://quay.io/repository/biocontainers/perl-lib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lib/README.html

