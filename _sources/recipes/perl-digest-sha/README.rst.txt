:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-sha'
.. highlight: bash

perl-digest-sha
===============

.. conda:recipe:: perl-digest-sha/5.88
   :replaces_section_title:

   Perl extension for SHA\-1\/224\/256\/384\/512

   :homepage: http://metacpan.org/pod/Digest::SHA
   :license: perl_5
   :recipe: /`perl-digest-sha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha>`_/`5.88 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88/meta.yaml>`_

   


.. conda:package:: perl-digest-sha

   |downloads_perl-digest-sha| |docker_perl-digest-sha|

   :versions: 5.88-1, 5.88-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-digest-sha

   and update with::

      conda update perl-digest-sha

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-digest-sha:<tag>

   (see `perl-digest-sha/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-sha| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-sha.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-digest-sha| image:: https://quay.io/repository/biocontainers/perl-digest-sha/status
   :target: https://quay.io/repository/biocontainers/perl-digest-sha
.. _`perl-digest-sha/tags`: https://quay.io/repository/biocontainers/perl-digest-sha?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-sha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-sha/README.html