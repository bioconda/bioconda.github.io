:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gd'
.. highlight: bash

perl-gd
=======

.. conda:recipe:: perl-gd
   :replaces_section_title:

   Perl interface to the gd2 graphics library

   :homepage: http://metacpan.org/pod/GD
   :license: perl_5
   :recipe: /`perl-gd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd/meta.yaml>`_

   


.. conda:package:: perl-gd

   |downloads_perl-gd| |docker_perl-gd|

   :versions: 2.70-0, 2.69-0, 2.68-0, 2.56-9, 2.56-8, 2.56-7, 2.56-6, 2.56-5, 2.56-4, 2.56-3, 2.56-0
   
   :depends libgd: >=2.2.5,<2.3.0a0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gd

   and update with::

      conda update perl-gd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-gd:<tag>

   (see `perl-gd/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gd| image:: https://img.shields.io/conda/dn/bioconda/perl-gd.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-gd| image:: https://quay.io/repository/biocontainers/perl-gd/status
   :target: https://quay.io/repository/biocontainers/perl-gd
.. _`perl-gd/tags`: https://quay.io/repository/biocontainers/perl-gd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gd/README.html