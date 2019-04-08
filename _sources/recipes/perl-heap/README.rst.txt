:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-heap'
.. highlight: bash

perl-heap
=========

.. conda:recipe:: perl-heap
   :replaces_section_title:

   Perl extensions for keeping data partially sorted

   :homepage: http://metacpan.org/pod/Heap
   :license: perl_5
   :recipe: /`perl-heap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap/meta.yaml>`_

   


.. conda:package:: perl-heap

   |downloads_perl-heap| |docker_perl-heap|

   :versions: 0.80-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-heap

   and update with::

      conda update perl-heap

   or use the docker container::

      docker pull quay.io/biocontainers/perl-heap:<tag>

   (see `perl-heap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-heap| image:: https://img.shields.io/conda/dn/bioconda/perl-heap.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-heap| image:: https://quay.io/repository/biocontainers/perl-heap/status
   :target: https://quay.io/repository/biocontainers/perl-heap
.. _`perl-heap/tags`: https://quay.io/repository/biocontainers/perl-heap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap/README.html