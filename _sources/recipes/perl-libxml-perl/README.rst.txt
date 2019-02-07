.. title:: Package Recipe 'perl-libxml-perl'
.. highlight: bash


perl-libxml-perl
================

.. conda:recipe:: perl-libxml-perl
   :replaces_section_title:

   Perl SAX parser using nsgmls

   :homepage: http://metacpan.org/pod/libxml-perl
   :license: unknown
   :recipe: /`perl-libxml-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libxml-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libxml-perl/meta.yaml>`_

   


.. conda:package:: perl-libxml-perl

   |downloads_perl-libxml-perl| |docker_perl-libxml-perl|

   :versions: 0.08

   :depends: :conda:package:`perl-threaded`  :conda:package:`perl-xml-parser`  

   :required~by: |required_by_perl-libxml-perl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-libxml-perl

   and update with::

      conda update perl-libxml-perl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-libxml-perl


.. |required_by_perl-libxml-perl| conda:required_by:: perl-libxml-perl
.. |downloads_perl-libxml-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-libxml-perl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-libxml-perl| image:: https://quay.io/repository/biocontainers/perl-libxml-perl/status
   :target: https://quay.io/repository/biocontainers/perl-libxml-perl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-libxml-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-libxml-perl/README.html

