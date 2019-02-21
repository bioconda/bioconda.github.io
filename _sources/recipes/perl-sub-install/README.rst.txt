:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-install'
.. highlight: bash

perl-sub-install
================

.. conda:recipe:: perl-sub-install
   :replaces_section_title:

   install subroutines into packages easily

   :homepage: https://github.com/rjbs/Sub-Install
   :license: perl_5
   :recipe: /`perl-sub-install <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-install>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-install/meta.yaml>`_

   


.. conda:package:: perl-sub-install

   |downloads_perl-sub-install| |docker_perl-sub-install|

   :versions: 0.928-2, 0.928-1, 0.928-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-install

   and update with::

      conda update perl-sub-install

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-install:<tag>

   (see `perl-sub-install/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-install| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-install.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sub-install| image:: https://quay.io/repository/biocontainers/perl-sub-install/status
   :target: https://quay.io/repository/biocontainers/perl-sub-install
.. _`perl-sub-install/tags`: https://quay.io/repository/biocontainers/perl-sub-install?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-install/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-install/README.html