:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-info-base'
.. highlight: bash

perl-sys-info-base
==================

.. conda:recipe:: perl-sys-info-base
   :replaces_section_title:

   Base class for Sys\:\:Info

   :homepage: http://metacpan.org/pod/Sys::Info::Base
   :license: perl_5
   :recipe: /`perl-sys-info-base <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-base>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-base/meta.yaml>`_

   


.. conda:package:: perl-sys-info-base

   |downloads_perl-sys-info-base| |docker_perl-sys-info-base|

   :versions: 0.7807-0, 0.7804-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-text-template-simple: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sys-info-base

   and update with::

      conda update perl-sys-info-base

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sys-info-base:<tag>

   (see `perl-sys-info-base/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-info-base| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-info-base.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sys-info-base| image:: https://quay.io/repository/biocontainers/perl-sys-info-base/status
   :target: https://quay.io/repository/biocontainers/perl-sys-info-base
.. _`perl-sys-info-base/tags`: https://quay.io/repository/biocontainers/perl-sys-info-base?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-info-base/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-info-base/README.html