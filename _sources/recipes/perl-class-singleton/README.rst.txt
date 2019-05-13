:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-singleton'
.. highlight: bash

perl-class-singleton
====================

.. conda:recipe:: perl-class-singleton
   :replaces_section_title:

   Base class for creating singleton objects

   :homepage: http://metacpan.org/pod/Class::Singleton
   :license: unknown
   :recipe: /`perl-class-singleton <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-singleton>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-singleton/meta.yaml>`_

   


.. conda:package:: perl-class-singleton

   |downloads_perl-class-singleton| |docker_perl-class-singleton|

   :versions: 1.5-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-singleton

   and update with::

      conda update perl-class-singleton

   or use the docker container::

      docker pull quay.io/biocontainers/perl-class-singleton:<tag>

   (see `perl-class-singleton/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-singleton| image:: https://img.shields.io/conda/dn/bioconda/perl-class-singleton.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-singleton
   :alt:   (downloads)
.. |docker_perl-class-singleton| image:: https://quay.io/repository/biocontainers/perl-class-singleton/status
   :target: https://quay.io/repository/biocontainers/perl-class-singleton
.. _`perl-class-singleton/tags`: https://quay.io/repository/biocontainers/perl-class-singleton?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-singleton/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-singleton/README.html