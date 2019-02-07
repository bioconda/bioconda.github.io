.. title:: Package Recipe 'perl-extutils-depends'
.. highlight: bash


perl-extutils-depends
=====================

.. conda:recipe:: perl-extutils-depends
   :replaces_section_title:

   Easily build XS extensions that depend on XS extensions

   :homepage: http://gtk2-perl.sourceforge.net
   :license: perl_5
   :recipe: /`perl-extutils-depends <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-depends>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-depends/meta.yaml>`_

   


.. conda:package:: perl-extutils-depends

   |downloads_perl-extutils-depends| |docker_perl-extutils-depends|

   :versions: 0.405

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-data-dumper`  :conda:package:`perl-pathtools`  

   :required~by: |required_by_perl-extutils-depends|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-depends

   and update with::

      conda update perl-extutils-depends

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-depends


.. |required_by_perl-extutils-depends| conda:required_by:: perl-extutils-depends
.. |downloads_perl-extutils-depends| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-depends.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-depends| image:: https://quay.io/repository/biocontainers/perl-extutils-depends/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-depends







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-depends/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-depends/README.html

