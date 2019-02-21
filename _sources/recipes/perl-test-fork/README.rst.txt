:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-fork'
.. highlight: bash

perl-test-fork
==============

.. conda:recipe:: perl-test-fork
   :replaces_section_title:

   test code which forks

   :homepage: http://metacpan.org/pod/Test::Fork
   :license: perl_5
   :recipe: /`perl-test-fork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-fork>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-fork/meta.yaml>`_

   


.. conda:package:: perl-test-fork

   |downloads_perl-test-fork| |docker_perl-test-fork|

   :versions: 0.02-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-fork

   and update with::

      conda update perl-test-fork

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-fork:<tag>

   (see `perl-test-fork/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-fork| image:: https://img.shields.io/conda/dn/bioconda/perl-test-fork.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-fork| image:: https://quay.io/repository/biocontainers/perl-test-fork/status
   :target: https://quay.io/repository/biocontainers/perl-test-fork
.. _`perl-test-fork/tags`: https://quay.io/repository/biocontainers/perl-test-fork?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-fork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-fork/README.html