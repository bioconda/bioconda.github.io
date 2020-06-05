:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-random'
.. highlight: bash

perl-string-random
==================

.. conda:recipe:: perl-string-random/0.30
   :replaces_section_title:
   :noindex:

   Perl module to generate random strings based on a pattern

   :homepage: http://metacpan.org/release/String-Random
   :license: perl_5
   :recipe: /`perl-string-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-random>`_/`0.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-random/0.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-random/0.30/meta.yaml>`_

   


.. conda:package:: perl-string-random

   |downloads_perl-string-random| |docker_perl-string-random|

   :versions:
      
      

      ``0.30-1``,  ``0.30-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-parent: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-string-random

   and update with::

      conda update perl-string-random

   or use the docker container::

      docker pull quay.io/biocontainers/perl-string-random:<tag>

   (see `perl-string-random/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-random| image:: https://img.shields.io/conda/dn/bioconda/perl-string-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-random
   :alt:   (downloads)
.. |docker_perl-string-random| image:: https://quay.io/repository/biocontainers/perl-string-random/status
   :target: https://quay.io/repository/biocontainers/perl-string-random
.. _`perl-string-random/tags`: https://quay.io/repository/biocontainers/perl-string-random?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-random/README.html