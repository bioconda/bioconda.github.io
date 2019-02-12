:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-handle'
.. highlight: bash

perl-io-handle
==============

.. conda:recipe:: perl-io-handle/1.35
   :replaces_section_title:

   supply object methods for I\/O handles

   :homepage: http://metacpan.org/pod/IO::Handle
   :license: perl_5
   :recipe: /`perl-io-handle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-handle>`_/`1.35 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-handle/1.35>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-handle/1.35/meta.yaml>`_

   


.. conda:package:: perl-io-handle

   |downloads_perl-io-handle| |docker_perl-io-handle|

   :versions: 1.36-1, 1.35-1, 1.35-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-handle

   and update with::

      conda update perl-io-handle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-handle:<tag>

   (see `perl-io-handle/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-handle| image:: https://img.shields.io/conda/dn/bioconda/perl-io-handle.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-handle| image:: https://quay.io/repository/biocontainers/perl-io-handle/status
   :target: https://quay.io/repository/biocontainers/perl-io-handle
.. _`perl-io-handle/tags`: https://quay.io/repository/biocontainers/perl-io-handle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-handle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-handle/README.html