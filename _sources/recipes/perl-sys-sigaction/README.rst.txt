:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-sigaction'
.. highlight: bash

perl-sys-sigaction
==================

.. conda:recipe:: perl-sys-sigaction/0.23
   :replaces_section_title:

   Perl extension for Consistent Signal Handling

   :homepage: http://metacpan.org/pod/Sys::SigAction
   :license: perl_5
   :recipe: /`perl-sys-sigaction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-sigaction>`_/`0.23 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-sigaction/0.23>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-sigaction/0.23/meta.yaml>`_

   


.. conda:package:: perl-sys-sigaction

   |downloads_perl-sys-sigaction| |docker_perl-sys-sigaction|

   :versions: 0.23-1, 0.23-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sys-sigaction

   and update with::

      conda update perl-sys-sigaction

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sys-sigaction:<tag>

   (see `perl-sys-sigaction/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-sigaction| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-sigaction.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sys-sigaction| image:: https://quay.io/repository/biocontainers/perl-sys-sigaction/status
   :target: https://quay.io/repository/biocontainers/perl-sys-sigaction
.. _`perl-sys-sigaction/tags`: https://quay.io/repository/biocontainers/perl-sys-sigaction?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-sigaction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-sigaction/README.html