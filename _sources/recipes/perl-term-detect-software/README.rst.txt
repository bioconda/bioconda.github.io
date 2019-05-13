:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-detect-software'
.. highlight: bash

perl-term-detect-software
=========================

.. conda:recipe:: perl-term-detect-software
   :replaces_section_title:

   Detect terminal \(emulator\) software and its capabilities

   :homepage: https://metacpan.org/release/Term-Detect-Software
   :license: perl_5
   :recipe: /`perl-term-detect-software <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software/meta.yaml>`_

   


.. conda:package:: perl-term-detect-software

   |downloads_perl-term-detect-software| |docker_perl-term-detect-software|

   :versions: 0.21-2, 0.21-1, 0.21-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-experimental: 
   :depends perl-file-which: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-term-detect-software

   and update with::

      conda update perl-term-detect-software

   or use the docker container::

      docker pull quay.io/biocontainers/perl-term-detect-software:<tag>

   (see `perl-term-detect-software/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-detect-software| image:: https://img.shields.io/conda/dn/bioconda/perl-term-detect-software.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-detect-software
   :alt:   (downloads)
.. |docker_perl-term-detect-software| image:: https://quay.io/repository/biocontainers/perl-term-detect-software/status
   :target: https://quay.io/repository/biocontainers/perl-term-detect-software
.. _`perl-term-detect-software/tags`: https://quay.io/repository/biocontainers/perl-term-detect-software?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-detect-software/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-detect-software/README.html