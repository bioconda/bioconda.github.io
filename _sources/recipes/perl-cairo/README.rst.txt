.. title:: Package Recipe 'perl-cairo'
.. highlight: bash


perl-cairo
==========

.. conda:recipe:: perl-cairo
   :replaces_section_title:

   Perl interface to the cairo 2d vector graphics library

   :homepage: http://gtk2-perl.sourceforge.net
   :license: lgpl_2_1
   :recipe: /`perl-cairo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cairo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cairo/meta.yaml>`_

   


.. conda:package:: perl-cairo

   |downloads_perl-cairo| |docker_perl-cairo|

   :versions: 1.106

   :depends: :conda:package:`cairo`  :conda:package:`perl` 5.22.0* :conda:package:`perl-extutils-depends`  :conda:package:`perl-extutils-pkgconfig`  :conda:package:`xorg-libsm`  :conda:package:`xorg-libxext`  :conda:package:`xorg-libxrender`  

   :required~by: |required_by_perl-cairo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cairo

   and update with::

      conda update perl-cairo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cairo


.. |required_by_perl-cairo| conda:required_by:: perl-cairo
.. |downloads_perl-cairo| image:: https://img.shields.io/conda/dn/bioconda/perl-cairo.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cairo| image:: https://quay.io/repository/biocontainers/perl-cairo/status
   :target: https://quay.io/repository/biocontainers/perl-cairo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cairo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cairo/README.html

