.. title:: Package Recipe 'perl-heap-simple'
.. highlight: bash


perl-heap-simple
================

.. conda:recipe:: perl-heap-simple
   :replaces_section_title:

   Fast and easy to use classic heaps

   :homepage: http://metacpan.org/pod/Heap::Simple
   :license: unknown
   :recipe: /`perl-heap-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple/meta.yaml>`_

   


.. conda:package:: perl-heap-simple

   |downloads_perl-heap-simple| |docker_perl-heap-simple|

   :versions: 0.13

   :depends: :conda:package:`perl-cgi`  :conda:package:`perl-heap-simple-perl`  :conda:package:`perl-heap-simple-xs`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-heap-simple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-heap-simple

   and update with::

      conda update perl-heap-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-heap-simple


.. |required_by_perl-heap-simple| conda:required_by:: perl-heap-simple
.. |downloads_perl-heap-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-heap-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-heap-simple| image:: https://quay.io/repository/biocontainers/perl-heap-simple/status
   :target: https://quay.io/repository/biocontainers/perl-heap-simple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap-simple/README.html

