.. title:: Package Recipe 'perl-b'
.. highlight: bash


perl-b
======

.. conda:recipe:: perl-b/1.48
   :replaces_section_title:

   The Perl Compiler Backend

   :homepage: http://metacpan.org/pod/B
   :license: perl_5
   :recipe: /`perl-b <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b>`_/`1.48 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b/1.48>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b/1.48/meta.yaml>`_

   


.. conda:package:: perl-b

   |downloads_perl-b| |docker_perl-b|

   :versions: 1.48

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-b|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-b

   and update with::

      conda update perl-b

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-b


.. |required_by_perl-b| conda:required_by:: perl-b
.. |downloads_perl-b| image:: https://img.shields.io/conda/dn/bioconda/perl-b.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-b| image:: https://quay.io/repository/biocontainers/perl-b/status
   :target: https://quay.io/repository/biocontainers/perl-b







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-b/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-b/README.html

