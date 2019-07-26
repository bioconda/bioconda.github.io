:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-levenshteinxs'
.. highlight: bash

perl-text-levenshteinxs
=======================

.. conda:recipe:: perl-text-levenshteinxs/0.03
   :replaces_section_title:

   An XS implementation of the Levenshtein edit distance

   :homepage: http://metacpan.org/pod/Text::LevenshteinXS
   :license: Perl
   :recipe: /`perl-text-levenshteinxs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-levenshteinxs>`_/`0.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-levenshteinxs/0.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-levenshteinxs/0.03/meta.yaml>`_

   


.. conda:package:: perl-text-levenshteinxs

   |downloads_perl-text-levenshteinxs| |docker_perl-text-levenshteinxs|

   :versions: 0.03-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-test: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-levenshteinxs

   and update with::

      conda update perl-text-levenshteinxs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-levenshteinxs:<tag>

   (see `perl-text-levenshteinxs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-levenshteinxs| image:: https://img.shields.io/conda/dn/bioconda/perl-text-levenshteinxs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-levenshteinxs
   :alt:   (downloads)
.. |docker_perl-text-levenshteinxs| image:: https://quay.io/repository/biocontainers/perl-text-levenshteinxs/status
   :target: https://quay.io/repository/biocontainers/perl-text-levenshteinxs
.. _`perl-text-levenshteinxs/tags`: https://quay.io/repository/biocontainers/perl-text-levenshteinxs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-levenshteinxs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-levenshteinxs/README.html