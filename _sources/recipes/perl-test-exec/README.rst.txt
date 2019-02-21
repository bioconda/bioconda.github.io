:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-exec'
.. highlight: bash

perl-test-exec
==============

.. conda:recipe:: perl-test-exec
   :replaces_section_title:

   Test that some code calls exec without terminating testing

   :homepage: https://metacpan.org/pod/Test::Exec
   :license: perl_5
   :recipe: /`perl-test-exec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-exec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-exec/meta.yaml>`_

   


.. conda:package:: perl-test-exec

   |downloads_perl-test-exec| |docker_perl-test-exec|

   :versions: 0.04-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-return-multilevel: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-exec

   and update with::

      conda update perl-test-exec

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-exec:<tag>

   (see `perl-test-exec/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-exec| image:: https://img.shields.io/conda/dn/bioconda/perl-test-exec.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-exec| image:: https://quay.io/repository/biocontainers/perl-test-exec/status
   :target: https://quay.io/repository/biocontainers/perl-test-exec
.. _`perl-test-exec/tags`: https://quay.io/repository/biocontainers/perl-test-exec?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-exec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-exec/README.html