:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gdtextutil'
.. highlight: bash

perl-gdtextutil
===============

.. conda:recipe:: perl-gdtextutil
   :replaces_section_title:

   Text utilities for use with GD

   :homepage: http://metacpan.org/pod/GDTextUtil
   :license: unknown
   :recipe: /`perl-gdtextutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdtextutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdtextutil/meta.yaml>`_

   


.. conda:package:: perl-gdtextutil

   |downloads_perl-gdtextutil| |docker_perl-gdtextutil|

   :versions: 0.86-5, 0.86-4, 0.86-3, 0.86-2, 0.86-1, 0.86-0
   
   :depends libgcc-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-gd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gdtextutil

   and update with::

      conda update perl-gdtextutil

   or use the docker container::

      docker pull quay.io/biocontainers/perl-gdtextutil:<tag>

   (see `perl-gdtextutil/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gdtextutil| image:: https://img.shields.io/conda/dn/bioconda/perl-gdtextutil.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-gdtextutil| image:: https://quay.io/repository/biocontainers/perl-gdtextutil/status
   :target: https://quay.io/repository/biocontainers/perl-gdtextutil
.. _`perl-gdtextutil/tags`: https://quay.io/repository/biocontainers/perl-gdtextutil?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gdtextutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gdtextutil/README.html