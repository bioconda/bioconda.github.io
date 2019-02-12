:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-class-moose'
.. highlight: bash

perl-test-class-moose
=====================

.. conda:recipe:: perl-test-class-moose
   :replaces_section_title:

   Serious testing for serious Perl

   :homepage: http://metacpan.org/release/Test-Class-Moose/
   :license: perl_5
   :recipe: /`perl-test-class-moose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose/meta.yaml>`_

   


.. conda:package:: perl-test-class-moose

   |downloads_perl-test-class-moose| |docker_perl-test-class-moose|

   :versions: 0.96-0, 0.95-0, 0.94-0, 0.80-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :depends perl-import-into: 
   
   :depends perl-json-maybexs: 
   
   :depends perl-list-someutils: 
   
   :depends perl-module-runtime: 
   
   :depends perl-module-util: 
   
   :depends perl-moose: 
   
   :depends perl-moosex-getopt: 
   
   :depends perl-namespace-autoclean: 
   
   :depends perl-package-deprecationmanager: 
   
   :depends perl-parallel-forkmanager: 
   
   :depends perl-sub-attribute: 
   
   :depends perl-test-most: 
   
   :depends perl-try-tiny: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-class-moose

   and update with::

      conda update perl-test-class-moose

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-class-moose:<tag>

   (see `perl-test-class-moose/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-class-moose| image:: https://img.shields.io/conda/dn/bioconda/perl-test-class-moose.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-class-moose| image:: https://quay.io/repository/biocontainers/perl-test-class-moose/status
   :target: https://quay.io/repository/biocontainers/perl-test-class-moose
.. _`perl-test-class-moose/tags`: https://quay.io/repository/biocontainers/perl-test-class-moose?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-class-moose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-class-moose/README.html