.. title:: Package Recipe 'perl-io-stringy'
.. highlight: bash


perl-io-stringy
===============

.. conda:recipe:: perl-io-stringy
   :replaces_section_title:

   write a file which is updated atomically

   :homepage: http://metacpan.org/pod/IO-stringy
   :license: unknown
   :recipe: /`perl-io-stringy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-stringy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-stringy/meta.yaml>`_

   


.. conda:package:: perl-io-stringy

   |downloads_perl-io-stringy| |docker_perl-io-stringy|

   :versions: 2.111

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-io-stringy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-stringy

   and update with::

      conda update perl-io-stringy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-stringy


.. |required_by_perl-io-stringy| conda:required_by:: perl-io-stringy
.. |downloads_perl-io-stringy| image:: https://img.shields.io/conda/dn/bioconda/perl-io-stringy.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-stringy| image:: https://quay.io/repository/biocontainers/perl-io-stringy/status
   :target: https://quay.io/repository/biocontainers/perl-io-stringy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-stringy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-stringy/README.html

