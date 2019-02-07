.. title:: Package Recipe 'perl-file-listing'
.. highlight: bash


perl-file-listing
=================

.. conda:recipe:: perl-file-listing
   :replaces_section_title:

   parse directory listing

   :homepage: http://metacpan.org/pod/File-Listing
   :license: perl_5
   :recipe: /`perl-file-listing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-listing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-listing/meta.yaml>`_

   


.. conda:package:: perl-file-listing

   |downloads_perl-file-listing| |docker_perl-file-listing|

   :versions: 6.04

   :depends: :conda:package:`perl-http-date`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-file-listing|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-listing

   and update with::

      conda update perl-file-listing

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-listing


.. |required_by_perl-file-listing| conda:required_by:: perl-file-listing
.. |downloads_perl-file-listing| image:: https://img.shields.io/conda/dn/bioconda/perl-file-listing.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-listing| image:: https://quay.io/repository/biocontainers/perl-file-listing/status
   :target: https://quay.io/repository/biocontainers/perl-file-listing







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-listing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-listing/README.html

