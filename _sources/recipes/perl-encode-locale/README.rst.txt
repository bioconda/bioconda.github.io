.. title:: Package Recipe 'perl-encode-locale'
.. highlight: bash


perl-encode-locale
==================

.. conda:recipe:: perl-encode-locale
   :replaces_section_title:

   Determine the locale encoding

   :homepage: http://metacpan.org/pod/Encode::Locale
   :license: perl_5
   :recipe: /`perl-encode-locale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode-locale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode-locale/meta.yaml>`_

   


.. conda:package:: perl-encode-locale

   |downloads_perl-encode-locale| |docker_perl-encode-locale|

   :versions: 1.05

   :depends: :conda:package:`libgcc`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-encode-locale|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-encode-locale

   and update with::

      conda update perl-encode-locale

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-encode-locale


.. |required_by_perl-encode-locale| conda:required_by:: perl-encode-locale
.. |downloads_perl-encode-locale| image:: https://img.shields.io/conda/dn/bioconda/perl-encode-locale.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-encode-locale| image:: https://quay.io/repository/biocontainers/perl-encode-locale/status
   :target: https://quay.io/repository/biocontainers/perl-encode-locale







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-encode-locale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-encode-locale/README.html

