:orphan:  .. only available via index, not via toctree

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

   :versions: 0.13-1, 0.13-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-cgi: 
   
   :depends perl-heap-simple-perl: 
   
   :depends perl-heap-simple-xs: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-heap-simple

   and update with::

      conda update perl-heap-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-heap-simple:<tag>

   (see `perl-heap-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-heap-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-heap-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-heap-simple| image:: https://quay.io/repository/biocontainers/perl-heap-simple/status
   :target: https://quay.io/repository/biocontainers/perl-heap-simple
.. _`perl-heap-simple/tags`: https://quay.io/repository/biocontainers/perl-heap-simple?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap-simple/README.html