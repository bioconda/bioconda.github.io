:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-info'
.. highlight: bash

perl-sys-info
=============

.. conda:recipe:: perl-sys-info
   :replaces_section_title:

   Fetch information from the host system

   :homepage: http://metacpan.org/pod/Sys::Info
   :license: perl_5
   :recipe: /`perl-sys-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info/meta.yaml>`_

   


.. conda:package:: perl-sys-info

   |downloads_perl-sys-info| |docker_perl-sys-info|

   :versions: 0.7811-0, 0.78-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-sys-info-base: 
   :depends perl-sys-info-driver-osx: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sys-info

   and update with::

      conda update perl-sys-info

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sys-info:<tag>

   (see `perl-sys-info/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-info| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-info.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sys-info
   :alt:   (downloads)
.. |docker_perl-sys-info| image:: https://quay.io/repository/biocontainers/perl-sys-info/status
   :target: https://quay.io/repository/biocontainers/perl-sys-info
.. _`perl-sys-info/tags`: https://quay.io/repository/biocontainers/perl-sys-info?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-info/README.html