:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-socket-ssl'
.. highlight: bash

perl-io-socket-ssl
==================

.. conda:recipe:: perl-io-socket-ssl
   :replaces_section_title:

   Nearly transparent SSL encapsulation for IO\:\:Socket\:\:INET.

   :homepage: https://github.com/noxxi/p5-io-socket-ssl
   :license: perl_5
   :recipe: /`perl-io-socket-ssl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-socket-ssl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-socket-ssl/meta.yaml>`_

   


.. conda:package:: perl-io-socket-ssl

   |downloads_perl-io-socket-ssl| |docker_perl-io-socket-ssl|

   :versions: 2.060-0, 2.056-0, 2.024-1, 2.024-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-net-ssleay: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-socket-ssl

   and update with::

      conda update perl-io-socket-ssl

   or use the docker container::

      docker pull quay.io/biocontainers/perl-io-socket-ssl:<tag>

   (see `perl-io-socket-ssl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-socket-ssl| image:: https://img.shields.io/conda/dn/bioconda/perl-io-socket-ssl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-socket-ssl| image:: https://quay.io/repository/biocontainers/perl-io-socket-ssl/status
   :target: https://quay.io/repository/biocontainers/perl-io-socket-ssl
.. _`perl-io-socket-ssl/tags`: https://quay.io/repository/biocontainers/perl-io-socket-ssl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-socket-ssl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-socket-ssl/README.html