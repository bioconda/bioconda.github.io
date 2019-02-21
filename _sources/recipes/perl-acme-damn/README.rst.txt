:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-acme-damn'
.. highlight: bash

perl-acme-damn
==============

.. conda:recipe:: perl-acme-damn
   :replaces_section_title:

   \'Unbless\' Perl objects.

   :homepage: http://metacpan.org/pod/Acme::Damn
   :license: perl_5
   :recipe: /`perl-acme-damn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-acme-damn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-acme-damn/meta.yaml>`_

   


.. conda:package:: perl-acme-damn

   |downloads_perl-acme-damn| |docker_perl-acme-damn|

   :versions: 0.08-2, 0.08-1, 0.08-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-acme-damn

   and update with::

      conda update perl-acme-damn

   or use the docker container::

      docker pull quay.io/biocontainers/perl-acme-damn:<tag>

   (see `perl-acme-damn/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-acme-damn| image:: https://img.shields.io/conda/dn/bioconda/perl-acme-damn.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-acme-damn| image:: https://quay.io/repository/biocontainers/perl-acme-damn/status
   :target: https://quay.io/repository/biocontainers/perl-acme-damn
.. _`perl-acme-damn/tags`: https://quay.io/repository/biocontainers/perl-acme-damn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-acme-damn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-acme-damn/README.html