:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ppi'
.. highlight: bash

perl-ppi
========

.. conda:recipe:: perl-ppi/1.236
   :replaces_section_title:

   Parse\, Analyze and Manipulate Perl \(without perl\)

   :homepage: https://github.com/adamkennedy/PPI
   :license: perl_5
   :recipe: /`perl-ppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi>`_/`1.236 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236/meta.yaml>`_

   


.. conda:package:: perl-ppi

   |downloads_perl-ppi| |docker_perl-ppi|

   :versions: 1.236-2, 1.236-1, 1.236-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-class-xsaccessor: 
   :depends perl-clone: 
   :depends perl-digest-md5: 
   :depends perl-file-spec: 
   :depends perl-hook-lexwrap: 
   :depends perl-io-string: 
   :depends perl-list-moreutils: 
   :depends perl-list-util: 
   :depends perl-params-util: 
   :depends perl-task-weaken: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ppi

   and update with::

      conda update perl-ppi

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ppi:<tag>

   (see `perl-ppi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ppi| image:: https://img.shields.io/conda/dn/bioconda/perl-ppi.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-ppi| image:: https://quay.io/repository/biocontainers/perl-ppi/status
   :target: https://quay.io/repository/biocontainers/perl-ppi
.. _`perl-ppi/tags`: https://quay.io/repository/biocontainers/perl-ppi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ppi/README.html