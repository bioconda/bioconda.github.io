.. title:: Package Recipe 'perl-constant'
.. highlight: bash


perl-constant
=============

.. conda:recipe:: perl-constant/1.33
   :replaces_section_title:

   Perl pragma to declare constants

   :homepage: https://metacpan.org/module/constant
   :license: perl_5
   :recipe: /`perl-constant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-constant>`_/`1.33 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-constant/1.33>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-constant/1.33/meta.yaml>`_

   


.. conda:package:: perl-constant

   |downloads_perl-constant| |docker_perl-constant|

   :versions: 1.33

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-constant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-constant

   and update with::

      conda update perl-constant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-constant


.. |required_by_perl-constant| conda:required_by:: perl-constant
.. |downloads_perl-constant| image:: https://img.shields.io/conda/dn/bioconda/perl-constant.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-constant| image:: https://quay.io/repository/biocontainers/perl-constant/status
   :target: https://quay.io/repository/biocontainers/perl-constant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-constant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-constant/README.html

