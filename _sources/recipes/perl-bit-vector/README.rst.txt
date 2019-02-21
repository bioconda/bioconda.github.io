:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bit-vector'
.. highlight: bash

perl-bit-vector
===============

.. conda:recipe:: perl-bit-vector
   :replaces_section_title:

   Efficient bit vector\, set of integers and \"big int\" math library

   :homepage: https://metacpan.org/pod/distribution/Bit-Vector/Vector.pod
   :license: Perl
   :recipe: /`perl-bit-vector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bit-vector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bit-vector/meta.yaml>`_

   


.. conda:package:: perl-bit-vector

   |downloads_perl-bit-vector| |docker_perl-bit-vector|

   :versions: 7.4-2, 7.4-1, 7.4-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bit-vector

   and update with::

      conda update perl-bit-vector

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bit-vector:<tag>

   (see `perl-bit-vector/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bit-vector| image:: https://img.shields.io/conda/dn/bioconda/perl-bit-vector.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bit-vector| image:: https://quay.io/repository/biocontainers/perl-bit-vector/status
   :target: https://quay.io/repository/biocontainers/perl-bit-vector
.. _`perl-bit-vector/tags`: https://quay.io/repository/biocontainers/perl-bit-vector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bit-vector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bit-vector/README.html