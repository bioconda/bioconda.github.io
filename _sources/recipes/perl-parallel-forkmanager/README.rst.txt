:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parallel-forkmanager'
.. highlight: bash

perl-parallel-forkmanager
=========================

.. conda:recipe:: perl-parallel-forkmanager
   :replaces_section_title:

   A simple parallel processing fork manager

   :homepage: https://github.com/dluxhu/perl-parallel-forkmanager
   :license: perl_5
   :recipe: /`perl-parallel-forkmanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-forkmanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-forkmanager/meta.yaml>`_

   


.. conda:package:: perl-parallel-forkmanager

   |downloads_perl-parallel-forkmanager| |docker_perl-parallel-forkmanager|

   :versions: 2.02-0, 1.17-1, 1.17-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-file-path: 
   
   :depends perl-file-temp: 
   
   :depends perl-moo: 
   
   :depends perl-storable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-parallel-forkmanager

   and update with::

      conda update perl-parallel-forkmanager

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-parallel-forkmanager:<tag>

   (see `perl-parallel-forkmanager/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parallel-forkmanager| image:: https://img.shields.io/conda/dn/bioconda/perl-parallel-forkmanager.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-parallel-forkmanager| image:: https://quay.io/repository/biocontainers/perl-parallel-forkmanager/status
   :target: https://quay.io/repository/biocontainers/perl-parallel-forkmanager
.. _`perl-parallel-forkmanager/tags`: https://quay.io/repository/biocontainers/perl-parallel-forkmanager?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parallel-forkmanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parallel-forkmanager/README.html