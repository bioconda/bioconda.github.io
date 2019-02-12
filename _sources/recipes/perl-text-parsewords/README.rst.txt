:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-parsewords'
.. highlight: bash

perl-text-parsewords
====================

.. conda:recipe:: perl-text-parsewords
   :replaces_section_title:

   parse text into an array of tokens or array of arrays

   :homepage: http://metacpan.org/pod/Text::ParseWords
   :license: perl_5
   :recipe: /`perl-text-parsewords <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-parsewords>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-parsewords/meta.yaml>`_

   


.. conda:package:: perl-text-parsewords

   |downloads_perl-text-parsewords| |docker_perl-text-parsewords|

   :versions: 3.30-0, 3.29-3, 3.29-2, 3.29-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-scalar-list-utils: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-parsewords

   and update with::

      conda update perl-text-parsewords

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-text-parsewords:<tag>

   (see `perl-text-parsewords/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-parsewords| image:: https://img.shields.io/conda/dn/bioconda/perl-text-parsewords.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-parsewords| image:: https://quay.io/repository/biocontainers/perl-text-parsewords/status
   :target: https://quay.io/repository/biocontainers/perl-text-parsewords
.. _`perl-text-parsewords/tags`: https://quay.io/repository/biocontainers/perl-text-parsewords?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-parsewords/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-parsewords/README.html