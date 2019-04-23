:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-heap-simple-xs'
.. highlight: bash

perl-heap-simple-xs
===================

.. conda:recipe:: perl-heap-simple-xs
   :replaces_section_title:

   An XS implementation of the Heap\:\:Simple interface

   :homepage: http://metacpan.org/pod/Heap::Simple::XS
   :license: unknown
   :recipe: /`perl-heap-simple-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-xs/meta.yaml>`_

   


.. conda:package:: perl-heap-simple-xs

   |downloads_perl-heap-simple-xs| |docker_perl-heap-simple-xs|

   :versions: 0.10-2, 0.10-1, 0.10-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-heap-simple-xs

   and update with::

      conda update perl-heap-simple-xs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-heap-simple-xs:<tag>

   (see `perl-heap-simple-xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-heap-simple-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-heap-simple-xs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-heap-simple-xs| image:: https://quay.io/repository/biocontainers/perl-heap-simple-xs/status
   :target: https://quay.io/repository/biocontainers/perl-heap-simple-xs
.. _`perl-heap-simple-xs/tags`: https://quay.io/repository/biocontainers/perl-heap-simple-xs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap-simple-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap-simple-xs/README.html