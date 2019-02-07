.. title:: Package Recipe 'perl-image-exiftool'
.. highlight: bash


perl-image-exiftool
===================

.. conda:recipe:: perl-image-exiftool
   :replaces_section_title:

   ExifTool is a platform\-independent Perl library plus a command\-line application for reading\, writing and editing meta information in a wide variety of files.

   :homepage: http://metacpan.org/pod/Image::ExifTool
   :license: perl_5
   :recipe: /`perl-image-exiftool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-exiftool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-exiftool/meta.yaml>`_

   


.. conda:package:: perl-image-exiftool

   |downloads_perl-image-exiftool| |docker_perl-image-exiftool|

   :versions: 11.11, 11.01, 10.40

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-image-exiftool|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-image-exiftool

   and update with::

      conda update perl-image-exiftool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-image-exiftool


.. |required_by_perl-image-exiftool| conda:required_by:: perl-image-exiftool
.. |downloads_perl-image-exiftool| image:: https://img.shields.io/conda/dn/bioconda/perl-image-exiftool.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-image-exiftool| image:: https://quay.io/repository/biocontainers/perl-image-exiftool/status
   :target: https://quay.io/repository/biocontainers/perl-image-exiftool







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-image-exiftool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-image-exiftool/README.html

