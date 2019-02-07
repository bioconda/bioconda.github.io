.. title:: Package Recipe 'perl-image-size'
.. highlight: bash


perl-image-size
===============

.. conda:recipe:: perl-image-size
   :replaces_section_title:

   A library to extract height\/width from images

   :homepage: http://search.cpan.org/dist/Image-Size
   :license: perl_5
   :recipe: /`perl-image-size <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-size>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-size/meta.yaml>`_

   


.. conda:package:: perl-image-size

   |downloads_perl-image-size| |docker_perl-image-size|

   :versions: 3.300

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-image-size|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-image-size

   and update with::

      conda update perl-image-size

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-image-size


.. |required_by_perl-image-size| conda:required_by:: perl-image-size
.. |downloads_perl-image-size| image:: https://img.shields.io/conda/dn/bioconda/perl-image-size.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-image-size| image:: https://quay.io/repository/biocontainers/perl-image-size/status
   :target: https://quay.io/repository/biocontainers/perl-image-size







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-image-size/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-image-size/README.html

