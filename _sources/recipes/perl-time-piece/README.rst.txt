.. title:: Package Recipe 'perl-time-piece'
.. highlight: bash


perl-time-piece
===============

.. conda:recipe:: perl-time-piece/1.27
   :replaces_section_title:

   Object Oriented time objects

   :homepage: http://metacpan.org/pod/Time::Piece
   :license: perl_5
   :recipe: /`perl-time-piece <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-piece>`_/`1.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-piece/1.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-piece/1.27/meta.yaml>`_

   


.. conda:package:: perl-time-piece

   |downloads_perl-time-piece| |docker_perl-time-piece|

   :versions: 1.27

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-time-piece|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-time-piece

   and update with::

      conda update perl-time-piece

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-time-piece


.. |required_by_perl-time-piece| conda:required_by:: perl-time-piece
.. |downloads_perl-time-piece| image:: https://img.shields.io/conda/dn/bioconda/perl-time-piece.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-time-piece| image:: https://quay.io/repository/biocontainers/perl-time-piece/status
   :target: https://quay.io/repository/biocontainers/perl-time-piece







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-piece/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-piece/README.html

