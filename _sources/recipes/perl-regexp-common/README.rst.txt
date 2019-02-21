:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-regexp-common'
.. highlight: bash

perl-regexp-common
==================

.. conda:recipe:: perl-regexp-common
   :replaces_section_title:

   Provide commonly requested regular expressions

   :homepage: http://metacpan.org/pod/Regexp::Common
   :license: mit
   :recipe: /`perl-regexp-common <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-regexp-common>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-regexp-common/meta.yaml>`_

   


.. conda:package:: perl-regexp-common

   |downloads_perl-regexp-common| |docker_perl-regexp-common|

   :versions: 2017060201-0, 2016060801-1, 2016060801-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-regexp-common

   and update with::

      conda update perl-regexp-common

   or use the docker container::

      docker pull quay.io/biocontainers/perl-regexp-common:<tag>

   (see `perl-regexp-common/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-regexp-common| image:: https://img.shields.io/conda/dn/bioconda/perl-regexp-common.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-regexp-common| image:: https://quay.io/repository/biocontainers/perl-regexp-common/status
   :target: https://quay.io/repository/biocontainers/perl-regexp-common
.. _`perl-regexp-common/tags`: https://quay.io/repository/biocontainers/perl-regexp-common?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-regexp-common/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-regexp-common/README.html