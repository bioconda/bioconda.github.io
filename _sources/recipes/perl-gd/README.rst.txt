.. title:: Package Recipe 'perl-gd'
.. highlight: bash


perl-gd
=======

.. conda:recipe:: perl-gd
   :replaces_section_title:

   Perl interface to the gd2 graphics library

   :homepage: http://metacpan.org/pod/GD
   :license: perl_5
   :recipe: /`perl-gd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd/meta.yaml>`_

   


.. conda:package:: perl-gd

   |downloads_perl-gd| |docker_perl-gd|

   :versions: 2.70, 2.69, 2.68, 2.56

   :depends: :conda:package:`libgd` >=2.2.5,<2.3.0a0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_perl-gd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gd

   and update with::

      conda update perl-gd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-gd


.. |required_by_perl-gd| conda:required_by:: perl-gd
.. |downloads_perl-gd| image:: https://img.shields.io/conda/dn/bioconda/perl-gd.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-gd| image:: https://quay.io/repository/biocontainers/perl-gd/status
   :target: https://quay.io/repository/biocontainers/perl-gd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gd/README.html

