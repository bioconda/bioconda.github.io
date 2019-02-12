:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-info-driver-osx'
.. highlight: bash

perl-sys-info-driver-osx
========================

.. conda:recipe:: perl-sys-info-driver-osx
   :replaces_section_title:

   OSX driver for Sys\:\:Info

   :homepage: http://metacpan.org/pod/Sys::Info::Driver::OSX
   :license: perl_5
   :recipe: /`perl-sys-info-driver-osx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-driver-osx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-driver-osx/meta.yaml>`_

   


.. conda:package:: perl-sys-info-driver-osx

   |downloads_perl-sys-info-driver-osx| |docker_perl-sys-info-driver-osx|

   :versions: 0.7959-0, 0.7958-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-capture-tiny: 
   
   :depends perl-mac-propertylist: 
   
   :depends perl-sys-info-base: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sys-info-driver-osx

   and update with::

      conda update perl-sys-info-driver-osx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sys-info-driver-osx:<tag>

   (see `perl-sys-info-driver-osx/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-info-driver-osx| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-info-driver-osx.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sys-info-driver-osx| image:: https://quay.io/repository/biocontainers/perl-sys-info-driver-osx/status
   :target: https://quay.io/repository/biocontainers/perl-sys-info-driver-osx
.. _`perl-sys-info-driver-osx/tags`: https://quay.io/repository/biocontainers/perl-sys-info-driver-osx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-info-driver-osx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-info-driver-osx/README.html