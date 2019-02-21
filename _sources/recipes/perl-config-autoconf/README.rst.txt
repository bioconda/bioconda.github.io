:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-config-autoconf'
.. highlight: bash

perl-config-autoconf
====================

.. conda:recipe:: perl-config-autoconf
   :replaces_section_title:

   A module to implement some of AutoConf macros in pure perl.

   :homepage: https://metacpan.org/release/Config-AutoConf
   :license: perl_5
   :recipe: /`perl-config-autoconf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf/meta.yaml>`_

   


.. conda:package:: perl-config-autoconf

   |downloads_perl-config-autoconf| |docker_perl-config-autoconf|

   :versions: 0.317-0, 0.311-2, 0.311-1, 0.311-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-base: 
   
   :depends perl-capture-tiny: 
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :depends perl-file-temp: 
   
   :depends perl-text-parsewords: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-config-autoconf

   and update with::

      conda update perl-config-autoconf

   or use the docker container::

      docker pull quay.io/biocontainers/perl-config-autoconf:<tag>

   (see `perl-config-autoconf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-config-autoconf| image:: https://img.shields.io/conda/dn/bioconda/perl-config-autoconf.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-config-autoconf| image:: https://quay.io/repository/biocontainers/perl-config-autoconf/status
   :target: https://quay.io/repository/biocontainers/perl-config-autoconf
.. _`perl-config-autoconf/tags`: https://quay.io/repository/biocontainers/perl-config-autoconf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-autoconf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-autoconf/README.html