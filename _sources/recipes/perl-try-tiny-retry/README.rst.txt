:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-try-tiny-retry'
.. highlight: bash

perl-try-tiny-retry
===================

.. conda:recipe:: perl-try-tiny-retry
   :replaces_section_title:

   Just like Try\:\:Tiny\, but with retry instead of try.

   :homepage: https://github.com/dagolden/Try-Tiny-Retry
   :license: Apache-2.0
   :recipe: /`perl-try-tiny-retry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-try-tiny-retry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-try-tiny-retry/meta.yaml>`_

   


.. conda:package:: perl-try-tiny-retry

   |downloads_perl-try-tiny-retry| |docker_perl-try-tiny-retry|

   :versions: 0.004-0, 0.002-1, 0.002-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-try-tiny-retry

   and update with::

      conda update perl-try-tiny-retry

   or use the docker container::

      docker pull quay.io/biocontainers/perl-try-tiny-retry:<tag>

   (see `perl-try-tiny-retry/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-try-tiny-retry| image:: https://img.shields.io/conda/dn/bioconda/perl-try-tiny-retry.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-try-tiny-retry
   :alt:   (downloads)
.. |docker_perl-try-tiny-retry| image:: https://quay.io/repository/biocontainers/perl-try-tiny-retry/status
   :target: https://quay.io/repository/biocontainers/perl-try-tiny-retry
.. _`perl-try-tiny-retry/tags`: https://quay.io/repository/biocontainers/perl-try-tiny-retry?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-try-tiny-retry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-try-tiny-retry/README.html