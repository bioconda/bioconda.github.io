:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-find-rule'
.. highlight: bash

perl-file-find-rule
===================

.. conda:recipe:: perl-file-find-rule
   :replaces_section_title:

   Alternative interface to File\:\:Find

   :homepage: http://metacpan.org/pod/File::Find::Rule
   :license: perl_5
   :recipe: /`perl-file-find-rule <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find-rule>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find-rule/meta.yaml>`_

   


.. conda:package:: perl-file-find-rule

   |downloads_perl-file-find-rule| |docker_perl-file-find-rule|

   :versions: 0.34-4, 0.34-3, 0.34-2, 0.34-1, 0.34-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-number-compare: 
   
   :depends perl-text-glob: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-find-rule

   and update with::

      conda update perl-file-find-rule

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-find-rule:<tag>

   (see `perl-file-find-rule/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-find-rule| image:: https://img.shields.io/conda/dn/bioconda/perl-file-find-rule.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-find-rule| image:: https://quay.io/repository/biocontainers/perl-file-find-rule/status
   :target: https://quay.io/repository/biocontainers/perl-file-find-rule
.. _`perl-file-find-rule/tags`: https://quay.io/repository/biocontainers/perl-file-find-rule?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-find-rule/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-find-rule/README.html