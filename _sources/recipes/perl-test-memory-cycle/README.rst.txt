:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-memory-cycle'
.. highlight: bash

perl-test-memory-cycle
======================

.. conda:recipe:: perl-test-memory-cycle
   :replaces_section_title:
   :noindex:

   Verifies code hasn\'t left circular references

   :homepage: http://metacpan.org/pod/Test::Memory::Cycle
   :license: unknown
   :recipe: /`perl-test-memory-cycle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-memory-cycle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-memory-cycle/meta.yaml>`_

   


.. conda:package:: perl-test-memory-cycle

   |downloads_perl-test-memory-cycle| |docker_perl-test-memory-cycle|

   :versions:
      
      

      ``1.06-1``,  ``1.06-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-devel-cycle: 
   :depends perl-getopt-long: 
   :depends perl-padwalker: 
   :depends perl-test-builder-tester: 
   :depends perl-test-simple: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-memory-cycle

   and update with::

      conda update perl-test-memory-cycle

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-memory-cycle:<tag>

   (see `perl-test-memory-cycle/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-memory-cycle| image:: https://img.shields.io/conda/dn/bioconda/perl-test-memory-cycle.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-memory-cycle
   :alt:   (downloads)
.. |docker_perl-test-memory-cycle| image:: https://quay.io/repository/biocontainers/perl-test-memory-cycle/status
   :target: https://quay.io/repository/biocontainers/perl-test-memory-cycle
.. _`perl-test-memory-cycle/tags`: https://quay.io/repository/biocontainers/perl-test-memory-cycle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-memory-cycle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-memory-cycle/README.html