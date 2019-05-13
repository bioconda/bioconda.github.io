:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-std'
.. highlight: bash

perl-class-std
==============

.. conda:recipe:: perl-class-std
   :replaces_section_title:

   Support for creating standard \"inside\-out\" classes

   :homepage: http://metacpan.org/pod/Class-Std
   :license: perl_5
   :recipe: /`perl-class-std <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std/meta.yaml>`_

   


.. conda:package:: perl-class-std

   |downloads_perl-class-std| |docker_perl-class-std|

   :versions: 0.013-1, 0.013-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-scalar-list-utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-std

   and update with::

      conda update perl-class-std

   or use the docker container::

      docker pull quay.io/biocontainers/perl-class-std:<tag>

   (see `perl-class-std/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-std| image:: https://img.shields.io/conda/dn/bioconda/perl-class-std.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-std
   :alt:   (downloads)
.. |docker_perl-class-std| image:: https://quay.io/repository/biocontainers/perl-class-std/status
   :target: https://quay.io/repository/biocontainers/perl-class-std
.. _`perl-class-std/tags`: https://quay.io/repository/biocontainers/perl-class-std?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-std/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-std/README.html