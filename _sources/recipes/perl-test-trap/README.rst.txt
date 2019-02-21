:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-trap'
.. highlight: bash

perl-test-trap
==============

.. conda:recipe:: perl-test-trap
   :replaces_section_title:

   Trap exit codes\, exceptions\, output\, etc.

   :homepage: http://metacpan.org/pod/Test::Trap
   :license: perl_5
   :recipe: /`perl-test-trap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-trap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-trap/meta.yaml>`_

   


.. conda:package:: perl-test-trap

   |downloads_perl-test-trap| |docker_perl-test-trap|

   :versions: 0.3.3-0, 0.3.2-4, 0.3.2-3
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-base: 
   
   :depends perl-carp: 
   
   :depends perl-constant: 
   
   :depends perl-data-dump: 
   
   :depends perl-exporter: 
   
   :depends perl-file-temp: 
   
   :depends perl-lib: 
   
   :depends perl-version: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-trap

   and update with::

      conda update perl-test-trap

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-trap:<tag>

   (see `perl-test-trap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-trap| image:: https://img.shields.io/conda/dn/bioconda/perl-test-trap.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-trap| image:: https://quay.io/repository/biocontainers/perl-test-trap/status
   :target: https://quay.io/repository/biocontainers/perl-test-trap
.. _`perl-test-trap/tags`: https://quay.io/repository/biocontainers/perl-test-trap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-trap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-trap/README.html