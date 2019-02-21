:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-levenshtein'
.. highlight: bash

perl-text-levenshtein
=====================

.. conda:recipe:: perl-text-levenshtein/0.13
   :replaces_section_title:

   calculate the Levenshtein edit distance between two strings

   :homepage: https://github.com/neilbowers/Text-Levenshtein
   :license: perl_5
   :recipe: /`perl-text-levenshtein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-levenshtein>`_/`0.13 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-levenshtein/0.13>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-levenshtein/0.13/meta.yaml>`_

   


.. conda:package:: perl-text-levenshtein

   |downloads_perl-text-levenshtein| |docker_perl-text-levenshtein|

   :versions: 0.13-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-levenshtein

   and update with::

      conda update perl-text-levenshtein

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-levenshtein:<tag>

   (see `perl-text-levenshtein/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-levenshtein| image:: https://img.shields.io/conda/dn/bioconda/perl-text-levenshtein.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-levenshtein| image:: https://quay.io/repository/biocontainers/perl-text-levenshtein/status
   :target: https://quay.io/repository/biocontainers/perl-text-levenshtein
.. _`perl-text-levenshtein/tags`: https://quay.io/repository/biocontainers/perl-text-levenshtein?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-levenshtein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-levenshtein/README.html