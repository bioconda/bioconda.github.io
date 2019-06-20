:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-size'
.. highlight: bash

perl-devel-size
===============

.. conda:recipe:: perl-devel-size
   :replaces_section_title:

   Perl extension for finding the memory usage of Perl variables

   :homepage: http://metacpan.org/pod/Devel::Size
   :license: perl_5
   :recipe: /`perl-devel-size <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-size>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-size/meta.yaml>`_

   


.. conda:package:: perl-devel-size

   |downloads_perl-devel-size| |docker_perl-devel-size|

   :versions: 0.83-0, 0.82-0, 0.80-1, 0.80-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-test-simple: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-size

   and update with::

      conda update perl-devel-size

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-size:<tag>

   (see `perl-devel-size/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-size| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-size.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-size
   :alt:   (downloads)
.. |docker_perl-devel-size| image:: https://quay.io/repository/biocontainers/perl-devel-size/status
   :target: https://quay.io/repository/biocontainers/perl-devel-size
.. _`perl-devel-size/tags`: https://quay.io/repository/biocontainers/perl-devel-size?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-size/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-size/README.html