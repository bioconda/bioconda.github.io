:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-file'
.. highlight: bash

perl-test-file
==============

.. conda:recipe:: perl-test-file
   :replaces_section_title:

   test file attributes

   :homepage: https://github.com/briandfoy/test-file
   :license: perl_5
   :recipe: /`perl-test-file <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file/meta.yaml>`_

   


.. conda:package:: perl-test-file

   |downloads_perl-test-file| |docker_perl-test-file|

   :versions: 1.443-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-file

   and update with::

      conda update perl-test-file

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-file:<tag>

   (see `perl-test-file/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-file| image:: https://img.shields.io/conda/dn/bioconda/perl-test-file.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-file
   :alt:   (downloads)
.. |docker_perl-test-file| image:: https://quay.io/repository/biocontainers/perl-test-file/status
   :target: https://quay.io/repository/biocontainers/perl-test-file
.. _`perl-test-file/tags`: https://quay.io/repository/biocontainers/perl-test-file?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-file/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-file/README.html