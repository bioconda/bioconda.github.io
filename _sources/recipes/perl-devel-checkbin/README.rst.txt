:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checkbin'
.. highlight: bash

perl-devel-checkbin
===================

.. conda:recipe:: perl-devel-checkbin
   :replaces_section_title:

   check that a command is available

   :homepage: https://metacpan.org/pod/Devel::CheckBin
   :license: perl_5
   :recipe: /`perl-devel-checkbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkbin/meta.yaml>`_

   


.. conda:package:: perl-devel-checkbin

   |downloads_perl-devel-checkbin| |docker_perl-devel-checkbin|

   :versions: 0.04-2, 0.04-1, 0.04-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-checkbin

   and update with::

      conda update perl-devel-checkbin

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-checkbin:<tag>

   (see `perl-devel-checkbin/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-checkbin| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checkbin.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checkbin
   :alt:   (downloads)
.. |docker_perl-devel-checkbin| image:: https://quay.io/repository/biocontainers/perl-devel-checkbin/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checkbin
.. _`perl-devel-checkbin/tags`: https://quay.io/repository/biocontainers/perl-devel-checkbin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checkbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checkbin/README.html